<?php
function extractHiddenDigits($string) {
    $visibleDigits = array_map(function ($n) { return (string)$n; }, range('0','9'));
    $hiddenDigits  = array_flip(range('a','j'));
    $foundDigits   = '';
    $chars         = str_split($string);

    foreach ($chars as $char) {

        if (in_array($char, $visibleDigits))
            $foundDigits .= $char;

        elseif (in_array($char, array_keys($hiddenDigits)))
            $foundDigits .= $hiddenDigits[$char];
    }

    return empty($foundDigits) ? 'NONE' : $foundDigits;
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $line)
    echo extractHiddenDigits($line), PHP_EOL;
