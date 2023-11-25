from flask import Flask
import csv
from random import seed
from random import randint
import helper


app = Flask(__name__)
@app.route("/api")
def api():    

    results = helper.mainFunction()

    node = results[0] + results[2] + results[4]
    edge = results[1] + results[3] + results[5]


    return {"api": {"nodes": node, "edges": edge}}


@app.route("/test")
def test():
    return {"test": ['hello', "world"]}



if __name__ == "__main__":
    app.run(port=8000, debug=True)



