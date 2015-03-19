require 'test/unit'

class MultiplesOfANumberTest < Test::Unit::TestCase

  def test_multiples_of_a_number
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb #{dir}/input_sample.txt`
    expected  = File.read("#{dir}/output_sample.txt")

    assert_equal(expected, generated)
  end

end
