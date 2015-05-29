import sys
with open(sys.argv[1]) as f:
    for line in f:
        print sum(list(map(int, line.strip())))
print ''
