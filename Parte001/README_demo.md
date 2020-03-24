# Project 1 - Item Catalog

## Description
This application provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items..

## Files

* `static`: All assets for CSS (Bootstrap) and JavaScript (jQuery and AlertifyJS).
* `templates`: Templates for HTML content. It contains modals for creating, editing and viewing items catalog.
* `project.py`: main Python script for running the web application.
* `client_secrets.json`: Contains `client_id` and `client_secret` values from Google Web App.
* `database_setup.py`: Setup database mapping creation.
* `google_auth.py`: Google Authentication configuration (credits [Justin-Tadlock](https://github.com/Justin-Tadlock/auth-playground)).
* `populate.py`: Populates the item catalog database (SQLite).
* `secret_key.txt`: Secret key for token generation.
* `readme.md = self`

## Main features
The application meets the following requirements to create the user functionality:

* `JSON endpoint` that serves the same information as displayed in the `HTML endpoints` for an arbitrary item in the catalog.
* Website reads category and item information from a database.
* Website includes a form allowing users to add new items and correctly processes submitted forms.
* Website includes a form to edit/update a current record in the database table and correctly processes submitted forms.
* Website includes a function to delete a current record.
* Create, delete and update operations do consider authorization status prior to execution.
* Implements Google Accounts for authentication and authorization.
* Login and logout buttons.

## Style guide

Python files (`database_setup.py`, `google_auth.py`, `populate.py`) meets PEP 8 style guide.

## Setup and execution

### Virtual machine
Follow this link (Udacity's repo) to get running a virtual machine for development: [here](https://github.com/udacity/fullstack-nanodegree-vm)

This virtual machine contains all of the basic elements to start working a database (PostgreSQL), Python programming language and libraries (SQLAlchemy, Bleach, etc.)

### Database
The following steps are required to get a SQLite database created and populated.
1. Run `python database_setup.py` to create the database schema. This will generate a SQLite file named `itemcatalog.db`.
2. Run `python populate_setup.py` to populate the database.

### Depedencies

This project depends on the following **additional** Python modules installation:

* `$ sudo pip install google-auth`
* `$ sudo pip install flask-cors`

**Note**: Other modules (Flask, SQLAlchemy, etc) has been installed previously on the virtual machine.

### Execution

Type following command to execute the application:

* `$python project.py`: will run the application on `localhost:5000`.

### Instructional/Demonstration Video

https://youtu.be/hZAvGsjxX_Q

### Issues
The virtual machine must have time sync with the server. If you experiment issues while login with the Google Account, please sync the time of the virtual machine with this command (a date/time example is given, do it accordingly with the current date/time):

`$ sudo date --set="2019-08-28 05:41:53.000"`