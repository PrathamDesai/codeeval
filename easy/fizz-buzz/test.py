import unittest
import sys
sys.path.append('./support')
from helpers import run_solution, get_output_sample

class FizzBuzzTest(unittest.TestCase):

    def test_solution(self):
        generated = run_solution(__file__)
        expected  = get_output_sample(__file__)
        self.assertEqual(expected, generated)
