import { useState } from "react";
import Input from "./Input";

import indianStates from "../assets/data/statesName.js";
import cities from "../assets/data/citites.js";

function BillingForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    gstNumber: "",
    premise: "",
    state: "",
    country: "",
    email: "",
    panNumber: "",
    street: "",
    city: "",
    pinCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    setFormData({
      companyName: "",
      gstNumber: "",
      premise: "",
      state: "",
      country: "",
      email: "",
      panNumber: "",
      street: "",
      city: "",
      pinCode: "",
    });
  };

  return (
    <div className="lg:w-153.75 lg:h-187.25 py-4 px-3">
      <div className="mb-4 h-10">
        <h2 className="text-[26px] font-semibold text-[#111827] leading-10 tracking-[-0.9px]">
          Review your details
        </h2>
      </div>

      <div className="pb-12">
        <h3 className="text-[20px] font-bold text-[#505050] leading-7">
          Billing Information
        </h3>

        <form
          className="mt-4 flex flex-col md:grid grid-cols-2 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 flex flex-col gap-5">
            <Input
              label="Company Name"
              name="companyName"
              placeholder="abhigyan"
              type="text"
              required={true}
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <Input
              label="GST Number"
              name="gstNumber"
              placeholder="GST Number"
              type="text"
              value={formData.gstNumber}
              onChange={handleInputChange}
            />
            <Input
              label="Premise/House no."
              name="premise"
              placeholder="Premise/House no."
              type="text"
              required={false}
              value={formData.premise}
              onChange={handleInputChange}
            />

            <Input
              label="State"
              name="state"
              placeholder="Select State"
              variant="select"
              options={indianStates}
              required={true}
              value={formData.state}
              onChange={handleInputChange}
            />
            <Input
              label="Country"
              name="country"
              placeholder="India"
              type="text"
              required={true}
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <Input
              label="Email"
              name="email"
              placeholder="abhigyan.pandey@getreelax.com"
              type="email"
              required={true}
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              label="PAN Number"
              name="panNumber"
              placeholder="PAN Number"
              type="text"
              required={false}
              value={formData.panNumber}
              onChange={handleInputChange}
            />
            <Input
              label="Street"
              name="street"
              placeholder="Street"
              type="text"
              required={true}
              value={formData.street}
              onChange={handleInputChange}
            />
            <Input
              label="City"
              placeholder="City"
              variant="select"
              options={cities[formData.state]}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required={true}
            />
            <Input
              label="Pin Code"
              placeholder="Pin Code"
              name="pinCode"
              type="text"
              value={formData.pinCode}
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="md:col-span-2 flex justify-between md:justify-end items-center gap-4 pt-2.5 mt-6 border-t border-[#E5E7EB]">
            <button
              type="reset"
              className="w-1/2 md:w-1/6 text-md text-[#111827] font-bold leading-6 py-2.5 lg:px-6 rounded-sm mt-5 border border-[#E5E7EB] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 md:w-1/4 text-md bg-[#1977F2] text-white font-bold leading-6 py-2.5 px-2 lg:px-6 rounded-sm mt-5 border border-[#E5E7EB] cursor-pointer"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingForm;
