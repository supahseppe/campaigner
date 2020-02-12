<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/campaigns/{user}', 'CampaignController@autocomplete')->name('campaigns.autocomplete');
Route::get('/characters', 'CharacterController@autocomplete')->name('characters.autocomplete');
Route::get('/factions', 'FactionController@autocomplete')->name('factions.autocomplete');
Route::get('/locations', 'LocationController@autocomplete')->name('locations.autocomplete');
Route::get('/tasks', 'TaskController@autocomplete')->name('tasks.autocomplete');
