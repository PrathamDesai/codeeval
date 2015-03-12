def fizzbuzz(x, y, limit)
  (1..limit).map do |n|
    char = ''
    char+= 'F'    if n % x == 0
    char+= 'B'    if n % y == 0
    char+= "#{n}" if char.empty?
    char
  end.join(' ')
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    x, y, limit = line.split.map {|var| var.to_i}
    puts fizzbuzz(x, y, limit)
  end
end
