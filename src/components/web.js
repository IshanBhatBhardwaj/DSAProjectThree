import React from 'react'
import {useState, useEffect} from 'react'
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import Graph from 'react-vis-network-graph'
import {nodes_, edges_} from './data3.js'
import {Link} from 'react-router-dom'




function Web() {

    const [apiNodesAndEdges, setApiNodesAndEdges] = useState([{}])
    const [nodes, setApiNodes] = useState(nodes_)
    const [edges, setApiEdges] = useState(edges_)


    

    const GetData = async () => {

        const data = await fetch("/api")
        const res = await data.json()
        // setApiNodesAndEdges(res)
        setApiNodes(res.api.nodes)
        setApiEdges(res.api.edges)
        console.log(res.api.nodes)
        console.log(res.api.edges)


    }



    const graph = {
        nodes: nodes,
        edges: edges
    }

    var options = {
        physics: {
            enabled: true,
            // hierarchicalRepulsion: {
            //     centralGravity: 0.0,
            //     springLength: 500,
            //     springConstant: 0.01,
            //     nodeDistance: 400,
            //     damping: 0.09
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
                <h1>FlixFinder</h1>
                <Link to="/">Go To Home</Link>
                <Link to="/spiral">Go To Spiral</Link>

                {/* {(typeof apiNodesAndEdges.api === "undefined") ? (
                    <p>...Loading</p>
                ) : (
                    apiNodesAndEdges.api.nodes.id.map((member, i) => (
                        <p key={i}>{member}</p>
                    ))
                )} */}

                <button onClick={GetData} >Click Me</button>

                </section>

                <Graph 
                    graph={graph}
                    options={options}
                />


            </div>

                
    


          

        </div>
    )
}

export default Web

