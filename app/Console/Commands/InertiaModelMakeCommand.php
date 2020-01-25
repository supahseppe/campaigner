<?php

namespace App\Console\Commands;

use Illuminate\Support\Str;
use Illuminate\Foundation\Console\ModelMakeCommand;
use Illuminate\Filesystem\Filesystem;

class InertiaModelMakeCommand extends ModelMakeCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:inertia';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Eloquent model with all supporting files and Inertia components';

    /**
     * The filesystem instance.
     *
     * @var \Illuminate\Filesystem\Filesystem
     */
    protected $files;

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Model';

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
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (parent::handle() === false && ! $this->option('force')) {
            return false;
        }

        $input = Str::studly(class_basename($this->argument('name')));
        $name = Str::contains($input, ['/']) ? Str::afterLast($input, '/') : $input;

        $this->createFactory();
        $this->createMigration();
        $this->createController();
        $this->createFeatureTest();
        $this->addRoute($name);
        $this->createVueComponents($input, $name);
    }

    /**
     * Create a model factory for the model.
     *
     * @return void
     */
    protected function createFactory()
    {
        $factory = Str::studly(class_basename($this->argument('name')));

        $this->call('make:factory', [
            'name' => "{$factory}Factory",
            '--model' => $this->qualifyClass($this->getNameInput()),
        ]);
    }

    /**
     * Create a migration file for the model.
     *
     * @return void
     */
    protected function createMigration()
    {
        $table = Str::snake(Str::pluralStudly(class_basename($this->argument('name'))));

        $this->call('make:migration', [
            'name' => "create_{$table}_table",
            '--create' => $table,
        ]);
    }

    /**
     * Create a controller for the model.
     *
     * @return void
     */
    protected function createController()
    {
        $controller = Str::studly(class_basename($this->argument('name')));
        $model_name = $this->qualifyClass($this->getNameInput());
        $name = Str::contains($input, ['/']) ? Str::afterLast($input, '/') : $input;

        $this->call('make:controller', [
            'name' => "{$controller}Controller",
            '--model' => $model_name,
        ]);

        $path = base_path() . "/app/Http/Controllers/{$controller}Controller.php";
        $this->cleanupDummy($path, $name);
    }

    /**
     * Create a test for the model.
     *
     * @return void
     */
    protected function createFeatureTest()
    {
        $model_name = Str::studly(class_basename($this->argument('name')));
        $name = Str::contains($input, ['/']) ? Str::afterLast($input, '/') : $input;

        $this->call('make:test', [
            'name' => "{$model_name}Test",
        ]);

        $path = base_path() . "/tests/Feature/{$model_name}Test.php";
        $this->cleanupDummy($path, $name);
    }

    /**
     * Replaces dummy variables with name input
     *
     * @return string
     */
    protected function replaceDummy($file, $name)
    {
        return preg_replace(
            ['/Dummy/', '/Dummies/', '/dummy/', '/dummies/'],
            [Str::studly($name), Str::pluralStudly($name), Str::lower($name), Str::plural(Str::lower($name))],
            $file
        );
    }

    /**
     * A helper to fix files generated outside this command
     */
    protected function cleanupDummy($path, $name)
    {
        $file = $this->files->get($path);
        $content = $this->replaceDummy($file, $name);
        $this->files->replace($path, $content);
    }

    /**
     * Add route to Routes file
     *
     * @return void
     */
    protected function addRoute($name)
    {
        $plural = strtolower(Str::pluralStudly($name));
        $file_loc = base_path() . '/routes/web.php';
        $route = "\nRoute::resource('$plural', '{$name}Controller');";

        $this->files->append($file_loc, $route);
        $this->info('Model resource route created successfully.');
    }

    /**
     * Create Vue components for the model.
     *
     * @return void
     */
    protected function createVueComponents($input, $name)
    {
        $stubs = $this->files->allFiles(base_path() . '/resources/stubs/vue/pages');

        foreach ($stubs as $stub) {
            $path = base_path() . '/resources/views/pages/' . $input . '/' . $stub->getFilename();

            if (! $this->files->isDirectory(dirname($path))) {
                $this->files->makeDirectory(dirname($path), 0777, true, true);
            }

            $file = $this->replaceDummy($this->files->get($stub), $name);
            $this->files->put($path, $file);
        }

        $this->info('Vue files created successfully.');
    }

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return base_path() . '/resources/stubs/model.stub';
    }
}
