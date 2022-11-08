import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export function withProtected(Component) {
  return function WithProtected(props) {
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem("token"))
        return navigate("/login", { replace: true });
    }, []);

    return (
      <div className="flex">
        <Sidebar />
        <div>
          <Component {...props} />
        </div>
      </div>
    );
  };
}
