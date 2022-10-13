import React, { useEffect } from "react";
import "../css/adminhome.css";
import { Link, useNavigate } from "react-router-dom";
export const Adminhome = () => {
  const navigate = useNavigate();
  const getusername = localStorage.getItem("username");
  useEffect(() => {
    if (getusername) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [getusername]);
  return (
    <>
      <div className="home-container">
        <div className="home_container">
          <div className="home-title">
            <h1>Site administration</h1>
          </div>
          <div className="body-container">
            <div className="show_list">
              <div className="list_header">
                AUTHENTICATION AND AUTHORIZATION
              </div>
              <div className="list_body">
                <div className="admin_title">
                  <label>Admin</label>
                  <label>
                    <i class="fa-sharp fa-solid fa-plus"></i>Add
                  </label>
                </div>
                <div className="user_title">
                  <label>
                    <Link to="/admin/users" className="link">
                      Users
                    </Link>
                  </label>
                  <label>
                    <Link
                      to="/admin/adduser"
                      style={{ textDecoration: "none", color: "#417690" }}
                    >
                      <i class="fa-sharp fa-solid fa-plus"></i>Add
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            <div className="action">
              <div className="action-container">
                <div className="action-header">RECENT ACTION</div>
                <p>My action</p>
                <p>None Availble</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
