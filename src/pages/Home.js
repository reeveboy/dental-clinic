import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDate } from "../utils/getDate";

function Home() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token"))
      return navigate("/login", { replace: true });

    axios
      .get(`http://localhost:4000/api/appointments/${getDate()}`)
      .then((res) => {
        setAppointments(res.data);
      });
  }, []);

  return (
    <div className="w-3/4 mx-auto p-4">
      <div>Today's Appointments</div>
      <p className="p-2"></p>
      <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Patient Name
              </th>
              <th scope="col" className="py-3 px-6">
                Time
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, id) => (
              <tr key={id} className="bg-white border-b  hover:bg-gray-50 0">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  {appointment.patient_details[0].fname +
                    " " +
                    appointment.patient_details[0].lname}
                </th>
                <td className="py-4 px-6">{appointment.time}</td>
                <td className="py-4 px-6">
                  {appointment.patient_details[0].contact_number}
                </td>
                <td className="py-4 px-6 capitalize">{appointment.status}</td>
                <td className="py-4 px-6">
                  <Link to={`/appointment-edit/?id=${appointment._id}`}>
                    <button>Open</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
