<?php
function fizzbuzz($x, $y, $limit) {
    return join(' ', array_map(function ($n) use ($x, $y) {
        $char = '';
        if ($n % $x === 0) $char.= 'F';
        if ($n % $y === 0) $char.= 'B';
        if (empty($char))  $char.= $n;
        return $char;
    }, range(1, $limit)));
}

$file = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line) {
    list($x, $y, $limit) = explode(' ', $line);
    echo fizzbuzz($x, $y, $limit), PHP_EOL;
}
