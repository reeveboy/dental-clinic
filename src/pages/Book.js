import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { withProtected } from "../components/WithProtected";
import { formatDate } from "../utils/formatDate";

function Book() {
  const [doctor_id, setDoctorId] = useState();
  const [patient_id, setPatientId] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    const doctor_options = [{ value: "", text: "--Choose an option--" }];
    const patient_options = [{ value: "", text: "--Choose an option--" }];

    axios.get("http://localhost:4000/api/doctors").then((res) => {
      res.data.forEach((doctor) => {
        doctor_options.push({
          value: doctor._id,
          text: `${doctor.fname} ${doctor.lname}`,
        });
      });
      setDoctors(doctor_options);
    });
    axios.get("http://localhost:4000/api/patients").then((res) => {
      res.data.forEach((patient) => {
        patient_options.push({
          value: patient._id,
          text: `${patient.fname} ${patient.lname}`,
        });
      });
      setPatients(patient_options);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Patient":
        setPatientId(value);
        break;
      case "Doctor":
        setDoctorId(value);
        break;
      case "Date":
        setDate(formatDate(value));
        break;
      case "Time":
        setTime(value);
        break;
      case "Reason":
        setReason(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/appointments/book", {
        doctor_id,
        patient_id,
        date,
        time,
        reason,
        status: "pending",
        prescription: [],
        fees_charged: null,
      })
      .then((res) => {
        alert("Appointment booked successfully");
      });

    formRef.current.reset();
  };
  return (
    <div className="flex flex-col justify-center items-center p-4">
      Book an Appointment
      <p className="p-2"></p>
      <form ref={formRef} onSubmit={handleSubmit} className="w-3/4">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="patient"
                  className="block text-sm font-medium text-gray-700">
                  Patient
                </label>
                <select
                  onChange={handleChange}
                  id="patient"
                  name="Patient"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  {patients.map((patient, id) => (
                    <option key={id} value={patient.value}>
                      {patient.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="doctor"
                  className="block text-sm font-medium text-gray-700">
                  Doctor
                </label>
                <select
                  onChange={handleChange}
                  id="Doctor"
                  name="Doctor"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  {doctors.map((doctor, id) => (
                    <option key={id} value={doctor.value}>
                      {doctor.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="date"
                  name="Date"
                  id="date"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="time"
                  name="Time"
                  id="time"
                  className="px-3 py-2 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700">
                  Reason
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="Reason"
                  id="reason"
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

export default withProtected(Book);
