<?php

use Coleus\Calculator\Facades\Calculator;
use Illuminate\Support\Facades\Route;

Route::get('calculator/{operator}/{x}/{y}', fn ($operator, $x, $y) => ['result' => Calculator::$operator($x, $y)]);
