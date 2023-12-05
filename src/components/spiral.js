import React from 'react'
import { useState} from 'react'
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './dataForYarn.js'
import {Link} from 'react-router-dom'
import image from './flix_finder_logo.png'





function Web() {
    const [rating, setRating] = useState("")
    const [releaseDate, setReleasedate] = useState("")
    const [nodeLabel, setNodeLabel] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [imageURL, setImageURL] = useState([])
    const [nodeid, setNodeId] = useState("")

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
        const selectedNode = nodes.find((node) => node.id === selectedNodeId)

        if (selectedNode) {
            console.log(selectedNode.label)
            setNodeLabel(selectedNode.label)
            getNodeInfo(nodeLabel)
        }
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

    const graph = {
    
        nodes: nodes,
        edges: edges
    }

    var options = {
        physics: {
            enabled: true,
            hierarchicalRepulsion: {
                centralGravity: 0.0,
                springLength: 1000,
                springConstant: 0.01,
                nodeDistance: 400,
                damping: 1.00
            },
            solver: 'hierarchicalRepulsion'

        },
        interaction: {
            navigationButtons: true
        },
        nodes: {
            borderWidth: 2,
            size: 30,
            color: {
                border: "#222222",
                background: "#666666"
            },
            font: {color: "yellow"}
        },
        edges: {
            color: "yellow",
            arrows: "false",
            width: 1
        },


    
        
        shadow: true,
        smooth: true,
        height: "900px"
    }

    return(


        <div>
            <div className="App">

                <section className="side-bar">
                <img src={image}></img>
                
            

                <div className="spiralTable">
                    <p> <span className='red'> Red </span> for Action</p>
                    <p> <span className='highlightBlue'> Blue </span> for Drama</p>
                    <p> <span className='highlightGreen'> Green</span> for Adventure</p>
                    <p> <span className='orange'> Orange </span> for Crime</p>
                    <p> <span className='pink'> Pink </span> for Romance</p>
                    <p> <span className='highlightPurple'> Purple </span> for Sci-Fi</p>
                    <p> <span className='grey'> Gray </span> for Fantasy</p>
                    <p> <span className='indigo'> Indigo </span> for Comedy</p>
                    <p> <span className='teal'> Teal </span> for Directors</p>
                    <p> <span className='yellow'> Yellow </span> for Stars</p>
                </div>

                <div className="linkContainer"> 
                    <button className="toWeb"><Link className="toLink fontColor" to="/">Home</Link></button>
                    <button className="toYarn"><Link className="toLink fontColor" to="/octet">Octet</Link></button>
                    <button className="toOctet"><Link className="toLink fontColor" to="/web">Web</Link></button>
                </div>


                {renderPoster(imageURL)}

    

                </section>

                <Graph 
                    graph={graph}
                    options={options}
                    events={{ select: handleSelectNode }}
                />


            </div>

                
    


          

        </div>
    )
}

export default Web

