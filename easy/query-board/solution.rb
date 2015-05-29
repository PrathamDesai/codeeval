@matrix = Array.new(256, Array.new(256, 0))

def SetRow(row, value)
  @matrix[row] = Array.new @matrix[row].size, value
end

def SetCol(col, value)
  @matrix.each { |row| row[col] = value }
end

def QueryRow(row)
  puts @matrix[row].inject(:+)
end

def QueryCol(col)
  puts @matrix.inject(0) { |sum,row| sum += row[col] }
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    args    = line.split(' ')
    command = args.shift
    args.map! { |arg| arg.to_i }
    send command, *args
  end
end
