import React from "react";
import { Link } from "react-router-dom";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const DonationsListRow = ({ donation, index, deleteDonation }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{donation.name}</td>
      <td>{donation.amount}</td>
      <td>{donation.date}</td>
      <td>
        <Link to={"/donation/" + donation._id}>
          <FaUserEdit
            size="2em"
            style={{ cursor: "pointer" }}
            data-tip="edit"
            color="blue"
          />
        </Link>
        <ReactTooltip />
      </td>
      <td>
        <FaTrash
          onClick={() => deleteDonation(donation)}
          size="2em"
          style={{ cursor: "pointer" }}
          color="blue"
          data-tip="delete"
        />
      </td>
    </tr>
  );
};

export default DonationsListRow;
