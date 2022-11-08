import axios from "axios";
import React, { useEffect } from "react";

function AppointmentEdit() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");

    axios.get("http://localhost:4000/api/appointment/" + id).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <div className="text-2xl font-bold">Edit Appointment</div>
    </div>
  );
}

export default AppointmentEdit;
