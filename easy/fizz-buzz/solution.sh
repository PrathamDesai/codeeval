fizzbuzz() {
    x=$1; y=$2; limit=$3; output=''

    for n in $(seq 1 $limit); do
        char=''
        if [ `echo "$n % $x" | bc` = "0" ]; then char="${char}F"; fi
        if [ `echo "$n % $y" | bc` = "0" ]; then char="${char}B"; fi
        [ "$char" ] || char="$n"
        output="$output $char"
    done

    echo $output
}

while read line; do echo `fizzbuzz $line`; done < $1
