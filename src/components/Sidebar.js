import React, { useState } from "react";

function Sidebar() {
  const links = [
    {
      name: "Home",
      img: "./icons/home.png",
    },
    {
      name: "Patients",
      img: "./icons/patient.png",
    },
    {
      name: "Doctors",
      img: "./icons/doctor.png",
    },
    {
      name: "Book Appointment",
      img: "./icons/appointments.png",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <ul className="flex flex-col space-y-2 h-screen w-60 overflow-y-auto py-4 px-3 bg-[#7DE2D1]">
      <div className="flex items-center pl-2.5 mb-5">
        <img src="./icons/tooth.png" className="mr-3 h-6 sm:h-7" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#131515]">
          Oral-B
        </span>
      </div>
      {links.map((link, id) => (
        <li key={id}>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-[#FFFAFB] ">
            <img src={link.img} height={32} width={32} />
            <span className="ml-3 capitalize text-lg">{link.name}</span>
          </a>
        </li>
      ))}
      <p className="grow"></p>
      <li className="">
        <button
          onClick={openModal}
          className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-[#FFFAFB] ">
          <img src="./icons/exit.png" height={32} width={32} />
          <span className="ml-3 capitalize text-lg">Logout</span>
        </button>
      </li>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
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
                      Are you sure you want to log out?
                    </h3>
                    <button
                      onClick={logout}
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
    </ul>
  );
}

export default Sidebar;
