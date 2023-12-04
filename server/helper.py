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
    edges = []
    for i in range(len(action)):
        if action[i]["label"] == adventure[i]["label"]:
            edges.append({"from": action[i]["id"], "to": adventure[i]["id"], "width": 4, "color": "pink"})

        if action[i]["label"] == drama[i]["label"]:
            edges.append({"from": action[i]["id"], "to": drama[i]["id"], "width": 4, "color": "purple"})

        if adventure[i]["label"] == drama[i]["label"]:
            edges.append({"from": adventure[i]["id"], "to": drama[i]["id"], "width": 4, "color": "teal"} )

    return edges






def octet(theme, check):
    nodes = []
    temp = []
    id = 2
    with open("allmovies.csv", "r") as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)
        next(csv_reader)

        if check == "Genre":

            index = randint(0, 100000)

            for i in range(index):
                next(csv_reader)

            for line in csv_reader:

                # gets genres
                genres = line[5].split(", ")

                if theme in genres:
                    nodes.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                    id+=1

                if id == 10:
                    break

        elif check == "Actor":


            for line in csv_reader:

                # gets actors
                actors = line[10].split(", ")

                other = "\n" + theme
                if theme in actors or other in actors:
                    temp.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                    id += 1

            visited = set()
            fixId = 2
            while len(nodes) != 8:
                index = randint(0, len(temp) - 1)
                node = temp[index]
                movieName = node["label"]
                if movieName not in visited:
                    node["id"] = fixId
                    nodes.append(node)
                    fixId+=1
                    visited.add(movieName)

        elif check == "Director":


            for line in csv_reader:

                # gets actors
                directors = line[8].split(", ")

                other = "\n" + theme
                if theme in directors or other in directors:
                    temp.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                    id+=1


            visited = set()
            fixId = 2
            while len(nodes) != 8:
                index = randint(0, len(temp) - 1)
                node = temp[index]
                movieName = node["label"]
                if movieName not in visited:
                    node["id"] = fixId
                    nodes.append(node)
                    fixId += 1
                    visited.add(movieName)

        elif check == "Rating":

            index = randint(0, 100000)

            for i in range(index):
                next(csv_reader)

            for line in csv_reader:

                # gets genres
                rating = line[3].split(", ")

                if theme in rating:
                    nodes.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                    id += 1

                if id == 10:
                    break

        elif check == "Release Date":
            index = randint(0, 100000)

            for i in range(index):
                next(csv_reader)

            for line in csv_reader:

                # gets genres
                date = line[2].split(", ")

                if theme in date:
                    nodes.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                    id += 1

                if id == 10:
                    break

        return nodes

def getInfoForHome(movie, listOfLinks):

    genres = []
    actors = []
    directors = []


    with open("allmovies.csv", "r") as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)
        next(csv_reader)

        for line in csv_reader:
            lineMovie = line[1]
            if movie == lineMovie:
                if "Genre" in listOfLinks:
                    genres.append(line[5].split(", "))
                if "Actor" in listOfLinks:
                    actors.append(line[10].split(", "))
                if "Director" in listOfLinks:
                    directors.append(line[8].split(", "))
                break

        return [genres,actors,directors]

def getDirectorsAndActors(actors, directors):

    aNodes = []
    dNodes = []
    aTemp = []
    dTemp = []

    dId = 10
    aId = 15

    with open("allmovies.csv", "r") as csv_file:

        csv_reader = csv.reader(csv_file)
        next(csv_reader)
        next(csv_reader)

        for line in csv_reader:
            LinesDirectors = line[8].split(", ")
            LinesActors = line[10].split(", ")

            if directors:
                for director in LinesDirectors:
                    other = "\n" + director
                    if director in directors[0] or other in directors[0]:
                        dTemp.append({"id": dId, "label": line[1], "title": "na", "shape": "dot"})
                        dId += 1
            if actors:
                for actor in LinesActors:
                    other = "\n" + actor
                    if actor in actors[0] or other in actors[0]:
                        aTemp.append({"id": aId, "label": line[1], "title": "na", "shape": "dot"})
                        aId += 1


        if len(aTemp) >= 5:
            visited = set()
            fixId = 15
            while len(aNodes) != 5:
                index = randint(0, len(aTemp) - 1)
                node = aTemp[index]
                movieName = node["label"]
                if movieName not in visited:
                    node["id"] = fixId
                    aNodes.append(node)
                    fixId += 1
                    visited.add(movieName)

        if len(dTemp) >= 5:
            visited = set()
            fixId = 10
            while len(dNodes) != 5:
                index = randint(0, len(dTemp) - 1)
                node = dTemp[index]
                movieName = node["label"]
                if movieName not in visited:
                    node["id"] = fixId
                    dNodes.append(node)
                    fixId += 1
                    visited.add(movieName)

        return [aNodes, dNodes]

def homePage(movie, listOfLinks):

    #first thing is get batmans genres, directors, and actors
    #Then I need to go to a random spot, and get 5 movies similar to genre, director, and actors, and return

    genres, actors, directors = getInfoForHome(movie, listOfLinks)



    gNodes = []
    aNodes = []
    dNodes = []

    aTemp = []
    dTemp = []


    with open("allmovies.csv", "r") as csv_file:


        if genres:

            id = 5

            csv_reader = csv.reader(csv_file)

            next(csv_reader)
            next(csv_reader)

            index = randint(0,100000)
            for i in range(index):
                next(csv_reader)

            for line in csv_reader:
                #gets genre

                linesGenres = line[5].split(", ")

                for genre in linesGenres:
                    if genre in genres[0]:
                        gNodes.append({"id": id, "label": line[1], "title": "na", "shape": "dot"})
                        id+=1

                if id == 10:
                    break


        if actors or directors:
            aNodes, dNodes = getDirectorsAndActors(actors, directors)


        return gNodes + aNodes + dNodes

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



