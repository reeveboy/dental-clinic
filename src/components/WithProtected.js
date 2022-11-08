import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

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
        <div className="flex relative flex-col grow h-screen overflow-y-auto">
          <Header />
          <div className="p-4">
            <Component {...props} />
          </div>
        </div>
      </div>
    );
  };
}
