<?php
require_once 'support/helpers.php';

class PrimePalindromeTest extends PHPUnit_Framework_TestCase
{
    public function testSolution()
    {
        $generated = runSolution(__DIR__);
        $expected  = '929';
        $this->assertEquals($expected, $generated);
    }
}
