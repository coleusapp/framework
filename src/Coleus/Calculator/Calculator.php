<?php

namespace Coleus\Calculator;

class Calculator
{
    public function add(int|float $x, int|float $y): int|float
    {
        return $x + $y;
    }

    public function subtract(int|float $x, int|float $y): int|float
    {
        return $x - $y;
    }

    public function multiply(int|float $x, int|float $y): int|float
    {
        return $x * $y;
    }

    public function divide(int|float $x, int|float $y): int|float
    {
        return $x / $y;
    }
}
