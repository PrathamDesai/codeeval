<?php
foreach (explode(PHP_EOL, trim(file_get_contents($argv[1]))) as $line)
    echo join(' ', array_reverse(explode(' ', $line))), PHP_EOL;
