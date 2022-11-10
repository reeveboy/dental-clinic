import axios from "axios";
import React, { useRef, useState } from "react";

function RegisterPatients({ closeModal }) {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "contact_number":
        setContactNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "blood_group":
        setBloodGroup(value);
        break;
      case "address":
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/patients", {
        first_name,
        last_name,
        contact_number,
        email,
        blood_group,
        address,
      })
      .then((res) => {
        alert("Patient added successfully");
      });

    setFname("");
    setLname("");
    setContactNumber("");
    setEmail("");
    setBloodGroup("");
    setAddress("");

    closeModal();

    formRef.current.reset();
  };

  return (
    <div className="">
      <span className="text-lg font-medium">Register Patient</span>
      <p className="p-2"></p>
      <form
        className="grid grid-cols-1 gap-4"
        ref={formRef}
        onSubmit={handleSubmit}>
        <div className="">
          <input
            required
            placeholder="Enter First Name"
            onChange={handleChange}
            type="text"
            name="fname"
            id="fname"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="">
          <input
            required
            placeholder="Enter Last Name"
            onChange={handleChange}
            type="text"
            name="lname"
            id="lname"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="">
          <input
            required
            placeholder="Enter Contact Number"
            onChange={handleChange}
            type="text"
            name="contact_number"
            id="contact_number"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="">
          <input
            required
            placeholder="Enter Email Number"
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="">
          <input
            placeholder="Enter the Blood Group"
            required
            onChange={handleChange}
            type="text"
            name="blood_group"
            id="blood_group"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="">
          <input
            placeholder="Enter the Address"
            required
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="bg-gray-50 col-span-2 text-center">
          <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit!
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPatients;
