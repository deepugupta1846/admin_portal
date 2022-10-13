import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Viewuserdata } from "./Viewuserdata";
import { useDispatch } from "react-redux";
import { delete_user } from "../Redux/Action/action";
import Swal from "sweetalert2";
export const Showuser = () => {
  const users = useSelector((state) => state.userReducer.users);
  const [searchData, setSearchData] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [userdata, setuserdata] = useState("");
  const [deleteid, setdeleteid] = useState("");
  const dispatch = useDispatch();
  const getusername = localStorage.getItem("username");
  const navigate = useNavigate();
  useEffect(() => {
    if (getusername) {
      navigate("/admin/users");
    } else {
      navigate("/");
    }
  }, [getusername]);
  const closeHandler = () => {
    setuserdata("");
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_user(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <div className="user_home_container">
        <div className="body-container">
          <div className="show_user_container">
            <div className="show_list">
              <div className="list_header">
                <div>Users</div>
                <div>
                  <Link to="/admin/adduser" className="route-link">
                    <i class="fa-sharp fa-solid fa-plus"></i>Add New User
                  </Link>
                </div>
              </div>
              <div>
                <div className="user_list_body">
                  <input
                    type="search"
                    className="searchbar"
                    placeholder="Search by username and name"
                    value={searchData}
                    onChange={(e) => {
                      setSearchData(e.target.value);
                    }}
                  />
                  <label>Filter</label>
                  <select
                    className="form-input"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <select
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="admin_title">
                  <label className="col">Sr.No</label>
                  <label className="col">First Name</label>
                  <label className="col">Last Name</label>
                  <label className="col">Username</label>
                  <label className="col">Status</label>
                  <label className="col">Action</label>
                  <label className="col"></label>
                </div>
                {users
                  .filter((data) => {
                    if (searchData === "") {
                      return data;
                    } else if (
                      data.first_name
                        .toLowerCase()
                        .match(searchData.toLowerCase()) ||
                      data.user_name
                        .toLowerCase()
                        .match(searchData.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .filter((data) => {
                    if (status === "") {
                      return data;
                    } else if (
                      data.status.toLowerCase() === status.toLowerCase()
                    ) {
                      return data;
                    }
                  })
                  .filter((data) => {
                    if (gender === "") {
                      return data;
                    } else if (
                      data.gender.toLowerCase() === gender.toLowerCase()
                    ) {
                      return data;
                    }
                  })
                  .map((data, index) => {
                    return (
                      <div className="admin_title">
                        <label className="col">{index}</label>
                        <label className="col">{data.first_name}</label>
                        <label className="col">{data.last_name}</label>
                        <label className="col">{data.user_name}</label>
                        <label className="col">{data.status}</label>
                        <label
                          className="col"
                          onClick={() => {
                            setuserdata([data]);
                          }}
                        >
                          <i class="fa-solid fa-eye"></i>
                        </label>
                        <label
                          className="col"
                          onClick={() => {
                            deleteUser(data.id);
                          }}
                        >
                          <i class="fa-sharp fa-solid fa-trash"></i>
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div>
          {userdata ? (
            <Viewuserdata data={userdata} close={closeHandler} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
