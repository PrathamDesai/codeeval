require 'test/unit'

class OddNumbersTest < Test::Unit::TestCase

  def test_odd_numbers
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb`
    expected  = File.read("#{dir}/output_sample.txt")

    assert_equal(expected, generated)
  end

end
