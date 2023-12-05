import '../App.css';
import { useState } from "react"
import Graph from 'react-vis-network-graph'
import {Link} from 'react-router-dom'
import image from './flix_finder_logo.png'




function Octet() {
  const [rating, setRating] = useState("")
  const [releaseDate, setReleasedate] = useState("")
  const [theme, setTheme] = useState("")
  const [check, setCheck] = useState("Actor")
  const [moreNodes, setMoreNodes] = useState([])
  const [nodeLabel, setNodeLabel] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [imageURL, setImageURL] = useState([])
  const nodes = [{id: 1, label: theme, title: "na", shape: "star" }]
  const edges = [{from: "1", to: "2"}, {from: "1", to: "3"}, {from: "1", to: "4"}, {from: "1", to: "5"}, {from: "1", to: "6"}, {from: "1", to: "7"}, {from: "1", to: "8"}, {from: "1", to: "9"}]


 

  moreNodes.map((value, key) => nodes.push(value))



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
        console.log(edges)
        const selectedNodeId = event.nodes[0]
        const selectedNode = nodes.find((node) => node.id === selectedNodeId)

        if (selectedNode) {
            console.log(selectedNode.label)
            setNodeLabel(selectedNode.label)
            getNodeInfo(nodeLabel)
        }
    }

    const graph = {
        nodes: nodes,
        edges: edges,
        event: {
            items: []
        }
      
    }

    var options = {
        physics: {
            enabled: true,

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
            width: 1
    
            
        },

        interaction: {
            hover: true,
            hoverConnectedEdges: true
            
        },
    
        shadow: true,
        smooth: true,
        height: "900px"
    }


  const handleMainClick = async () => {
    console.log(theme)
    console.log(check)
    const encodedTheme = encodeURIComponent(theme)
    const encodedCheck = encodeURIComponent(check)

    const URL = `/octet?theme=${encodedTheme}&check=${encodedCheck}`
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({theme, check})
    }

    const data = await fetch(URL, options)
    const res = await data.json()
    console.log(res.nodes)
    setMoreNodes(res.nodes)


  }

  const renderPoster = (arr) => {

    if (title == "") {
      return(
        <div>
        </div>
      ) 

    }

    return (
      <div>
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

 


  
  return (
    <div className="App">

      <section className="side-bar">
          <img src={image}></img>

          <select onChange={e => setCheck(e.target.value)}>
            <option value="Actor">Actor</option>
            <option value="Director">Director</option>
            <option value="Genre">Genre</option>
          </select>

          <input className="homeSubmit fontColorBlack" value={theme} onChange={e => setTheme(e.target.value)} placeholder="Search Here"></input>


        

          <button className='homeSubmit fontColorBlack' onClick={handleMainClick}> Submit </button>


          <div className="linkContainer"> 
            <button className="toWeb"><Link className="toLink fontColor" to="/">Home</Link></button>
            <button className="toYarn"><Link className="toLink fontColor" to="/web">Web</Link></button>
            <button className="toOctet"><Link className="toLink fontColor" to="/spiral">YarnBall</Link></button>
          </div>


          {renderPoster(imageURL)}


      </section>

      {/* <GraphView theme={theme} moreNodes={moreNodes}/> */}

      <Graph 
            graph={graph}
            options={options}
            events={{ select: handleSelectNode }}
        />

        <div>
          {imageURL.map((movie) => {
                <img src={`https://image.tmdb.org/t/p/w500${movie}`}></img>
              })}
          </div>


     

    </div>
  );
}

export default Octet;
