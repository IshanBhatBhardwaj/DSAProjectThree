import './App.css';
import GraphView from './components/graph';
import movieView from './components/movieverse';
import { useState } from "react"
import {Link} from 'react-router-dom'



function App() {
  

  const [movie, setMovie] = useState("")
  const [checked, setChecked] = useState([])
  const checkList = ["Genre", "Actor", "Director"]
 

  const handleMainClick = () => {
    console.log(movie)
    console.log(checked)
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



  return (
    <div className="App">

      <section className="side-bar">
          <h1>FlixFinder</h1>
          <input value={movie} onChange={e => setMovie(e.target.value)} placeholder="Enter Movie"></input>

          <div className="checkList">
            <div className="title">Your CheckList:</div>
              <div className="list-container">
                {checkList.map((item, index) => (
                <div key={index}>
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
                ))}
              </div>
            </div>
          <div>
            {`Items checked are: ${checkedItems}`}
          </div>

          <button onClick={handleMainClick}> submit </button>


          <Link to="/web">Go To Web</Link>
          <Link to="/spiral">Go To Spiral</Link>




      </section>

      <GraphView MovieName={movie} Links={checked}/>
    </div>
  );
}

export default App;
