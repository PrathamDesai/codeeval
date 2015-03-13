require 'prime'

def palindrome?(number)
  number.to_s == number.to_s.reverse
end

print Prime.take(1000).select { |n| palindrome?(n) }.last
