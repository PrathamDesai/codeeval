<?php
class SumOfPrimesTest extends PHPUnit_Framework_TestCase {

    public function testSumOfPrimes() {
        $dir = __DIR__;

        $generated = `php $dir/solution.php`;
        $expected  = '3682913';

        $this->assertEquals($expected, $generated);
    }

    public function testSumOfPrimesPerformanceDriven() {
        $dir = __DIR__;

        $generated = `php $dir/solution-performance-driven.php`;
        $expected  = '3682913';

        $this->assertEquals($expected, $generated);
    }
}
