<?php
function isPrime($number) {
    for ($i = 2; $i <= sqrt($number); $i++)
        if (is_int($number/$i)) return false;
    return true;
}

function isPalindrome($number) { return $number == strrev($number); }

$limit            = 1000;
$numbers          = array_merge(array(1,2), range(3, $limit, 2));
$primeNumbers     = array_filter($numbers, 'isPrime');
$palindromePrimes = array_filter($primeNumbers, 'isPalindrome');

echo end($palindromePrimes);

//or just echo 929;
