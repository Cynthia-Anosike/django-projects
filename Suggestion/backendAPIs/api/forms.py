"""A collection of forms validations"""
"""Not needed for this project"""
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from api.models import User


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired()])
    password = StringField('passsword', validators=[DataRequired()])
    remember_me = BooleanField('remember_me')
    submit = SubmitField('Signin')

class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email()])
    password = PasswordField('password', validators=[DataRequired()])
    password2 = PasswordField('repeat', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('submit')
    
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Email already exists. Please use another valid email')
        
class ProfileForm(FlaskForm):
    email = StringField('email', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    location = StringField('location')
    submit = SubmitField('save')

##

