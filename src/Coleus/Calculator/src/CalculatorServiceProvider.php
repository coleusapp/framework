<?php

namespace Coleus\Calculator;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class CalculatorServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('calculator')
            ->hasConfigFile()
            ->hasViews()
            ->hasAssets()
            ->hasRoute('web');

        $this->app->bind('calculator', fn ($app) => new Calculator());
    }
}
