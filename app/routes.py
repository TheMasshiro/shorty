from flask import flash, redirect, render_template

from app import app
from app.forms import UrlForm


@app.route("/", methods=["GET", "POST"])
@app.route("/index", methods=["GET", "POST"])
def index():
    form = UrlForm()
    if form.validate_on_submit():
        flash("URL Invalid, please enter valid URL")
        return redirect("/")
    return render_template("index.html", title="Shorty", form=form)
