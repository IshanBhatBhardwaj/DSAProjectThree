import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './data.js'


export default function GraphView({MovieName, Links}) {

    // console.log(name)

    var nodeArray = [{id: 1, label: MovieName, title: "node 1", shape:"star"}]

    //map through links, and make an array of node objects. Appends these objects to nodesArray
    Links.map((value, index) => nodeArray.push({id: index + 2, label: value, title: "node x", shape: "circle"}))

    // test.push([{id: 3, label: "Director", title: "node 3 tooltip text",
    //      shape: "diamond"}])

    console.log(Links)



    const graph = {
        nodes: [
            {id: 1, label: MovieName, title: "node 1 tooltip text",
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
            {from: 1, to: 2},
            {from: 1, to: 3},
            {from: 1, to: 4}
        ]
      
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


  return (
    <div >
        
        <Graph 
            graph={graph}
            options={options}
        />
    
        
    </div>
    
  )
}
