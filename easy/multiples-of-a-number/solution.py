import sys

def multiples_of_a_number(x, n, multiple):
    return multiple if multiple>=x else multiples_of_a_number(x, n, multiple+n)

with open(sys.argv[1]) as f:
    for line in f:
        x,n = map(int, line.strip().split(','))
        print multiples_of_a_number(x, n, n)

print ''
