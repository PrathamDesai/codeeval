<?php
class ReverseWordsTest extends PHPUnit_Framework_TestCase {

    public function testReverseWords() {
        $dir = __DIR__;

        $generated = `php $dir/solution.php $dir/input_sample.txt`;
        $expected  = file_get_contents("$dir/output_sample.txt");

        $this->assertEquals($expected, $generated);
    }
}