<?php

use App\Http\Controllers\PreguntasController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {

    Route::group([
        'prefix' => 'preguntas',
        'as' => 'preguntas.'
    ], function () {

        Route::get('/', [PreguntasController::class, 'index'])->name('index');
        Route::post('/', [PreguntasController::class, 'store'])->name('store');
        Route::get('/{id}', [PreguntasController::class, 'show'])->name('show');
        Route::put('/{id}', [PreguntasController::class, 'update'])->name('update');
        Route::delete('/{id}', [PreguntasController::class, 'destroy'])->name('destroy');

    });

});


require __DIR__.'/auth.php';
