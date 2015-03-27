import unittest
import sys
sys.path.append('./support')
from helpers import run_solution

class PrimePalindromeTest(unittest.TestCase):

    def test_solution(self):
        generated = run_solution(__file__)
        expected  = '929'
        self.assertEqual(expected, generated)
