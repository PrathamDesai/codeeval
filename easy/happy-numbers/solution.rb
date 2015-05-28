def happy_number?(number, already_calculated=[])
  sum_of_square_of_digits = sum_of_square_of_digits(number)

  return true  if sum_of_square_of_digits == 1
  return false if already_calculated.include? sum_of_square_of_digits

  already_calculated << sum_of_square_of_digits
  happy_number? sum_of_square_of_digits, already_calculated
end

def sum_of_square_of_digits(number)
  number.to_s.chars.map(&:to_i).map {|n| n**2 }.inject(:+)
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    number = line.to_i
    puts "#{happy_number?(number) ? 1 : 0}"
  end
end
