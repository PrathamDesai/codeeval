<?php
function isHappyNumber($number, $alreadyCalculated=array()) {
    $sumOfSquareOfDigits = sumOfSquareOfDigits($number);

    if ($sumOfSquareOfDigits == 1) return true;
    if (in_array($sumOfSquareOfDigits, $alreadyCalculated)) return false;
    $alreadyCalculated[] = $sumOfSquareOfDigits;
    return isHappyNumber($sumOfSquareOfDigits, $alreadyCalculated);
}

function sumOfSquareOfDigits($number) {
    return array_sum(
        array_map(function ($n) { return pow($n,2); }, str_split($number))
    );
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $number)
    echo (isHappyNumber((int)$number) ? 1 : 0), PHP_EOL;
