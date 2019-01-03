import React from "react";
import DonationListRow from "./DonationsListRow";
import PerfectScrollbar from "react-perfect-scrollbar";

const DonationsList = ({ donations, deleteDonation }) => {
  let index = 1;
  return (
    <PerfectScrollbar>
      <div className="donation-table">
        <table className="centered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>amount</th>
              <th>date</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {donations.map(donation => (
              <DonationListRow
                key={donation._id}
                donation={donation}
                index={index++}
                deleteDonation={deleteDonation}
              />
            ))}
          </tbody>
        </table>
      </div>
    </PerfectScrollbar>
  );
};

export default DonationsList;
