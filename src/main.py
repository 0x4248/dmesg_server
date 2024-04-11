# Dmesg server
# A web server for viewing dmesg output.
# Github: https://www.github.com/0x4248/dmesg_server
# License: GNU General Public License v3.0
# By: 0x4248

import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify

app = Flask(__name__)

if os.geteuid() != 0:
    print("You need to have root privileges to run this script.\nPlease try again, this time using 'sudo'. Exiting.")
    exit(1)

@app.route('/')
def index():
    f = open("src/web/index.html", "r").read()
    return f

@app.route('/main.js')
def mainjs():
    f = open("src/web/main.js", "r").read()
    return f

@app.route('/status')
def status():
    os.system("dmesg -J > status.json")
    f = open("out.json", "r").read()
    return f

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=80)