import sys

def fizzbuzz(x, y, limit):
    output = []
    for n in range(1, limit+1):
        char = ''
        if n % x == 0:
            char += 'F'
        if n % y == 0:
            char += 'B'
        if char == '':
            char += str(n)
        output.append(char)
    return ' '.join(output)

with open(sys.argv[1]) as f:
    for line in f:
        X, Y, LIMIT = map(int, line.split(' '))
        print fizzbuzz(X, Y, LIMIT)

print ''
