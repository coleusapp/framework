<?php

namespace Coleus\Calculator\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Coleus\Calculator\Calculator
 */
class Calculator extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Coleus\Calculator\Calculator::class;
    }
}
