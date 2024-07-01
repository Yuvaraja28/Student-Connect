import json
from flask import Flask

app = Flask(__name__)

@app.get('/')
def index():
    with open('students.json') as students:
        db = json.load(students)
        return db["202203107"]
    
@app.get('/notice')
def notice():
    with open('notice.json') as students:
        db = json.load(students)
        return db

app.run("0.0.0.0", 8000)