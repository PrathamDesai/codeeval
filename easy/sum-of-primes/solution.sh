#!/bin/bash
is_prime() {
    number=$1
    i=3

    while [[ i -le $((number/i)) ]]; do
        if [ $(($1%i)) -eq 0 ]; then return 1; fi
        ((i+=2))
    done

    return 0
}

number=3
prime_numbers="2"
counter=1

while [[ $counter -lt 1000 ]]; do
    if is_prime $number; then
        prime_numbers="$prime_numbers $number";
        ((counter++))
    fi
    ((number+=2))
done

echo $(( ${prime_numbers// /+} ))
