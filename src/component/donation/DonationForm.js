import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

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
