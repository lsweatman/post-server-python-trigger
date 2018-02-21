import sys

if __name__ == '__main__':
#	print(sys.argv)
	if sys.argv[1] != '':
		filename = "testFile.txt"
		file = open(filename, "a")
		file.write(sys.argv[1] + "\n")
