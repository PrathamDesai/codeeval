File.open(ARGV[0]) do |file|
  puts file.each_line.inject(0) {|sum,line| sum += line.to_i }
end
