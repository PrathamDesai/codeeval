def fib(n, p1=1, p2=1)
  return 0 if n == 0
  return 1 if n == 1
  return 1 if n == 2
  return p1+p2 if n == 3
  fib(n - 1, p2, p1 + p2)
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts fib(line.to_i)
  end
end
