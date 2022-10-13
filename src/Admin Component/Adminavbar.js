import React from "react";
import { Link } from "react-router-dom";
import "../css/adminnavbar.css";
import { useNavigate } from "react-router-dom";
export const Adminnavbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-title">
            <Link to="/admin" className="link">
              <h2>Administration</h2>
            </Link>
          </div>
          <div className="navbar-link">
            <Link to="/admin/users" className="link">
              Show All User
            </Link>
          </div>
          <div className="navbar-link">
            <Link className="link" onClick={logOut}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
