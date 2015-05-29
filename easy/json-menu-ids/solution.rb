require 'json'

def sum_of_menu_item_ids(menu)
  menu['items'].inject(0) do |sum,item|
    sum += item['id'] if item.is_a?(Hash) and item.has_key?('label')
    sum
  end
end

File.open(ARGV[0]) do |file|
  file.each_line do |line|
    json = JSON.parse(line)
    puts sum_of_menu_item_ids(json['menu'])
  end
end
