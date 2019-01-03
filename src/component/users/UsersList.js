import React from "react";
import UsersListRow from "./UsersListRow";
import PerfectScrollbar from "react-perfect-scrollbar";

const UsersList = ({ users, deleteUser }) => {
  let index = 1;
  return (
    <PerfectScrollbar>
      <div className="donation-table">
        <table className="centered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>type</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UsersListRow
                key={user._id}
                user={user}
                deleteUser={deleteUser}
                index={index++}
              />
            ))}
          </tbody>
        </table>
      </div>
    </PerfectScrollbar>
  );
};

export default UsersList;
