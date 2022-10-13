import React from "react";
import { Route, Routes } from "react-router-dom";
import { Addnewuser } from "../Admin Component/Addnewuser";
import { Adminhome } from "../Admin Component/Adminhome";
import { Dashboard } from "../Admin Component/Dashboard";
import { Showuser } from "../Admin Component/Showuser";
import { Updateuser } from "../Admin Component/Updateuser";
import { LayOut } from "../component/Layout";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Adminhome />} />
          <Route path="users" element={<Showuser />} />
          <Route path="adduser" element={<Addnewuser />} />
          <Route path="updateuser" element={<Updateuser />} />
        </Route>
      </Routes>
    </>
  );
};
