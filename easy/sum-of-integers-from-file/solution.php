<?php
echo array_sum(explode(PHP_EOL, trim(file_get_contents($argv[1])))), PHP_EOL;
