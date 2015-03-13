require 'test/unit'

class PrimePalindromeTest < Test::Unit::TestCase

  def test_sum_of_primes
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb`
    expected  = '929';

    assert_equal(expected, generated)
  end

end
