import unittest
from os import path
from commands import getoutput as out

class OddNumbersTest(unittest.TestCase):

    def test_odd_numbers(self):
        d = path.dirname(path.realpath(__file__))

        generated = out("python %s/solution.py" % d)
        expected  = open("%s/output_sample.txt" % d).read()

        self.assertEqual(expected, generated)
