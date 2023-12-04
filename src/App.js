import './App.css';
import GraphView from './components/graph';
import movieView from './components/movieverse';
import Graph from 'react-vis-network-graph'
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import image from './components/flix_finder_logo.png'



function App() {
  const [rating, setRating] = useState("")
  const [releaseDate, setReleasedate] = useState("")
  const [nodeLabel, setNodeLabel] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [imageURL, setImageURL] = useState([])
  const [movie, setMovie] = useState("")
  const [checked, setChecked] = useState([])
  const [moreNodes, setMoreNodes] = useState([])
  const checkList = ["Genre", "Actor", "Director"]
 

  const handleMainClick = async () => {
    // console.log(movie)
    // console.log(checked)

    const encodedMovie = encodeURIComponent(movie)
    const encodedCheck = encodeURIComponent(checked)

    // const URL = `/home?theme=${encodedMovie}&checkLength=${encodedCheckLength}&checked=${encodedCheck}`
    const URL = `/home?theme=${encodedMovie}&checkLength=${encodedCheck}`
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({movie, checked})
    }

    const data = await fetch(URL, options)
    const res = await data.json()
    console.log(res.nodes)
    setMoreNodes(res.nodes)
  }
  
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  var nodeArray = [{id: 1, label: movie, title: "node 1", shape:"star"}]

    //map through links, and make an array of node objects. Appends these objects to nodesArray
    function LinksToNodes(value) {
        if (value == "Actor") {
            nodeArray.push({id: "2", label: value, title: "node x", shape: "circle"})
        }

        if (value == "Director") {
            nodeArray.push({id: "3", label: value, title: "node x", shape: "circle"})
        }

        if (value == "Genre") {
            nodeArray.push({id: "4", label: value, title: "node x", shape: "circle"})
        }


    }
    checked.map((value, index) => LinksToNodes(value))
           

    
    

    moreNodes.map((value, key) => nodeArray.push(value))

    const renderPoster = (arr) => {

      if (title == "") {
        return(
          <div>
          </div>
        ) 

  
      }

      return (
        <div className="posterContainer">
          <h1>{title}</h1>

          <h4>Description</h4>
          <p>{description}</p>

          <h4>Rating</h4>
          <p>{rating} / 10</p>

          <h4>Release Date</h4>
          <p>{releaseDate}</p>


          {arr.map((movie) => (
            <img 
            style={{width: "244px", height:"300px" }} 
            src={`https://image.tmdb.org/t/p/w500${movie}`}
          
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="https://img.freepik.com/premium-vector/cinema-concept-poster-with-popcorn-drink-film-strip-clapperboard-3d-glasses-movie-time_153935-1.jpg?w=2000";
            }}
            />
          ))}
        </div>
      )
    }
  
      const showNodeInfo = (apiTitle, correctTitle, object) => {
          if (apiTitle == correctTitle) {
              setTitle(apiTitle)
              setDescription(object.overview)
              setImageURL([object.backdrop_path])
              setRating(object.vote_average)
              setReleasedate(object.release_date)
          }
      }
  
      const getNodeInfo = async(label) => {
          const encodedLabel = encodeURIComponent(label)
          const URL = `https://api.themoviedb.org/3/search/movie?query=${label}&api_key=45e3e92747353d02484018a30548fa3d`
          const data = await fetch(URL)
          const res = await data.json()
  
          console.log(res.results[0])
  
  
          if (res.results[0] != undefined) {
              var apiTitle = res.results[0].original_title
              showNodeInfo(apiTitle,label, res.results[0])
          }
  
  
      }
  
      function handleSelectNode(event) {
          const test = event.edges
          const selectedNodeId = event.nodes[0]
          const selectedNode = nodeArray.find((node) => node.id === selectedNodeId)
  
          if (selectedNode) {
              console.log(selectedNode.label)
              setNodeLabel(selectedNode.label)
              getNodeInfo(nodeLabel)
          }
      }


      


  const graph = {
      nodes: [
          {id: 1, label: movie, title: "node 1 tooltip text",
          shape: "box"},
          {id: 2, label: "Actor", title: "node 2 tooltip text",
          shape: "circle"},
          {id: 3, label: "Director", title: "node 3 tooltip text",
          shape: "diamond"},
          {id: 4, label: "Genre", title: "node 4 tooltip text",
          shape: "star"},
      ],
      nodes: nodeArray,
      edges: [
          {from: 1, to: 2, color: "red"},
          {from: 1, to: 3, color: "red"},
          {from: 1, to: 4, color: "red"},
          {from: 4, to: 5, color: "purple"},
          {from: 4, to: 6, color: "purple"},
          {from: 4, to: 7, color: "purple"},
          {from: 4, to: 8, color: "purple"},
          {from: 4, to: 9, color: "purple"},
          {from: 3, to: 10, color: "2E69E8"},
          {from: 3, to: 11, color: "2E69E8"},
          {from: 3, to: 12, color: "2E69E8"},
          {from: 3, to: 13, color: "2E69E8"},
          {from: 3, to: 14, color: "2E69E8"},
          {from: 2, to: 15, color: "green"},
          {from: 2, to: 16, color: "green"},
          {from: 2, to: 17, color: "green"},
          {from: 2, to: 18, color: "green"},
          {from: 2, to: 19, color: "green"}
      ]
    
  }

  var options = {
      physics: {
          enabled: true,
          // hierarchicalRepulsion: {
          //     centralGravity: 0.0,
          //     springLength: 1000,
          //     springConstant: 0.01,
          //     nodeDistance: 400,
          //     damping: 1.00
          // },
          // solver: 'hierarchicalRepulsion'

      },
      interaction: {
          navigationButtons: true
      },
      nodes: {
          borderWidth: 2,
          size: 40,
          color: {
              border: "#222222",
              background: "#666666"
          },
          font: {color: "white"}
      },
      edges: {
          color: "red",
          arrows: "false",
          width: 1,
          length: 200
  
          
      },
  
      
      shadow: true,
      smooth: true,
      height: "900px"
  }




  return (
    <div className="App">

      <section className="side-bar">

          <img src={image}></img>

        
          <input className="homeSubmit fontColorBlack" value={movie} onChange={e => setMovie(e.target.value)} placeholder="Enter Movie"></input>

          <div className="checkList">
            <div className="title">Add Links:</div>
              <div className="list-container">
                {checkList.map((item, index) => (
                <div key={index}>
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
                ))}
              </div>
            </div>
          {/* <div>
            {`Items checked are: ${checkedItems}`}
          </div> */}

          <button className='homeSubmit fontColorBlack' onClick={handleMainClick}> Submit </button>

          <div className="webTable">
                    <p> <span className='highlightGreen'> Green </span> for Actor</p>
                    <p> <span className='highlightBlue'> Blue </span> for Director</p>
                    <p> <span className='highlightPurple'> Purple</span> for Genre</p>
          </div>



          <div className="linkContainer"> 
            <button className="toWeb"><Link className="toLink fontColor" to="/web">Web</Link></button>
            <button className="toYarn"><Link className="toLink fontColor" to="/spiral">YarnBall</Link></button>
            <button className="toOctet"><Link className="toLink fontColor" to="/octet">Octet</Link></button>
          </div>

        
                



        {renderPoster(imageURL)}

          


      </section>

      <Graph 
            graph={graph}
            options={options}
            events={{ select: handleSelectNode }}

        />
    </div>
  );
}

export default App;
