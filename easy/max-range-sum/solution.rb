def max_range_sum(days, gains_or_losses)
  possible_starting_days = (0..gains_or_losses.size - days)

  total = possible_starting_days.inject([]) do |totals, starting_day|
    totals << gains_or_losses.slice(starting_day, days).inject(:+)
  end.max

  total > 0 ? total : 0
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    days, gains_or_losses = line.split(';')
    gains_or_losses = gains_or_losses.split.map { |x| x.to_i }
    puts max_range_sum(days.to_i, gains_or_losses)
  end
end
