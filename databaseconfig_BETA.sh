#!/bin/bash

# This program automatically configures a postgresql database 

# This program needs to:
# - prompt user for sudo password input
# - Store that input into a variable
# - Check to see if postgres 9.4 is already installed
# - Download Postgresql from a server
# - Install postgresql on the local machine
# - Complete a sudo su
# - Execute su - postgres
# - Create a new user called bp with database privledges
# - Create a new database called bp with owner bp
# - exit, exit again back to the user level
# - Append the proper configuration to the pg_hba.conf file locally
# - Append the proper configuration to the database.yml file
# - Probably do some fancy shit with grep to replace some text
# - Probably be embedded with some error messages as conditionals to inform a user of what may be going wrong
# - Probably throw some prompts to stdout to inform a user as to what's happening (verbosity)
# - Probably run a gem install pg for drivers
echo "Hello, $USER. This script will create and configure your local database to work with this app"

echo -n "Please enter your sudo password and press [ENTER]:"
read password


