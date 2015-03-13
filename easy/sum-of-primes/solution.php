<?php
function isPrime($number) {
    if ($number == 1) return false;
    for ($i = 2; $i <= sqrt($number); $i++)
        if (is_int($number/$i)) return false;
    return true;
}

$primeNumbers = array();
$number = 1;

while (sizeof($primeNumbers) < 1000) {
    if (isPrime($number)) $primeNumbers[] = $number;
    $number++;
}

echo array_sum($primeNumbers);

//or just echo 3682913;
