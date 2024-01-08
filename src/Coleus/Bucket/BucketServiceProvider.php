<?php

namespace Coleus\Bucket;

use Illuminate\Support\ServiceProvider;

class BucketServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'bucket');
        $this->mergeConfigFrom(__DIR__.'/config/bucket.php', 'bucket');
        // $this->publishes([
        //     __DIR__.'/resources/dist' => public_path('dist/coleus/bucket')
        // ], 'dist');

        $this->app->bind('bucket', function ($app) {
            return new Bucket();
        });
    }

    public function boot()
    {
        //
    }
}
