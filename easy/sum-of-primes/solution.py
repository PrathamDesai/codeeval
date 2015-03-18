import math

def is_prime(number):
    i = 2
    number_sqrt = round(math.sqrt(number))

    while i <= number_sqrt:
        if number % i == 0:
            return False
        i += 1

    return True

PRIME_NUMBERS = []
NUMBER = 2

while len(PRIME_NUMBERS) < 1000:
    if is_prime(NUMBER):
        PRIME_NUMBERS.append(NUMBER)
    NUMBER += 1

print sum(PRIME_NUMBERS)
