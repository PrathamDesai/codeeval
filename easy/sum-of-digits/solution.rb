File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts line.split('').inject(0) { |sum,digit| sum += digit.to_i }
  end
end
