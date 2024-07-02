import React from 'react';

interface User {
  id: number;
  name: string
}

interface Props {
  user: User,
  onDelete: (id: number) => void;
}

const UserItem: React.FC<Props> = ({ user, onDelete }) => {
  return (
    <div id='user-item'>
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
    </div>
  )
}

export default UserItem
