import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withProtected } from "../../components/WithProtected";

function Appointment() {
  const [appointment, setAppointment] = useState();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  useMemo(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");

    axios.get("http://localhost:5000/api/appointment/" + id).then((res) => {
      setAppointment(res.data[0]);
    });
  }, []);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { status, fees_charged, observations, prescription } = appointment;
    axios
      .put("http://localhost:5000/api/appointment/" + appointment.id, {
        status,
        fees_charged: parseInt(fees_charged),
        observations,
        prescription,
      })
      .then((res) => {
        console.log(res);
      });

    alert("Appointment updated successfully");
  };

  const delete_appointment = () => {
    axios
      .delete("http://localhost:5000/api/appointment/" + appointment.id)
      .then((res) => {
        console.log(res);
      });

    alert("Appointment deleted successfully");

    navigate("/");
  };

  if (!appointment) return <div>Loading...</div>;

  return (
    <div className="">
      <div className="text-2xl font-medium text-[#339989] decoration-[#339989] underline underline-offset-4">
        Appointment Details
      </div>
      <p className="p-2"></p>
      <div className="flex p-2">
        <form onSubmit={handleSubmit} className="grow ">
          <div className="relative mb-4">
            <input
              name="time"
              onChange={handleChange}
              type="text"
              disabled
              aria-describedby="floating_helper_text"
              className="capitalize block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.time}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Time
            </label>
          </div>

          <div className="relative mb-4">
            <input
              name="date"
              onChange={handleChange}
              type="text"
              disabled
              aria-describedby="floating_helper_text"
              className="capitalize block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={new Date(appointment.date).toLocaleDateString()}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Date
            </label>
          </div>

          <div className="relative mb-4">
            <input
              name="reason"
              disabled
              onChange={handleChange}
              type="text"
              aria-describedby="floating_helper_text"
              className="capitalize block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.reason}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Reason
            </label>
          </div>

          <div className="relative mb-4">
            <input
              name="status"
              onChange={handleChange}
              type="text"
              aria-describedby="floating_helper_text"
              className="capitalize block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.status}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Status
            </label>
          </div>

          <div className="relative mb-4">
            <input
              name="fees_charged"
              onChange={handleChange}
              type="number"
              aria-describedby="floating_helper_text"
              className="capitalize block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.fees_charged}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Fees Charged
            </label>
          </div>

          <div className="relative mb-4">
            <textarea
              name="observations"
              onChange={handleChange}
              rows="4"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.observations}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Observations
            </label>
          </div>

          <div className="relative mb-4">
            <textarea
              name="prescription"
              onChange={handleChange}
              rows="4"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={appointment.prescription}
            />
            <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Prescription
            </label>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Submit!
            </button>
            <p className="p-2"></p>
            <button
              onClick={openModal}
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Delete!
            </button>
          </div>
        </form>
        <p className="p-2"></p>
        <div className="flex flex-col">
          <div className="p-2 w-44 flex flex-col items-center bg-white rounded-lg border border-gray-200">
            <img
              className="mb-3 w-20 h-20 rounded-full shadow-lg"
              src={`https://avatars.dicebear.com/api/big-ears/${
                appointment.patient_fname + " " + appointment.patient_lname
              }.svg`}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              {appointment.patient_fname + " " + appointment.patient_lname}
            </h5>
            <span className="text-sm text-gray-500 ">Patient</span>
          </div>
          <p className="p-2"></p>
          <div className="p-2 w-42 flex flex-col items-center bg-white rounded-lg border border-gray-200">
            <img
              className="mb-3 w-20 h-20 rounded-full shadow-lg"
              src={`https://avatars.dicebear.com/api/big-ears/${
                appointment.doctor_fname + " " + appointment.doctor_lname
              }.svg`}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              {appointment.doctor_fname + " " + appointment.doctor_lname}
            </h5>
            <span className="text-sm text-gray-500 ">Doctor</span>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this?
                    </h3>
                    <button
                      onClick={delete_appointment}
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default withProtected(Appointment);
