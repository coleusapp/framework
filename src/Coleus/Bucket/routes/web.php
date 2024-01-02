<?php

use Coleus\Bucket\Http\Controller\BucketController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => config('bucket.route_prefix', 'bucket'),
    'as' => config('bucket.route_prefix', 'bucket.'),
    // 'middleware' => HandleInertiaRequests::class,
], function () {
    Route::middleware(['web', 'auth'])->group(function () {
        Route::get('/', [BucketController::class, 'index']);
    });
});
