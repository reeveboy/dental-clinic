import axios from "axios";
import React, { useRef, useState } from "react";

function RegisterPatients() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
      .post("http://localhost:4000/api/patients", {
        fname,
        lname,
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

    formRef.current.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      Register Patient
      <p className="p-2"></p>
      <form ref={formRef} onSubmit={handleSubmit} className="w-3/4">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="fname"
                  id="fname"
                  autoComplete="given-name"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="lname"
                  id="lname"
                  autoComplete="family-name"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="contact_number"
                  className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="contact_number"
                  id="contact_number"
                  typeof="tel"
                  autoComplete="contact_number"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="blood_group"
                  className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="blood_group"
                  id="blood_group"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="address"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPatients;
