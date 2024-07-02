import { useEffect, useState } from "react"
import UserItem from "./user-item";

interface User {
  id: number;
  name: string
}

const UsersE2E = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setUsers(json as User[]);
          setIsLoading(false);
        }, 1000);
      })
  }, [])

  const onDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      {isLoading && <h1 id="users-loading">Loading...</h1>}
      {users.length && (
        <div id="users-list">
          {users.map((user) => (
            <UserItem key={user.id} user={user} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersE2E
