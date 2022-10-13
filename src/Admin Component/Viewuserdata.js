import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
export const Viewuserdata = (props) => {
  const data = props.data[0];
  const navigate = useNavigate();
  const getusername = localStorage.getItem("username");
  useEffect(() => {
    if (getusername) {
      navigate("/admin/users");
    } else {
      navigate("/");
    }
  }, []);
  const updateHandler = () => {
    navigate("/admin/updateuser", { state: data });
  };
  return (
    <>
      <div className="user_body-container">
        <div className="user_show_list">
          <div className="list_header">
            <div>
              {data.first_name}&nbsp;{data.last_name}
              {"(User)"}
            </div>
            <div>
              <i
                class="fa-solid fa-pen-to-square"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={updateHandler}
              ></i>
            </div>
            <div onClick={props.close}>
              <i
                class="fa-solid fa-rectangle-xmark"
                style={{ fontSize: "20px", cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <div className="list_body">
            <div className="admin_title">
              <label>First Name</label>
              <label>{data.first_name}</label>
            </div>
            <div className="user_title">
              <label>Last Name</label>
              <label>{data.last_name}</label>
            </div>
            <div className="user_title">
              <label>Username</label>
              <label>{data.user_name}</label>
            </div>
            <div className="user_title">
              <label>Password</label>
              <label>{data.password}</label>
            </div>
            <div className="user_title">
              <label>Address</label>
              <label>{data.address}</label>
            </div>
            <div className="user_title">
              <label>Gender</label>
              <label>{data.gender}</label>
            </div>
            <div className="user_title">
              <label>Status</label>
              <label>{data.status}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
