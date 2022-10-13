import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Action/action";
import "../css/form.css";
import Swal from "sweetalert2";
export const Addnewuser = () => {
  const [userdata, setuserdata] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    address: "",
    gender: "",
    status: "",
  });
  const getusername = localStorage.getItem("username");
  useEffect(() => {
    if (getusername) {
      navigate("/admin/adduser");
    } else {
      navigate("/");
    }
  }, [getusername]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userdata));
    Swal.fire("Good job!", "User Saved", "success");
    navigate("/admin/users");
  };
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Add New User</h2>
          </div>
          <div className="form-body">
            <form onSubmit={onSubmit}>
              <div className="form-input">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={userdata.first_name}
                    onChange={(e) => {
                      setuserdata({ ...userdata, first_name: e.target.value });
                    }}
                    style={{ width: "100%", marginLeft: "-20px" }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={userdata.last_name}
                    onChange={(e) => {
                      setuserdata({ ...userdata, last_name: e.target.value });
                    }}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="username"
                  value={userdata.user_name}
                  onChange={(e) => {
                    setuserdata({ ...userdata, user_name: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="password"
                  value={userdata.password}
                  onChange={(e) => {
                    setuserdata({ ...userdata, password: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Address"
                  value={userdata.address}
                  onChange={(e) => {
                    setuserdata({ ...userdata, address: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <div>Gender</div>
                <div className="form-input">
                  <div className="form-input">
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      placeholder="password"
                      value="male"
                      onChange={(e) => {
                        setuserdata({ ...userdata, gender: e.target.value });
                      }}
                      style={{ marginLeft: "10px" }}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Female</label>
                    <input
                      type="radio"
                      name="gender"
                      placeholder="password"
                      value="female"
                      onChange={(e) => {
                        setuserdata({ ...userdata, gender: e.target.value });
                      }}
                      style={{ marginLeft: "10px" }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-input">
                <div>Select Status</div>
                <select
                  onChange={(e) => {
                    setuserdata({ ...userdata, status: e.target.value });
                  }}
                  required
                >
                  <option value="active">Active</option>
                  <option value="Inactive">InActive</option>
                </select>
              </div>
              <div className="form-input">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
