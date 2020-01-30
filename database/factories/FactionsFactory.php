<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Faction;
use Faker\Generator as Faker;

$factory->define(Faction::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'description' => $faker->paragraph,
        'private' => $faker->boolean,
    ];
});
