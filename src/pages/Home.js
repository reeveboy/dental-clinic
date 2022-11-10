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
      <div className="flex justify-between items-baseline ">
        <p className="text-2xl font-medium text-[#339989]  underline underline-offset-4">
          Today's Appointments
        </p>
        <Link to="/book-appointment">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Add new Appointment
            </span>
          </button>
        </Link>
      </div>
      <p className="p-2"></p>
      {appointments.length == 0 ? (
        <div>
          <p className="text-center">No appointments today</p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto relative shadow-md ">
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
                    {appointment.patient_fname +
                      " " +
                      appointment.patient_lname}
                  </th>
                  <td className="py-4 px-6">{appointment.time}</td>
                  <td className="py-4 px-6 capitalize">{appointment.reason}</td>
                  <td className="py-4 px-6 capitalize">{appointment.status}</td>
                  <td className="py-4 px-6">{appointment.contact_number}</td>
                  <td className="py-4 px-6 capitalize">
                    {appointment.doctor_fname + " " + appointment.doctor_lname}
                  </td>

                  <td className="py-4 px-6">
                    <Link to={`/appointment/?id=${appointment.id}`}>
                      <a className="font-medium text-blue-600 hover:underline">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default withProtected(Home);
