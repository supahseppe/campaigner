<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class ManyToManyMigrationCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:m2m {first} {second}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Makes a many-to-many migration for a given pair of model names';

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
     * Replaces dummy variables with name input
     *
     * @return string
     */
    protected function replaceDummy($file, $names)
    {
        return str_replace(
            [
                'DummyClass',
                'first',
                'firsts',
                'second',
                'seconds',
            ],
            [
                'Create' . Str::studly($names[0]) . Str::studly($names[1]) . 'Table',
                $names[0],
                Str::plural($names[0]),
                $names[1],
                Str::plural($names[1])
            ],
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
        $names[] = Str::lower(trim($this->argument('first')));
        $names[] = Str::lower(trim($this->argument('second')));
        sort($names);

        $file = $this->files->get(base_path() . '/resources/stubs/migration.create.many-to-many.stub');
        $time = Carbon::now();
        $time_formatted = $time->format('Y_m_d_his');
        $path = base_path() . '/database/migrations/' . $time_formatted . '_create_' . $names[0] . '_' . $names[1] . '_table.php';

        $corrected_file = $this->replaceDummy($file, $names);

        if (! $this->files->isDirectory(dirname($path))) {
            $this->files->makeDirectory(dirname($path), 0777, true, true);
        }

        $this->files->put($path, $corrected_file);

        $this->info('Migration created successfully.');
    }
}
