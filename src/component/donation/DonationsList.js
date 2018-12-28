import React from "react";
import DonationListRow from "./DonationsListRow";

const DonationsList = ({ donations }) => {
  let index = 1;
  return (
    <table className="centered striped">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>amount</th>
          <th>date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {donations.map(donation => (
          <DonationListRow
            key={donation._id}
            donation={donation}
            index={index++}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DonationsList;
