import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [runEffect, setRunEffect] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [runEffect]);

  async function deleteUser(id) {
    try {
      const del = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
      if (del.status === 200) {
        setRunEffect(prev => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
   }

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={`/${user.id}`} >
          <i className="fa-solid fa-pen-to-square act" style={{ color: "#74afb9" }}></i>
        </Link>
        <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash act" style={{ color: "red" }}></i>
      </td>
    </tr>
  ));

  return (
    <div>
      <table style={{ width: "100%", border: "2px" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}