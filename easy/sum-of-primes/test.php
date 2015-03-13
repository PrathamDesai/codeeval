<?php
class SumOfPrimesTest extends PHPUnit_Framework_TestCase {

    public function testSumOfPrimes() {
        $dir = __DIR__;

        $generated = `php $dir/solution.php`;
        $expected  = '3682913';

        $this->assertEquals($expected, $generated);
    }
}
