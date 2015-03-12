File.open(ARGV[0]) { |f| f.each_line { |l| puts l.split.reverse.join(' ') }}
