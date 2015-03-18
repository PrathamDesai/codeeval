<?php
function multiplesOfANumber($x, $n, $multiple) {
    if ($multiple >= $x) return $multiple;
    return multiplesOfANumber($x, $n, $multiple+$n);
}

foreach (explode(PHP_EOL, trim(file_get_contents($argv[1]))) as $line) {
    list($x, $n) = explode(',', $line);
    echo multiplesOfANumber($x, $n, $n), PHP_EOL;
}
