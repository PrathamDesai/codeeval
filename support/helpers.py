from os import path
from commands import getoutput

def run_solution(file_path):
    d = path.dirname(path.realpath(file_path))
    command = "python %s/solution.py" % d

    if (has_input_sample(d)):
        command += " %s/input_sample.txt" % d

    return getoutput(command)

def has_input_sample(d):
    return path.exists("%s/input_sample.txt" % d)

def get_output_sample(file_path):
    d = path.dirname(path.realpath(file_path))
    return open("%s/output_sample.txt" % d).read()
