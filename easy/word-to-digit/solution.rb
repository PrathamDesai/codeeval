def word_to_digit(line)
  word_to_digit_map = {
      zero:  '0',
      one:   '1',
      two:   '2',
      three: '3',
      four:  '4',
      five:  '5',
      six:   '6',
      seven: '7',
      eight: '8',
      nine:  '9'
  };
  line.strip.split(';').inject('') do |digits, word|
    digits << word_to_digit_map[word.to_sym]
  end
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts word_to_digit(line)
  end
end
