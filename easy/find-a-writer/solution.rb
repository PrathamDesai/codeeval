def decrypt_writer_name(encrypted_name, key)
  positions = key.strip.split ' '
  chars     = encrypted_name.split ''
  positions.inject('') { |writer,pos| writer << chars[pos.to_i-1] }
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    encrypted_name, key = line.split('|')
    puts decrypt_writer_name(encrypted_name, key)
  end
end
