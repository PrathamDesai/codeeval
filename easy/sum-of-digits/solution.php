<?php
$file = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line)
    echo array_sum(str_split($line)), PHP_EOL;
