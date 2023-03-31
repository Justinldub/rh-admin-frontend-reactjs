import PersonalDetails from "./PersonalDetails";
import { useState } from "react";
import Address from "./Address";
import SaveUser from "./SaveUser";
import {React} from'react';
function AddUser() {
  let [step, setStep] = useState(1);
  const [details, setdetails] = useState({
    first_name: "",
    surname: "",
    id_number: "",
    email: "",
    contact_numbers: "",
    selectedLanguages: [],
    nationality: "",
    race: "",
    role: "",
  });
  const [address, setaddress] = useState({
    street_name: "",
    suburb: "",
    city: "",
    country: "",
  });
  const [user, setuser] = useState({
    first_name: "",
    surname: "",
    id_number: "",
    email: "",
    contact_numbers: "",
    role: "",
    nationality: "",
    race: "",
    languages: [],
    address: {
      street_name: "",
      suburb: "",
      city: "",
      country: "",
    },
  });
  const onNextPressed = (details) => {
    step += 1;
    setdetails(details);
    setStep(step);
  };

  const onAddress = (address) => {
    setaddress(address);
    // console.log(address.street);
    user.first_name = details.first_name;
    user.surname = details.surname;
    user.id_number = details.id_number;
    user.email = details.email;
    user.address.street_name = address.street_name;
    user.address.suburb = address.suburb;
    user.address.city = address.city;
    user.address.country = address.country;
    user.contact_numbers = details.contact_numbers;
    user.languages = details.selectedLanguages;
    user.role = details.role;
    user.nationality = details.nationality;
    user.race = details.race;
    setuser(user);
    console.log(user);
    step += 1;
    setStep(step);
  };
  const onPrevious = () => {
    step -= 1;
    setStep(step);
  };
  const onSubmit = (e) => {
   console.log("Saving users");
    e.preventDefault();
    post();
  };
  const post = async () => {
    const res = await fetch("http://localhost:8080/api/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = res.json();
    console.log(data);
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Users Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <i className="bi bi-person-plus"></i> Add Users
            </li>
            <li className="breadcrumb-item">
              <a href="/users">
                <i className="bi bi-people"></i> Users
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
          <h5 className="card-title">Add New User</h5>
          <p>Fill the required fields to proceed to the next Section</p>
          <form className="row g-3" onSubmit={onSubmit}>
            <ul className="nav nav-tabs nav-tabs-bordered">
              <li className="nav-item" role="presentation">
                <button className={step === 1 ? "nav-link active" : "nav-link"}>
                  Contact Info
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={step === 2 ? "nav-link active" : "nav-link"}>
                  Address
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={step === 3 ? "nav-link active" : "nav-link"}>
                  Finalize & Save
                </button>
              </li>
            </ul>
            <div className="tab-content pt-2 col-lg-12">
              {step === 1 ? (
                <div className="tab-pane fade show active" role="tabpanel">
                  <PersonalDetails next={onNextPressed} />
                </div>
              ) : (
                ""
              )}
              {step === 2 ? (
                <div className="tab-pane fade show active" role="tabpanel">
                  <Address next={onAddress} previous={onPrevious} />
                </div>
              ) : (
                ""
              )}
              {step === 3 ? (
                <div className="tab-pane fade show active">
                  <SaveUser user={user} onFinalize={onSubmit} />
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
