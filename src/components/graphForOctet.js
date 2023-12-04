import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import { useState} from 'react'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './data.js'


export default function GraphView({theme, moreNodes}) {
    
    const [nodeLabel, setNodeLabel] = useState("")
    const [description, setDescription] = useState("")

    const nodes = [{id: 1, label: theme, title: "na", shape: "star" }]
    const edges = [{from: "1", to: "2"}, {from: "1", to: "3"}, {from: "1", to: "4"}, {from: "1", to: "5"}, {from: "1", to: "6"}, {from: "1", to: "7"}, {from: "1", to: "8"}, {from: "1", to: "9"}]

    moreNodes.map((value, key) => nodes.push(value))

    const showNodeInfo = (apiTitle, correctTitle) => {
        if (apiTitle == correctTitle) {
            setDescription(apiTitle)
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
            showNodeInfo(apiTitle,label)
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


  return (
    <div >
        {description}
        <Graph 
            graph={graph}
            options={options}
            events={{ select: handleSelectNode }}
        />
    
    </div>
    
  )
}
