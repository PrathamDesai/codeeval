
def run_solution(file_path)
  dir = File.dirname(file_path)
  command = "ruby #{dir}/solution.rb"
  command+= " #{dir}/input_sample.txt" if has_input_sample?(dir)
  `#{command}`
end

def has_input_sample?(dir)
  File.exist?("#{dir}/input_sample.txt")
end

def get_output_sample(file_path)
  dir = File.dirname(file_path)
  File.read("#{dir}/output_sample.txt")
end
