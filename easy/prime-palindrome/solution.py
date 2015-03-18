import math

def is_prime(number):
    i = 2
    number_sqrt = round(math.sqrt(number))

    while i <= number_sqrt:
        if number % i == 0:
            return False
        i += 1

    return True

def is_palindrome(number):
    return str(number) == str(number)[::-1]

prime_numbers = [n for n in range(1,1000) if is_prime(n)]
palindrome_primes = [n for n in prime_numbers if is_palindrome(n)]

print palindrome_primes[-1]
