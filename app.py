from flask import Flask


app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, how can I help you? Feel free to ask...'