<?php

namespace Coleus\Bucket;

use Illuminate\Support\Facades\Facade;

class Bucket extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'calculator';
    }
}
