<?php
function SetRow($row, $value, &$matrix) {
    $matrix[$row] = array_fill(0, sizeof($matrix[$row]), $value);
}

function SetCol($col, $value, &$matrix) {
    for ($row = 0; $row < sizeof($matrix); $row++)
        $matrix[$row][$col] = $value;
}

function QueryRow($row, &$matrix) {
    return array_sum($matrix[$row]);
}

function QueryCol($col, &$matrix) {
    $sum = 0;
    for ($row = 0; $row < sizeof($matrix); $row++)
        $sum += $matrix[$row][$col];
    return $sum;
}

function buildInitialMatrix($rows, $columns) {
    return array_fill(0, $rows, array_fill(0, $columns, 0));
}

$matrix = buildInitialMatrix(256,256);
$file   = trim(file_get_contents($argv[1]));

foreach (explode(PHP_EOL, $file) as $line) {

    $args    = explode(' ', $line);
    $command = array_shift($args);

    if (preg_match('/^Set(Col|Row)$/', $command))
        $command($args[0], $args[1], $matrix);

    elseif (preg_match('/^Query(Col|Row)$/', $command))
        echo $command($args[0], $matrix), PHP_EOL;
}
