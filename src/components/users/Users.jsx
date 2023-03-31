import pp from "../assets/img/profile-img.jpg";
import { useEffect } from "react";
import { useState } from "react";
import {React} from'react';
const Users = (props) => {
  const [users, setusers] = useState([]);
  const onSelectUser = (user) => {
    // console.log(user);
    // setuser(user);
    localStorage.setItem('user',JSON.stringify(user));
    //props.selectUser(user);
  };
  return (
    <>
      <div className="pagetitle">
        <h1>Users Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <i className="bi bi-people-fill"></i> Users
            </li>
            <li className="breadcrumb-item">
              <a href="/add-user">
                <i className="bi bi-person-plus"></i> Add Users
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/home">
                <i className="bi bi-house"></i> Home
              </a>
            </li>
          </ol>
          <hr />
        </nav>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">List of registered users</h5>

          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="">
                    Contact information
                  </th>
                  <th scope="col">Role</th>
                  <th scope="col">
                    <i className="bi bi-geo-alt-fill"></i> Localtion
                  </th>
                  <th scope="col text-center">
                    <i className="bi bi-hammer text-center"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <img
                          width="100px"
                          height="100px"
                          src={pp}
                          alt=""
                          className="pp"
                        />
                      </td>
                      <td>
                        <div className="">
                          <p className="col-lg-12 ml-2 p-2">
                            {user.first_name}
                          </p>
                          <p className="col-lg-12 ml-2 p-2">{user.surname}</p>
                          <span className=" col-lg-12 p-2">
                            <i className="bi bi-whatsapp me-1"></i> {user.contact_numbers}
                          </span>
                        </div>
                      </td>
                      <td>{user.role}</td>
                      <td>{user.address.suburb}</td>
                      <td>
                        <div className="d-inline">
                          <a
                            href="/profile"
                            onClick={() => onSelectUser(user)}
                            className="btn  btn-secondary col-lg-12 p-2"
                          >
                            <i
                              className="bi bi-pencil-square text-white"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <button className="btn  btn-link col-lg-12 p-2 mt-1">
                            <i
                              className="ri ri-delete-bin-2-line "
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
