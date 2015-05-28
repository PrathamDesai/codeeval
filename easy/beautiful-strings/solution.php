<?php
function calculateStringBeauty($string) {
    $frequencyOfLetters = calculateFrequencyOfLetters($string);
    rsort($frequencyOfLetters);
    $beautyFactor = 26;
    $beautyIndex  = 0;

    foreach ($frequencyOfLetters as $frequency) {
        $beautyIndex += $frequency * $beautyFactor;
        $beautyFactor--;
    }
    return $beautyIndex;
}

function calculateFrequencyOfLetters($string) {
    $cleanString = cleanString($string);
    return array_count_values(str_split($cleanString));
}

function cleanString($string) {
    return preg_replace('/[^a-z]/', '', strtolower($string));
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $string)
    echo calculateStringBeauty($string), PHP_EOL;
