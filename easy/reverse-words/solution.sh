while read line; do
    output=`echo $line | tr " " "\n" | tac | tr "\n" " "`
    echo ${output% }
done < $1
