"""A collections of databases schema"""
from werkzeug.security import generate_password_hash as generate, check_password_hash as check
from api import db


class User(db.Model):
    '''User database collection'''
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), index=True, unique=True)
    name = db.Column(db.String(200))
    location = db.Column(db.String(200))
    password = db.Column(db.String(200))
    """Make it printable"""

    def __repr__(self):
        return '<User {}>'.format(self.email)
    def set_password(self, password):
        self.password = generate(password)
    def check_password(self, password):
        return check(self.password, password)
        
##
