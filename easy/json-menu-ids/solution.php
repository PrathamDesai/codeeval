<?php
function sumOfMenuIds($menu) {
    $sumOfIds = 0;

    foreach ($menu['items'] as $item)
        if (is_array($item) && array_key_exists('label', $item))
            $sumOfIds += $item['id'];

    return $sumOfIds;
}

$file = trim(file_get_contents($argv[1]));
foreach (explode(PHP_EOL, $file) as $jsonString) {
    $json = json_decode($jsonString, true);
    echo sumOfMenuIds($json['menu']), PHP_EOL;
}
