#!/bin/bash

usage="Usage: ${0} input_folder_name output_folder_name"

if [ $# != 2 ] ; then
    echo $usage
    exit 1;
fi

mkdir -p ${2}

for filename in ${1}/*.kra
do
	[ -e $filename ] || continue
	no_ext=$(echo $filename | grep -oP "(?<=/).*(?=.kra)")
	krita $filename --export --export-filename ${2}/${no_ext}.jpg
done
