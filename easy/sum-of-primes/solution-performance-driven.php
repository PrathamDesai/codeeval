<?php
/**
 * This implementation is much less readable than the original solution,
 * but the focus was on enhance the performance. (It is almost 3x faster)
 */

$primeNumbers = array(2,3);
$number = 5;

while (sizeof($primeNumbers) < 1000) {
    $prime = true;
    $numberSqrt = sqrt($number);

    foreach ($primeNumbers as $primeNumber) {
        if ($primeNumber > $numberSqrt) break;
        if (is_int($number/$primeNumber)) {
            $prime = false;
            break;
        }
    }

    if ($prime) $primeNumbers[] = $number;
    $number+=2;
}

echo array_sum($primeNumbers);

//or just echo 3682913;
