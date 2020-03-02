<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Character;
use Faker\Generator as Faker;

$factory->define(Character::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'alias' => $faker->name,
        'bio' => $faker->paragraph,
        'high_concept' => $faker->sentence,
        'active' => true,
        'npc' => false,
    ];
});
