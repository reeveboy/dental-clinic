import axios from "axios";
import React, { useRef, useState } from "react";

function RegisterDoctors() {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [area_of_specialization, setAreaOfSpecialization] = useState("");

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "first_name":
        setFname(value);
        break;
      case "last_name":
        setLname(value);
        break;
      case "contact_number":
        setContactNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "qualifications":
        setQualifications(value);
        break;
      case "area_of_specialization":
        console.log(value);
        setAreaOfSpecialization(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/doctors", {
        first_name,
        last_name,
        contact_number,
        email,
        qualifications,
        area_of_specialization,
      })
      .then((res) => {
        alert("Doctor added successfully");
      });

    setFname("");
    setLname("");
    setContactNumber("");
    setEmail("");
    setQualifications("");
    setAreaOfSpecialization("");

    formRef.current.reset();
  };

  return (
    <div className="">
      <span className="text-2xl font-medium">Enter Doctor Details</span>
      <p className="p-2"></p>
      <form
        className="grid grid-cols-1 gap-4 text-lg"
        ref={formRef}
        onSubmit={handleSubmit}>
        <div className="">
          <input
            required
            placeholder="Enter First Name"
            onChange={handleChange}
            type="text"
            name="first_name"
            id="first_name"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
          />
        </div>

        <div className="">
          <input
            required
            placeholder="Enter Last Name"
            onChange={handleChange}
            type="text"
            name="last_name"
            id="last_name"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
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
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
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
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
          />
        </div>

        <div className="">
          <input
            placeholder="Enter the Qualification"
            required
            onChange={handleChange}
            type="text"
            name="qualifications"
            id="qualifications"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
          />
        </div>

        <div className="">
          <input
            placeholder="Enter the Area of Specialization"
            required
            onChange={handleChange}
            type="text"
            name="area_of_specialization"
            id="area_of_specialization"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
          />
        </div>

        <div className="bg-gray-50 col-span-2 text-center">
          <button className="text-lg inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit!
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterDoctors;
