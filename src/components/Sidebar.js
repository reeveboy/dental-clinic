import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    {
      name: "Home",
      link: "/",
      img: "/icons/home.svg",
      active: window.location.pathname === "/",
    },
    {
      name: "Patients",
      link: "/patients",
      img: "/icons/pulse.svg",
      active: window.location.pathname === "/patients",
    },
    {
      name: "Doctors",
      link: "/doctors",
      img: "/icons/stethoscope.svg",
      active: window.location.pathname === "/doctors",
    },
    {
      name: "Book Appointment",
      link: "/book-appointment",
      img: "/icons/calendar.svg",
      active: window.location.pathname === "/book-appointment",
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
    <ul className="flex flex-col space-y-2 h-screen w-60 overflow-y-auto py-4 px-3 bg-[#339989]">
      <div className="flex items-center pl-2.5 mb-5 cursor-pointer">
        <img src="/icons/tooth.png" className="mr-3 h-8" />
        <div className="text-3xl font-semibold text-white cursive">Oral B</div>
      </div>
      {links.map((link, id) => {
        if (link.active) {
          return (
            <li key={id}>
              <Link to={link.link}>
                <a className="flex text-lg items-center p-2 font-normal text-[#FFFAFB] rounded-lg bg-[#176b5d] ">
                  <img src={link.img} height={25} width={25} />
                  <span className="ml-3 capitalize ">{link.name}</span>
                </a>
              </Link>
            </li>
          );
        }
        return (
          <li key={id}>
            <Link to={link.link}>
              <a className="flex items-center p-2 text-lg font-normal text-[#FFFAFB] rounded-lg  hover:bg-[#176b5d] ">
                <img src={link.img} height={25} width={25} />
                <span className="ml-3 capitalize ">{link.name}</span>
              </a>
            </Link>
          </li>
        );
      })}
      <p className="grow"></p>
      <li className="">
        <button
          onClick={openModal}
          className="flex w-full items-center p-2 text-lg font-normal text-[#FFFAFB] rounded-lg  hover:bg-[#176b5d] ">
          <img src="/icons/sign-out.svg" height={25} width={25} />
          <span className="ml-3 capitalize ">Logout</span>
        </button>
      </li>
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
