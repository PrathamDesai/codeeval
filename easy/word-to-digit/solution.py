import sys

digits_dict = {
    'zero':  '0', 'five':  '5',
    'one':   '1', 'six':   '6',
    'two':   '2', 'seven': '7',
    'three': '3', 'eight': '8',
    'four':  '4', 'nine':  '9'
};

with open(sys.argv[1]) as f:
    for line in f:
        digits = ''
        for word in line.strip().split(';'):
            digits += digits_dict[word]
        print digits
print ''
