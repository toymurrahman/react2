import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div
        style={
                { border: "5px solid purple ", 
                 padding: "10px", 
                 margin: "10px",
                 borderRadius: "20px",
                 textAlign: "center",
                    boxShadow: "5px 5px 5px rgba(0,0,0,0.5)"
                }
                }
      >
        <h3>Counter:{count} </h3>
        <button onClick={increment}>ADD COUNT</button>
        <button onClick={decrement}>DECREMENT COUNT</button>
      </div>
    </>
  );
}
