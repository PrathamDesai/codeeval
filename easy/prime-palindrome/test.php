<?php
class PrimePalindromeTest extends PHPUnit_Framework_TestCase {

    public function testPrimePalindrome() {
        $dir = __DIR__;

        $generated = `php $dir/solution.php`;
        $expected  = '929';

        $this->assertEquals($expected, $generated);
    }
}
