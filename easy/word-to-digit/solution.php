<?php
$wordToDigitMap = array(
    'zero'  => 0,
    'one'   => 1,
    'two'   => 2,
    'three' => 3,
    'four'  => 4,
    'five'  => 5,
    'six'   => 6,
    'seven' => 7,
    'eight' => 8,
    'nine'  => 9
);

function wordToDigit($line) {
    global $wordToDigitMap;

    $digits = '';
    foreach (explode(';', $line) as $word) $digits .= $wordToDigitMap[$word];
    return $digits;
}

$file = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line)
    echo wordToDigit($line), PHP_EOL;
