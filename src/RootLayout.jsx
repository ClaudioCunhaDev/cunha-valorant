import React from "react";
import { NavBar } from "./Components/NavBar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-[15vh]">
        <Outlet />
      </div>
    </div>
  );
};
