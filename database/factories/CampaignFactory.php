<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Campaign;
use Faker\Generator as Faker;

$factory->define(Campaign::class, function (Faker $faker) {
    $user = factory('App\User')->create();
    return [
        'title' => $faker->words(3, true),
        'description' => $faker->paragraph,
    ];
});
