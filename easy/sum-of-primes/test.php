<?php
require_once 'support/helpers.php';

class SumOfPrimesTest extends PHPUnit_Framework_TestCase
{
    public function testSolution()
    {
        $generated = runSolution(__DIR__);
        $expected  = '3682913';
        $this->assertEquals($expected, $generated);
    }

    public function testPerformanceDrivenSolution()
    {
        $dir = __DIR__;
        $generated = `php $dir/solution-performance-driven.php`;
        $expected  = '3682913';
        $this->assertEquals($expected, $generated);
    }
}
