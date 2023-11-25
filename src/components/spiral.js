import React from 'react'
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './data.js'
import {Link} from 'react-router-dom'




function web() {

    const graph = {
    
        nodes: nodes,
        edges: edges
    }

    var options = {
        physics: {
            enabled: true,
            hierarchicalRepulsion: {
                centralGravity: 0.0,
                springLength: 500,
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
                <Link to="/web">Go To Web</Link>

                </section>

                <Graph 
                    graph={graph}
                    options={options}
                />


            </div>

                
    


          

        </div>
    )
}

export default web

