#!/bin/sh
# Dmesg server
# A web server for viewing dmesg output.
# Github: https://www.github.com/lewisevans2007/dmesg_server
# License: GNU General Public License v3.0
# By: Lewis Evans


PYTHON=/usr/bin/python3
SCRIPT=src/main.py

Echo "Starting server..."
$PYTHON $SCRIPT