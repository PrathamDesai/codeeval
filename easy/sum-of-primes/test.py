import unittest
from os import path
from commands import getoutput as out

class SumOfPrimesTest(unittest.TestCase):

    def test_sum_of_primes(self):
        d = path.dirname(path.realpath(__file__))

        generated = out("python %s/solution.py" % d)
        expected  = '3682913'

        self.assertEqual(expected, generated)
