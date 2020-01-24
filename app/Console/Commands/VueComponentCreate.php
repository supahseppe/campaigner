<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class VueComponentCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:component {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Makes a Vue component';

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
            ['Dummy', 'dummy'],
            [Str::studly($name), $name],
            $file
        );
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

        $file = $this->files->get(base_path() . '/resources/stubs/vue/Component.vue');
        $path = base_path() . '/resources/js/components/' . $params['path'] . '.vue';

        $corrected_file = $this->replaceDummy($file, $params['name']);

        if (! $this->files->isDirectory(dirname($path))) {
            $this->files->makeDirectory(dirname($path), 0777, true, true);
        }

        $this->files->put($path, $corrected_file);

        $this->info('Vue component created successfully.');
    }
}
