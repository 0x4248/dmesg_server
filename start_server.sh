#!/bin/sh
# Dmesg server
# A web server for viewing dmesg output.
# Github: https://www.github.com/0x4248/dmesg_server
# License: GNU General Public License v3.0
# By: 0x4248


PYTHON=/usr/bin/python3
SCRIPT=src/main.py

Echo "Starting server..."
$PYTHON $SCRIPT