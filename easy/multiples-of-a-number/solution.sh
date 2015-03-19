#!/bin/bash
multiples_of_a_number() {
    x=$1; n=$2; multiple=$n
    while [[ $multiple -lt $x ]]; do (( multiple+=n )); done
    echo $multiple
}

while read line; do
    echo `multiples_of_a_number ${line//,/ }`
done < $1
