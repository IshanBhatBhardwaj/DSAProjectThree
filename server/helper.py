import csv
from random import seed
from random import randint

def rand():
    index = randint(0,100000)
    return index

def getOneID(nodes):

    offset = 5
    id = ""

    while nodes[offset] != ",":
        id+=nodes[offset]
        offset+=1

    return id


def getIDs(nodes):

    IDS = []
    for i in range(len(nodes)):

        # gets the node's id
        id = nodes[i]["id"]
        # offset = 6
        # check = nodes[i][offset]
        # while check != ',':
        #     id += check
        #     offset += 1
        #     check = nodes[i][offset]

        IDS.append(id)

    return IDS
    IDS = []
    for i in range(len(nodes)):

        # gets the node's id
        id = nodes[i][5]
        offset = 6
        check = nodes[i][offset]
        while check != ',':
            id += check
            offset += 1
            check = nodes[i][offset]

        IDS.append(id)

    return IDS

def makeWeb(nodes, color):

    # get a list of id's that are in the nodes array
    listOfIds = getIDs(nodes)

    edges = []

    edges.append({"from": listOfIds[0], "to": listOfIds[1], "color": color})
    edges.append({"from": listOfIds[0], "to": listOfIds[2], "color": color})
    edges.append({"from": listOfIds[0], "to": listOfIds[3], "color": color})
    edges.append({"from": listOfIds[0], "to": listOfIds[4], "color": color})
    edges.append({"from": listOfIds[0], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[1], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[1], "to": listOfIds[2], "color": color})
    edges.append({"from": listOfIds[1], "to": listOfIds[14], "color": color})
    edges.append({"from": listOfIds[2], "to": listOfIds[3], "color": color})
    edges.append({"from": listOfIds[3], "to": listOfIds[4], "color": color})
    edges.append({"from": listOfIds[4], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[6], "to": listOfIds[2], "color": color})
    edges.append({"from": listOfIds[7], "to": listOfIds[3], "color": color})
    edges.append({"from": listOfIds[8], "to": listOfIds[4], "color": color})
    edges.append({"from": listOfIds[9], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[5], "to": listOfIds[1], "color": color})
    edges.append({"from": listOfIds[10], "to": listOfIds[1], "color": color})
    edges.append({"from": listOfIds[10], "to": listOfIds[2], "color": color})
    edges.append({"from": listOfIds[10], "to": listOfIds[6], "color": color})
    edges.append({"from": listOfIds[11], "to": listOfIds[6], "color": color})
    edges.append({"from": listOfIds[11], "to": listOfIds[7], "color": color})
    edges.append({"from": listOfIds[11], "to": listOfIds[2], "color": color})
    edges.append({"from": listOfIds[11], "to": listOfIds[3], "color": color})
    edges.append({"from": listOfIds[12], "to": listOfIds[7], "color": color})
    edges.append({"from": listOfIds[12], "to": listOfIds[8], "color": color})
    edges.append({"from": listOfIds[12], "to": listOfIds[3], "color": color})
    edges.append({"from": listOfIds[12], "to": listOfIds[4], "color": color})
    edges.append({"from": listOfIds[13], "to": listOfIds[8], "color": color})
    edges.append({"from": listOfIds[13], "to": listOfIds[9], "color": color})
    edges.append({"from": listOfIds[13], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[13], "to": listOfIds[4], "color": color})
    edges.append({"from": listOfIds[14], "to": listOfIds[5], "color": color})
    edges.append({"from": listOfIds[14], "to": listOfIds[9], "color": color})
    edges.append({"from": listOfIds[14], "to": listOfIds[15], "color": color})
    edges.append({"from": listOfIds[15], "to": listOfIds[10], "color": color})
    edges.append({"from": listOfIds[15], "to": listOfIds[1], "color": color})

    return edges

    # get a list of id's that are in the nodes array
    listOfIds = getIDs(nodes)

    edges = []

    edges.append(f"{{\"from\"{listOfIds[0]}, \"to\"{listOfIds[1]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[0]}, \"to\"{listOfIds[2]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[0]}, \"to\"{listOfIds[3]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[0]}, \"to\"{listOfIds[4]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[0]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[1]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[1]}, \"to\"{listOfIds[2]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[1]}, \"to\"{listOfIds[14]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[2]}, \"to\"{listOfIds[3]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[3]}, \"to\"{listOfIds[4]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[4]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[6]}, \"to\"{listOfIds[2]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[7]}, \"to\"{listOfIds[3]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[8]}, \"to\"{listOfIds[4]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[9]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[5]}, \"to\"{listOfIds[1]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[10]}, \"to\"{listOfIds[1]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[10]}, \"to\"{listOfIds[2]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[10]}, \"to\"{listOfIds[6]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[11]}, \"to\"{listOfIds[6]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[11]}, \"to\"{listOfIds[7]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[11]}, \"to\"{listOfIds[2]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[11]}, \"to\"{listOfIds[3]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[12]}, \"to\"{listOfIds[7]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[12]}, \"to\"{listOfIds[8]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[12]}, \"to\"{listOfIds[3]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[12]}, \"to\"{listOfIds[4]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[13]}, \"to\"{listOfIds[8]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[13]}, \"to\"{listOfIds[9]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[13]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[13]}, \"to\"{listOfIds[4]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[14]}, \"to\"{listOfIds[5]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[14]}, \"to\"{listOfIds[9]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[14]}, \"to\"{listOfIds[15]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[15]}, \"to\"{listOfIds[10]}, \"color\": \"{color}\"}}")
    edges.append(f"{{\"from\"{listOfIds[15]}, \"to\"{listOfIds[1]}, \"color\": \"{color}\"}}")

    print(edges)

    return edges





















    print(",".join(edges))

def connectWebs(action, adventure, drama):



    moreEdges = []

    for i in range(len(action)):
        actionOffset = action[i].index("label") + 8
        actionMovie = ""

        while action[i][actionOffset] != "\"":
            actionMovie+=action[i][actionOffset]
            actionOffset+=1

        adventureOffset = adventure[i].index("label") + 8
        adventureMovie = ""

        while adventure[i][adventureOffset] != "\"":
            adventureMovie+=adventure[i][adventureOffset]
            adventureOffset+=1


        for j in range(len(action)):

            if actionMovie in adventure[j]:
                actionID = getOneID(action[i])
                adventureID = getOneID(adventure[j])
                moreEdges.append(f"{{from: {actionID}, to: {adventureID}, color: \"orange\", width: 4}}")

            if actionMovie in drama[j]:
                actionID = getOneID(action[i])
                dramaID = getOneID(drama[j])
                moreEdges.append(f"{{from: {actionID}, to: {dramaID}, color: \"purple\", width: 4}}")

            if adventureMovie in drama[j]:
                adventureID = getOneID(adventure[i])
                dramaID = getOneID(drama[j])
                moreEdges.append(f"{{from: {adventureID}, to: {dramaID}, color: \"teal\", width: 4}}")

    return moreEdges

    with open("AllMovies.csv", "r") as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)
        next(csv_reader)

        index = randint(0,100000)

        print(index)

        for i in range(index):
            next(csv_reader)

        # ['movie_id', 'movie_name', 'year', 'certificate', 'runtime', 'genre', 'rating', 'description', 'director',
        # 'director_id', 'star', 'star_id', 'votes', 'gross(in $)']

        # gets 16 action, adventure, Drama movies
        id = 1
        actionNodes = []
        adventureNodes = []
        dramaNodes = []

        for line in csv_reader:
            if len(actionNodes) == 16 and len(adventureNodes) == 16 and len(dramaNodes) == 16:
                break

            # gets genres for the line
            genres = []
            string = ""
            length = len(line[5])

            for i in range(length):
                if line[5][i] == " ":
                    continue
                elif line[5][i] != ",":
                    string += line[5][i]
                else:
                    genres.append(string)
                    string = ""

            # adds the line to the correct genre arrays
            for genre in genres:
                called = False

                if genre == "Action" and len(actionNodes) != 16:
                    called = True
                    res = f"{{\"id\": {id}, \"label\": \"{line[1]}\", \"title\": \"na\", \"shape\": \"star\" }}"
                    test = {"id": id, "label": line[1], "title": "na", "shape": "star"}
                    actionNodes.append(res)

                if genre == "Adventure" and len(adventureNodes) != 16:
                    called = True
                    res = f"{{\"id\": {id}, \"label\": \"{line[1]}\", \"title\": \"na\", \"shape\": \"star\" }}"
                    adventureNodes.append(res)

                if genre == "Drama" and len(dramaNodes) != 16:
                    called = True
                    res = f"{{\"id\": {id}, \"label\": \"{line[1]}\", \"title\": \"na\", \"shape\": \"star\" }}"
                    dramaNodes.append(res)

                if called:
                    id += 1

        # gets 16 adventure movies

    actionEdges = makeWeb(actionNodes, "red")
    adventureEdges = makeWeb(adventureNodes, "green")
    dramaEdges = makeWeb(dramaNodes, "blue")

    return [actionNodes, actionEdges]

    # more = connectWebs(actionNodes,adventureNodes,dramaNodes)
    

def mainFunction():
    with open("AllMovies.csv", "r") as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)
        next(csv_reader)

        index = randint(0,100000)


        for i in range(index):
            next(csv_reader)

        # ['movie_id', 'movie_name', 'year', 'certificate', 'runtime', 'genre', 'rating', 'description', 'director',
        # 'director_id', 'star', 'star_id', 'votes', 'gross(in $)']

        # gets 16 action, adventure, Drama movies
        id = 1
        actionNodes = []
        adventureNodes = []
        dramaNodes = []

        for line in csv_reader:
            if len(actionNodes) == 16 and len(adventureNodes) == 16 and len(dramaNodes) == 16:
                break

            # gets genres for the line
            genres = []
            string = ""
            length = len(line[5])

            for i in range(length):
                if line[5][i] == " ":
                    continue
                elif line[5][i] != ",":
                    string += line[5][i]
                else:
                    genres.append(string)
                    string = ""

            # adds the line to the correct genre arrays
            for genre in genres:
                called = False

                if genre == "Action" and len(actionNodes) != 16:
                    called = True
                    test = {"id": id, "label": line[1], "title": "na", "shape": "star"}
                    actionNodes.append(test)

                if genre == "Adventure" and len(adventureNodes) != 16:
                    called = True
                    test = {"id": id, "label": line[1], "title": "na", "shape": "star"}
                    adventureNodes.append(test)

                if genre == "Drama" and len(dramaNodes) != 16:
                    called = True
                    test = {"id": id, "label": line[1], "title": "na", "shape": "star"}
                    dramaNodes.append(test)

                if called:
                    id += 1

        # gets 16 adventure movies

    actionEdges = makeWeb(actionNodes, "red")
    adventureEdges = makeWeb(adventureNodes, "green")
    dramaEdges = makeWeb(dramaNodes, "blue")


    # more = connectWebs(actionNodes,adventureNodes,dramaNodes)

    return [actionNodes, actionEdges, adventureNodes, adventureEdges, dramaNodes, dramaEdges]



