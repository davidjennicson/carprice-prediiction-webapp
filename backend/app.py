# Importing necessary libraries
import json
from flask_cors import CORS
from flask import Flask, render_template,jsonify,request
from joblib import load
import pandas as pd
import sqlite3
import numpy as np

import sqlite3
def nameget():
    conn = sqlite3.connect('namedb.db')
    cursor = conn.cursor()

    # execute a SELECT query
    cursor.execute('SELECT * FROM scott')
    rows = cursor.fetchall()
    arr = []
    for x in rows:
        u = {"encoding": x[0], "brand": x[1], "name": x[2]}
        arr.append(u)
    cursor.close()
    conn.close()
    return arr


# Creating a Flask application instance
app = Flask(__name__)
CORS(app)
# Defining a route for the home page
@app.route("/forms",methods=['GET','POST'])
def forms():
    return jsonify(nameget())

@app.route("/predict",methods=['GET','POST'])
def home():
    data=request.get_json()
    fuel=data['fuel']
    f=np.array(fuel)
    km_driven=data['km_driven']
    kmd=np.array(km_driven)
    name=data['name']
    nm=np.array(name)
    owner=data['owner']
    own=np.array(owner)
    seller_type=data['seller_type']
    sltyp=np.array(seller_type)
    transmission=data['transmission']
    tr=np.array(transmission)
    year=data['year']
    yr=np.array(year)
    df=pd.DataFrame({"fuel":f,"km_driven":kmd,"name":nm,"owner":own,"seller_type":sltyp,"transmission":tr,"year":yr})
    print(df)
    model=load('model.joblib')
    ans=model.predict(df)
    lst=float(ans)
    oppo=str(lst)
    nono=json.dumps(lst)
    print(nono)
    return oppo



# Defining a route for the about page

# Running the application
if __name__ == "__main__":
    app.run(debug=True)
