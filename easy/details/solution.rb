def calculate_y_moves(line)
  return 0 unless line.scan('XY').empty?
  line.scan(/X(\.+)Y/).map { |found| found.first.size }.min
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts calculate_y_moves(line)
  end
end
