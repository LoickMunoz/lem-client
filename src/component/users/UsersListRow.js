import React from "react";
import { Link } from "react-router-dom";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const UsersListRow = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>
        <Link to={"/user/" + user._id}>
          <FaUserEdit
            size="2em"
            style={{ cursor: "pointer" }}
            data-tip="edit"
            color="blue"
          />
        </Link>
      </td>
      <td>
        <FaTrash
          onClick={() => deleteUser(user)}
          size="2em"
          style={{ cursor: "pointer" }}
          color="blue"
          data-tip="delete"
        />
        <ReactTooltip />
      </td>
    </tr>
  );
};

export default UsersListRow;
