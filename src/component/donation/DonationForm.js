import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { donationTypes } from '../../config/data'

const DonationForm = ({ donation, users, onChange, saving, onSave }) => {
  return (
    <div className="row">
      <form className = "col s12">
        <h4>Donation detail</h4>
        <TextInput
          name="amount"
          label="amount"
          value={donation.amount}
          onChange={onChange}
          placeholder="lastname"
          type="number"
        />
        <TextInput
          name="date"
          label="date"
          value={donation.date}
          onChange={onChange}
          placeholder="date"
          type="date"
        />
        <SelectInput
            name="type"
            label="type"
            defaultOption="Choose a type"
            options={donationTypes}
            value={donation.type}
            onChange={onChange}
        />
        <SelectInput
            name="_idUser"
            label="user"
            defaultOption="Choose a user"
            options={users}
            value={donation._idUser}
            onChange={onChange}
        />
        <button
          disabled={saving}
          className="waves-effect waves-light btn"
          onClick={onSave}>
        {saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
