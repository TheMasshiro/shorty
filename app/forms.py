from flask_wtf import FlaskForm
from wtforms import SubmitField, URLField
from wtforms.validators import DataRequired


class UrlForm(FlaskForm):
    url = URLField("Enter URL", validators=[DataRequired()])
    submit = SubmitField("Create URL")
