import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withProtected } from "../components/WithProtected";
import { getDate } from "../utils/getDate";

function Home() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token"))
      return navigate("/login", { replace: true });

    axios
      .get(`http://localhost:5000/api/appointments/${getDate()}`)
      .then((res) => {
        setAppointments(res.data);
      });
  }, []);

  return (
    <div>
      <div className="text-xl font-semibold">Today's Appointments</div>
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
                Reason
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Doctor Appointed
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, id) => (
              <tr key={id} className="bg-white border-b  hover:bg-gray-50 0">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  {appointment.patient_fname + " " + appointment.patient_lname}
                </th>
                <td className="py-4 px-6">{appointment.time}</td>
                <td className="py-4 px-6 capitalize">{appointment.reason}</td>
                <td className="py-4 px-6 capitalize">{appointment.status}</td>
                <td className="py-4 px-6">{appointment.contact_number}</td>
                <td className="py-4 px-6 capitalize">
                  {appointment.doctor_fname + " " + appointment.doctor_lname}
                </td>

                <td className="py-4 px-6">
                  <Link to={`/appointment-edit/?id=${appointment.id}`}>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
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

export default withProtected(Home);
