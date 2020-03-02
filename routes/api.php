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

Route::name('campaigns.')->prefix('campaigns')->group(function () {
    Route::get('/autocomplete', 'CampaignController@autocomplete')->name('autocomplete');
});

