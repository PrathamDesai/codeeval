def get_longest_word(line)
  line.strip.split(' ').inject do |longest, word|
    longest.length >= word.length ? longest : word
  end
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts get_longest_word(line)
  end
end
