<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\UserController;

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

Route::prefix('equipo')->group(function () {
    Route::get('/',[ EquipoController::class, 'getAll']);
    Route::post('/',[ EquipoController::class, 'create']);
    Route::delete('/{id}',[ EquipoController::class, 'delete']);
    Route::get('/{id}',[ EquipoController::class, 'get']);
    Route::put('/{id}',[ EquipoController::class, 'update']);
});

Route::prefix('ping')->group(function () {
    Route::put('/{id}',[ EquipoController::class, 'ping']);
});

Route::prefix('login')->group(function () {
    Route::post('/',[ UserController::class, 'get']);
});