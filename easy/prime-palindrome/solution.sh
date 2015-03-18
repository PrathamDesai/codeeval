#!/bin/bash
is_prime() {
    if [[ $1 -eq 1 ]]; then return 1; fi
    if [[ $1 -eq 2 ]]; then return 0; fi

    number=$1
    i=3

    while [[ i -lt $((number/i)) ]]; do
        if [ $(($1%i)) -eq 0 ]; then return 1; fi
        ((i++))
    done

    return 0
}

is_palindrome() {
    [[ "$1" -eq `echo "$1"|rev` ]] && return 0 || return 1
}

odd_numbers=`seq 1 2 1000`

for n in $odd_numbers; do
    if is_prime $n && is_palindrome $n; then
        biggest_palindrome_prime=$n;
    fi
done

echo $biggest_palindrome_prime
