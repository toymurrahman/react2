import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ReactDOM from 'react-dom';
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";




function App() {
  function HandleClick() {
    alert("Button Clicked");
  }
  const HandleClick2 = () => {
    alert("Button Clicked 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>

   
      <h3>React Core Concept 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click Me 2</button>
      <button
        onClick={() => {
          alert("Button Clicked 3");
        }}
      > Click Me 3
      </button>

      {/* vejailla onclick */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
