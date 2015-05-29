import sys

sum_of_integers = 0

with open(sys.argv[1]) as input_file:
    for line in input_file:
        sum_of_integers += int(line)

print sum_of_integers
print ''
