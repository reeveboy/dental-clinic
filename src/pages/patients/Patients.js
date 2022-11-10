import axios from "axios";
import React, { useEffect, useState } from "react";
import { withProtected } from "../../components/WithProtected";
import RegisterPatient from "./RegisterPatients";

function Patients() {
  const [patients, setPatients] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-baseline ">
        <p className="text-2xl font-medium text-[#339989] underline underline-offset-4">
          Patients
        </p>
        <button
          onClick={openModal}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Add new Patinet
          </span>
        </button>
      </div>
      <p className="p-2"></p>
      <div className="w-full overflow-x-auto relative shadow-md ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th></th>
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
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr className="bg-white border-b  hover:bg-gray-50 0">
                <td className="py-4 px-6">
                  <img
                    className="h-16"
                    src={`https://avatars.dicebear.com/api/big-ears/${
                      patient.first_name + " " + patient.last_name
                    }.svg`}
                    alt=""
                  />
                </td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  {patient.first_name + " " + patient.last_name}
                </th>
                <td className="py-4 px-6">{patient.email}</td>
                <td className="py-4 px-6">{patient.contact_number}</td>
                <td className="py-4 px-6">{patient.blood_group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
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
                    <div className="text-left">
                      <RegisterPatient closeModal={closeModal} />
                    </div>
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

export default withProtected(Patients);
