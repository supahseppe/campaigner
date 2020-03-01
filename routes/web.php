<?php

use Inertia\Inertia;
use Spatie\WelcomeNotification\WelcomesNewUsers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('dashboard');

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->name('page.welcome');

//Route::group(['middleware' => ['web', WelcomesNewUsers::class,]], function () {
//    Route::get('welcome/{user}', 'WelcomeController@showWelcomeForm')->name('welcome');
//    Route::post('welcome/{user}', 'WelcomeController@savePassword');
//});

Route::get('/about', 'PageController@serve')->name('page.about');

Route::get('/contact', 'PageController@serve')->name('page.contact');

/**
 * Models
 */

// Campaigns
Route::get('/campaigns/initial', 'CampaignController@initial')->name('campaigns.initial');
Route::resource('campaigns', 'CampaignController');

// Characters
Route::get('/campaign/{campaign}/characters', 'CharacterController@in_campaign')->name('characters.in_campaign');
Route::resource('characters', 'CharacterController');
Route::get('/campaign/{campaign}/npcs', 'CharacterController@in_campaign')->name('npcs.in_campaign');
Route::resource('npcs', 'NpcController');

// Factions
Route::resource('factions', 'FactionController');

//Locations
Route::resource('locations', 'LocationController');

// Tasks
Route::resource('tasks', 'TaskController');
