<?php
function decryptWriterName($encryptedName, $key) {
    $positions = explode(' ', trim($key));
    $chars  = str_split($encryptedName);
    $writer = '';
    foreach ($positions as $position) $writer.= $chars[$position-1];
    return $writer;
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $line) {
    list($encryptedName, $key) = explode('|', $line);
    echo decryptWriterName($encryptedName, $key), PHP_EOL;
}
