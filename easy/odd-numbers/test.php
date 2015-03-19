<?php
class OddNumbersTest extends PHPUnit_Framework_TestCase {

    public function testOddNumbers() {
        $dir = __DIR__;

        $generated = `php $dir/solution.php`;
        $expected  = file_get_contents("$dir/output_sample.txt");

        $this->assertEquals($expected, $generated);
    }
}
