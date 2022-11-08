import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <ul className="w-full bg-gray-300 p-4 flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/book-appointment">Book Appointment</Link>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }}>
        Logout
      </button>
    </ul>
  );
}

export default NavBar;
