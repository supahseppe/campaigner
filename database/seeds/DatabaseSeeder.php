<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = factory('App\User')->create();
        $user->campaigns()->saveMany(
            factory('App\Campaign', 5)->make()
        );
    }
}
