"""A modules of the api web and configurations"""
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import uuid
from flask_cors import CORS
from datetime import timedelta, datetime, timezone


api = Flask(__name__)
CORS(api)
api.config["JWT_SECRET_KEY"] = str(uuid.uuid4())
api.config["SECRET_KEY"] = str(uuid.uuid4())
api.config["JWT_TOKEN_LOCATION"] = ["cookies", "headers"]
#api.config["JWT_COOKIE_SECURE"] = False
#api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)
jwt = JWTManager(api)
api.config['SQLALCHEMY_DATABASE_URI'] = \
        'sqlite:///suggest.sqlite'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = \
        False

db = SQLAlchemy(api)
migrate = Migrate(api, db)


from api import route, models
##EDIT
