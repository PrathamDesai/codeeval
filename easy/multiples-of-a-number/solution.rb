def multiples_of_a_number(x, n, multiple)
  multiple >= x ? multiple : multiples_of_a_number(x, n, multiple+n)
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    x, n = line.split(',').map { |var| var.to_i }
    puts multiples_of_a_number(x, n, n)
  end
end
