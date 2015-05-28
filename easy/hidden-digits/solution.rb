def extract_hidden_digits(string)
  hidden_digits = ('a'..'j').each_with_index.each_with_object({}) do |pair,hash|
    hash.merge!({ pair[0] => pair[1].to_s })
  end

  found_digits = string.split('').inject('') do |found, char|
    if char =~ /[[:digit:]]/
      found += char
    elsif hidden_digits.has_key? char
      found += hidden_digits[char]
    end
    found
  end

  found_digits.empty? ? 'NONE' : found_digits
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    puts extract_hidden_digits(line)
  end
end
