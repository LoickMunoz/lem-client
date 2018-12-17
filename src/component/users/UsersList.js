import React from "react";
import UsersListRow from "./UsersListRow";

const UsersList = ({ users, deleteUser }) => {
  return (
    <table className="centered">
      <thead>
        <tr>
          <th>firstname</th>
          <th>lastname</th>
          <th>email</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UsersListRow key={user._id} user={user} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
