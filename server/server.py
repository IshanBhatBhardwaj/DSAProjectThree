from flask import Flask, request, jsonify
import csv
from random import seed
from random import randint
import helper


app = Flask(__name__)
@app.route("/api")
def api():    

    results = helper.mainFunction()

    moreEdges = helper.connectWebs(results[0], results[2], results[4])


    node = results[0] + results[2] + results[4]


    edge = results[1] + results[3] + results[5] + moreEdges



    return {"api": {"nodes": node, "edges": edge}}

@app.route("/octet", methods=['POST'])
def octet():

    if request.method == 'POST':

        # Get the data from the JSON body of the request
        data = request.get_json()
        
        # Access the username and email parameters sent from the frontend
        theme = data.get('theme')
        check = data.get('check')

        node = helper.octet(theme,check)

        return {"nodes": node}

@app.route("/home", methods=["POST"])
def home():

    if request.method == 'POST':

        # Get the data from the JSON body of the request
        data = request.get_json()
        
        # Access the username and email parameters sent from the frontend
        movie = data.get('movie')
        listOfLinks = data.get('checked')

        nodes = helper.homePage(movie, listOfLinks)



        return {"nodes": nodes}

        
        


        



if __name__ == "__main__":
    app.run(port=8000, debug=True)




