import './Users.css'
import { useEffect, useState } from "react";



export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])

  return (
    <div className="style">
      <h3>Users: {users.length} </h3>
     {
        users.map((user) => (
            <div key={user.email}>
                <h4>Name :{user.name}</h4>
                <p>Email : {user.email}</p>
                <h4>Name :{user.name}</h4>
                <p>Email : {user.email}</p>
                <h4>Name :{user.name}</h4>
                <p>Email : {user.email}</p>
            </div>
        ))
     }
    </div>
  );
}