import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
  id: number;
  name: string
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data)
  };

  useEffect(() => {
    loadUsers()
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link
          key={user.id}
          data-testid='user-item'
          to={`/users/${user.id}`}
        >
          {user.name}
        </Link>
      ))}
    </div>
  )
}

export default Users
