<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class InertiaPageMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:page {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Makes an inertia page component';

    /**
     * The filesystem interface
     */
    protected $files;

    /**
     * Create a new controller creator command instance.
     *
     * @param  \Illuminate\Filesystem\Filesystem  $files
     * @return void
     */
    public function __construct(Filesystem $files)
    {
        parent::__construct($files);

        $this->files = $files;
    }

    /**
     * Get the name from a potential path
     *
     * @return string
     */
    protected function getParams($str)
    {
        $parts = explode('/', $str);
        $length = count($parts);

        foreach ($parts as $key => $value) {
            $parts[$key] = Str::studly($value);
        }

        $params['path'] = implode("/", $parts);
        $params['name'] = $parts[$length - 1];

        return $params;
    }

    /**
     * Replaces dummy variables with name input
     *
     * @return string
     */
    protected function replaceDummy($file, $name)
    {
        return str_replace(
            ['Dummy', 'Dummies', 'dummy', 'dummies'],
            [Str::studly($name), Str::pluralStudly($name), Str::lower($name), Str::plural(Str::lower($name))],
            $file
        );
    }

    /**
     * Add route to Routes file
     *
     * @return void
     */
    protected function addRoute($params)
    {
        $file_loc = base_path() . '/routes/web.php';

        $path = strtolower($params['path']);
        $name = strtolower($params['name']);
        $route = "\nRoute::get('/$path', 'PageController@serve')->name('page.$name');";

        $this->files->append($file_loc, $route);
        $this->info('Page route created successfully.');
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function handle()
    {
        $input = trim($this->argument('name'));
        $params = $this->getParams($input);

        $file = $this->files->get(base_path() . '/stubs/vue/Page.vue');
        $path = base_path() . '/resources/views/pages/' . $params['path'] . '.vue';

        $corrected_file = $this->replaceDummy($file, $params['name']);

        if (! $this->files->isDirectory(dirname($path))) {
            $this->files->makeDirectory(dirname($path), 0777, true, true);
        }

        $this->files->put($path, $corrected_file);

        $this->info('Vue page created successfully.');

        $this->addRoute($params);
    }
}
