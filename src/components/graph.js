import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './data.js'


export default function GraphView({MovieName, Links, moreNodes}) {

    // console.log(name)

    var nodeArray = [{id: 1, label: MovieName, title: "node 1", shape:"star"}]

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
    Links.map((value, index) => LinksToNodes(value))
           

    
    

    moreNodes.map((value, key) => nodeArray.push(value))

    // test.push([{id: 3, label: "Director", title: "node 3 tooltip text",
    //      shape: "diamond"}])




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
    <div >
        
        <Graph 
            graph={graph}
            options={options}
        />
    
        
    </div>
    
  )
}
