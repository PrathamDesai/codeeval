<?php
function runSolution($dir) {
    $command = "php $dir/solution.php";
    if (hasInputSample($dir)) $command.= " $dir/input_sample.txt";
    return `$command`;
}

function hasInputSample($dir) {
    return file_exists("$dir/input_sample.txt");
}

function getOutputSample($dir) {
    return file_get_contents("$dir/output_sample.txt");
}
