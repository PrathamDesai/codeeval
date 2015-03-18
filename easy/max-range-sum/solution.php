<?php
function max_range_sum($days, $gainsOrLosses) {

    $possibleStartingDays = range(0, sizeof($gainsOrLosses)-$days);
    $gainsOrLossesOverPeriods = array();

    foreach ($possibleStartingDays as $startingDay) {

        $total = array_sum(array_slice($gainsOrLosses, $startingDay, $days));
        if ($total < 0) $total = 0;
        $gainsOrLossesOverPeriods[$startingDay] = $total;

    }

    return max($gainsOrLossesOverPeriods);
}

foreach (explode(PHP_EOL, trim(file_get_contents($argv[1]))) as $line) {

    list($days, $gainsOrLosses) = explode(';', $line);
    $gainsOrLosses = explode(' ', $gainsOrLosses);
    echo max_range_sum($days, $gainsOrLosses), PHP_EOL;

}
