import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update_user } from "../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const Updateuser = () => {
  const location = useLocation();
  const data = location.state;
  const [userdata, setuserdata] = useState({
    first_name: data.first_name,
    last_name: data.last_name,
    user_name: data.user_name,
    password: data.password,
    address: data.address,
    gender: data.gender,
    status: data.status,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const getusername = localStorage.getItem("username");
  useEffect(() => {
    console.log(data);
    // if (getusername) {
    //   navigate("/admin/updateuser");
    // } else {
    //   navigate("/");
    // }
  }, []);

  const onSubmit = () => {
    dispatch(update_user(data.id, userdata));
    Swal.fire("Good job!", "Data updated", "success");
    navigate("/admin/users");
  };
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Update data</h2>
          </div>
          <div className="form-body">
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
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Adress"
                value={userdata.address}
                onChange={(e) => {
                  setuserdata({ ...userdata, address: e.target.value });
                }}
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
              >
                <option value="active">Active</option>
                <option value="Inactive">InActive</option>
              </select>
            </div>
            <div className="form-input">
              <button onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
