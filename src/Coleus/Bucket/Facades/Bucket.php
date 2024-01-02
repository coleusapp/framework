<?php

namespace Coleus\Bucket\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Coleus\Bucket\Bucket
 */
class Bucket extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Coleus\Bucket\Bucket::class;
    }
}
