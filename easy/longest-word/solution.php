<?php
function getLongestWord($line) {
    return array_reduce(explode(' ', $line), function ($pv, $cv) {
        return strlen($cv) > strlen($pv) ? $cv : $pv;
    });
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $line)
    echo getLongestWord($line), PHP_EOL;
