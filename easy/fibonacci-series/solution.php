<?php
function fib($n, $p1=1, $p2=1) {
    if ($n == 0) return 0;
    if ($n == 1) return 1;
    if ($n == 2) return 1;
    if ($n == 3) return $p1 + $p2;
    return fib($n - 1, $p2, $p1 + $p2);
}

$file = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line)
    echo fib($line), PHP_EOL;
