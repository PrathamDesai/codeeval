import unittest
from os import path
from commands import getoutput as out

class MultiplesOfANumberTest(unittest.TestCase):

    def test_reverse_words(self):
        d = path.dirname(path.realpath(__file__))

        generated = out("python %s/solution.py %s/input_sample.txt" % (d,d))
        expected  = open("%s/output_sample.txt" % d).read()

        self.assertEqual(expected, generated)
