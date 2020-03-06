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

/*
|--------------------------------------------------------------------------
| Campaign endpoints
|--------------------------------------------------------------------------
 */

Route::name('autocomplete.')->prefix('autocomplete')->group(function () {
    Route::get('/user', 'UserController@autocomplete')->name('autocomplete');
    Route::get('/campaign', 'CampaignController@autocomplete')->name('autocomplete');
    Route::get('/faction', 'FactionController@autocomplete')->name('autocomplete');
    Route::get('/location', 'LocationController@autocomplete')->name('autocomplete');
});

