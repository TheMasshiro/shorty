from flask import Flask
from flask_cors import CORS

from instance.config import Config

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)


import api
import db

if __name__ == "__main__":
    app.run()
