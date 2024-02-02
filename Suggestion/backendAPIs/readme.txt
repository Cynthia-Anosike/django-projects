Getting Started
Step[1]:___
** Ensure python3.9 or above is installed for your
** install pip3
** Install virtual environment. 
a) In your vs code terminal run, pip3 install virutalenv
b) To create a virutalenv run: for Linux users: python3 -m venv your_preferred_environment_name
For windows users: py -m venv your_preferred_environment_name
c) Activate your virutalenv run:
For Linux users: source your_preferred_environment_name/bin/activate
For windows users: .\your_preferred_environment_name\Scripts\activate
d) You don't work in the folder created by step (b)
c) To deactivate: deactivate (only do thid when you're done)
Step[2]:
** Run the command
pip3 install requirement.txt
Ste[3]:
** install Mongodb. I use ubuntu 22.04 and Mongodb wasn't allowed so I used docker. Google how
download and set up Mongodb in your operating system (don't install in the virtual environment)
** Configure your Mongodb according to your system configuration
Step[4]:
** start your Mongodb server in a different terminal
** Open another terminal and start your virutalenv. All works for backend, you MUST activate the 
virutalenv FIRST
** Go to the server folder in the project and run the following codes
a) py booksAPI.py
b) py movieAPI.py
c) export FLASK_APP=base.py
d) flask db init
e)flask db migrate -m "user"
f)flask db upgrade
Step[5]:
That should be all, as far as my memory can carry me now sha. Meet me incase of issues pertaining the 
codes, but if it's issues pertaining your operating system, ask chatGPT
** Lastly, run the code "flask run" to have the backend running
** You don't have insonmia, so you can do much at this rate.
Step[6]:
###
