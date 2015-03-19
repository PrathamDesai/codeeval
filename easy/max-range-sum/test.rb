require 'test/unit'

class MaxRangeSumTest < Test::Unit::TestCase

  def test_max_range_sum
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb #{dir}/input_sample.txt`
    expected  = File.read("#{dir}/output_sample.txt")

    assert_equal(expected, generated)
  end

end
