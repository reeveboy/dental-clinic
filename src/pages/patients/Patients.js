import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Patients() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);
  return (
    <div className="w-3/4 mx-auto p-4">
      <div className="flex justify-between">
        <p>Patients</p>
        <Link to="/patients/register">
          <button>Register Patient</button>
        </Link>
      </div>
      <p className="p-2"></p>
      <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Patient Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Blood Group
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr className="bg-white border-b  hover:bg-gray-50 0">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  {patient.fname + " " + patient.lname}
                </th>
                <td className="py-4 px-6">{patient.email}</td>
                <td className="py-4 px-6">{patient.contact_number}</td>
                <td className="py-4 px-6">{patient.blood_group}</td>
                <td className="py-4 px-6">{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patients;
