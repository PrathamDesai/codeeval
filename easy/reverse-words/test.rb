require 'test/unit'

class ReverseWordsTest < Test::Unit::TestCase

  def test_reverse_words
    dir = File.dirname(__FILE__)

    generated = `ruby #{dir}/solution.rb #{dir}/input_sample.txt`
    expected  = File.read("#{dir}/output_sample.txt")

    assert_equal(expected, generated)
  end

end