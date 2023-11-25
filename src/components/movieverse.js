import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import Graph from 'react-vis-network-graph'
import {nodes, edges} from './data.js'


export default function movieView() {


    const graph = {
        nodes: [
            {id: 1, label: "Black Panther: Wakanda Forever", title: "na", shape: "box" },
            {id: 2, label: "Avatar: The Way of Water", title: "na", shape: "box" },
            {id: 3, label: "Everything Everywhere All at Once", title: "na", shape: "box" },
            {id: 4, label: "Ant-Man and the Wasp: Quantumania", title: "na", shape: "box" },
            {id: 5, label: "Pathaan", title: "na", shape: "box" },
            {id: 6, label: "Black Panther", title: "na", shape: "box" },
            {id: 7, label: "Avatar", title: "na", shape: "box" },
            {id: 8, label: "The Wandering Earth II", title: "na", shape: "box" },
            {id: 9, label: "Black Adam", title: "na", shape: "box" },
            {id: 10, label: "Jurassic World: Dominion", title: "na", shape: "box" },
            {id: 11, label: "The Hunger Games", title: "na", shape: "box" },
            {id: 12, label: "The Northman", title: "na", shape: "box" },
            {id: 13, label: "Dune", title: "na", shape: "box" },
            {id: 14, label: "The Flash", title: "na", shape: "box" },
            {id: 15, label: "RRR", title: "na", shape: "box" },
            {id: 16, label: "The Lord of the Rings: The Fellowship of the Ring", title: "na", shape: "box" }

        ],

        
        edges: [
            {from: 1, to: 2,},
            {from: 1, to: 3},
            {from: 1, to: 4},
            {from: 1, to: 5},
            {from: 1, to: 6},
            {from: 2, to: 6},
            {from: 2, to: 3},
            {from: 3, to: 4},
            {from: 4, to: 5},
            {from: 5, to: 6},
            {from: 7, to: 3},
            {from: 8, to: 4},
            {from: 9, to: 5},
            {from: 10, to: 6},
            {from: 6, to: 2}
        ]
    }

    var options = {
        physics: {
            enabled: true
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
            arrows: "false"
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
