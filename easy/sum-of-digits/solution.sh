while read line; do

    sum=0
    while read digit; do
        sum=$(($sum + $digit))
    done <<< "`echo $line | sed -e 's/\(.\)/\1\n/g' | grep -v '^$'`"
    echo "$sum"

done < $1
