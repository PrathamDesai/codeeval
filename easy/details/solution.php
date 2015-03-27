<?php
function calculateYMoves($line) {
    if (strstr($line, 'XY')) return 0;
    preg_match_all("/X(\.+)Y/", $line, $matches);
    return min(array_map('strlen', $matches[1]));
}

$file = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line)
    echo calculateYMoves($line), PHP_EOL;
