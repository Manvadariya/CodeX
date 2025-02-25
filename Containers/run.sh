#!/bin/bash
# Usage: ./run.sh <filename> [input_file]
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 filename [input_file]"
    exit 1
fi

FILE="$1"
EXT="${FILE##*.}"

if [ "$EXT" == "cpp" ]; then
    g++ "$FILE" -o output && { 
        [ -f "$2" ] && ./output < "$2" > output.txt 2>&1 || ./output > output.txt 2>&1; 
    }
elif [ "$EXT" == "java" ]; then
    javac "$FILE" && { 
        [ -f "$2" ] && java "${FILE%.*}" < "$2" > output.txt 2>&1 || java "${FILE%.*}" > output.txt 2>&1; 
    }
else
    echo "Unsupported file type: $EXT" > output.txt 2>&1
    exit 1
fi
