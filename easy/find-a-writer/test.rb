require 'test/unit'
require './support/helpers'

class FindAWriterTest < Test::Unit::TestCase
  def test_solution
    generated = run_solution(__FILE__)
    expected  = get_output_sample(__FILE__)
    assert_equal(expected, generated)
  end
end
