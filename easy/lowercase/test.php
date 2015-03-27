<?php
require_once 'support/helpers.php';

class LowercaseTest extends PHPUnit_Framework_TestCase
{
    public function testSolution()
    {
        $generated = runSolution(__DIR__);
        $expected  = getOutputSample(__DIR__);
        $this->assertEquals($expected, $generated);
    }
}