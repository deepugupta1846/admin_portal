import React from "react";

import { Loginpage } from "./Loginpage";
import Navbar from "./Navbar";
export const LayOut = () => {
  return (
    <>
      <div style={{ positions: "fixed" }}>
        <Navbar />
      </div>

      <Loginpage />
    </>
  );
};
