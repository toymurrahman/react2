import { useState } from "react";

export default function Team() {
    const [team,setTeam] = useState(11);

    const teamStyle = { border: "5px solid purple ", 
        padding: "10px", 
        margin: "10px",
        borderRadius: "20px",
        textAlign: "center",
           boxShadow: "5px 5px 5px rgba(0,0,0,0.5)"
       }
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button>ADD PLAYERS</button>
    </div>
  );
}