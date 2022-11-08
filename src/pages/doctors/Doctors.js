import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/doctors").then((res) => {
      setDoctors(res.data);
    });
  }, []);
  return (
    <div className="w-3/4 mx-auto p-4">
      <div className="flex justify-between">
        <p>Doctors</p>
        <Link to="/doctors/register">
          <button>Register Doctor</button>
        </Link>
      </div>
      <p className="p-2"></p>
      <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Doctor Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Qualifiction
              </th>
              <th scope="col" className="py-3 px-6">
                Area of Specialization
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr className="bg-white border-b  hover:bg-gray-50 0">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  {doctor.fname + " " + doctor.lname}
                </th>
                <td className="py-4 px-6">{doctor.email}</td>
                <td className="py-4 px-6">{doctor.contact_number}</td>
                <td className="py-4 px-6">{doctor.qualifications}</td>
                <td className="py-4 px-6">{doctor.area_of_specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctors;
