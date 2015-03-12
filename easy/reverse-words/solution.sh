while read line; do
    cmd=`command -v tac >/dev/null 2>&1 && echo "tac" || echo "tail -r"`
    output=`echo $line | tr " " "\n" | $cmd | tr "\n" " "`
    echo ${output% }
done < $1
