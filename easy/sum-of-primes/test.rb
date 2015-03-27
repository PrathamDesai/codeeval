require 'test/unit'
require './support/helpers'

class SumOfPrimesTest < Test::Unit::TestCase
  def test_solution
    generated = run_solution(__FILE__)
    expected  = '3682913';
    assert_equal(expected, generated)
  end
end
