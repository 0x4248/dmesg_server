# dmesg server

A web server for viewing dmesg output.

This is useful for sysadmins who want to monitor the kernel log remotely or want to see clearly where errors and messages are in the log.

## Installation

To install the server, clone the repository and install the dependencies:

```bash
git clone https://www.github.com/lewisevans/dmesg_server
cd dmesg_server
pip install flask
```

## Usage

To run the server, run the following command:

```bash
sudo python src/main.py
```

You will need to be root to run the server as it needs to access the kernel log.

## Licence

This project is licensed under the GNU General Public License v3.0 - see the [LICENCE](LICENCE) file for details.
