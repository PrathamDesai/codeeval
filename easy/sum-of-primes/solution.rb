require 'prime'
print Prime.take(1000).inject { |sum,n| sum + n }
