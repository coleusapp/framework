<?php

namespace Coleus\Calculator;

use Illuminate\Support\ServiceProvider;

class CalculatorServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('calculator', function ($app) {
            return new Calculator();
        });
    }

    public function boot()
    {
        //
    }
    // public function configurePackage(Package $package): void
    // {
    //     /*
    //      * This class is a Package Service Provider
    //      *
    //      * More info: https://github.com/spatie/laravel-package-tools
    //      */
    //     $package
    //         ->name('calculator')
    //         ->hasConfigFile()
    //         ->hasViews()
    //         ->hasAssets()
    //         ->hasRoute('web');
    //
    //     $this->app->bind('calculator', fn ($app) => new Calculator());
    // }
}
