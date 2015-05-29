sum=0
while read number; do sum=$(($sum+$number)); done < $1
echo $sum
