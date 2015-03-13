require 'test/unit'

class SumOfPrimesTest < Test::Unit::TestCase

  def test_sum_of_primes
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb`
    expected  = '3682913';

    assert_equal(expected, generated)
  end

end
