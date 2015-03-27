require 'test/unit'
require './support/helpers'

class PrimePalindromeTest < Test::Unit::TestCase
  def test_solution
    generated = run_solution(__FILE__)
    expected  = '929';
    assert_equal(expected, generated)
  end
end
