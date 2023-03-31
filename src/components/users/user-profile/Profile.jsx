import pp from "../../assets/img/profile-img.jpg";
import ProfileOverview from "./ProfileOverview";
import { useState } from "react";
import EditProfile from "./EditProfile";
import { useEffect } from "react";
import { React } from "react";
const Profile = (props) => {
  const [tabIndex, settabIndex] = useState(0);const [user, setuser] = useState({
    first_name: "",
    surname: "",
    id_number: "",
    email: "",
    cell_numbers: "",
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
  const changeIndex = () => {
    console.log(tabIndex);
  };
  const onOverView = () => {
    settabIndex(0);
  };
  const onEdit = () => {
    settabIndex(1);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    console.log(user);
    setuser(user);
    /* console.log(props);
    const url ="http://localhost:8080/api/get-user/"+ props.id;
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setuser(data);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
      */
  }, []);

  return (
    <>
      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/home">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/users">Users</a>
            </li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img src={pp} alt="Profile" className="rounded-circle" />
                <h2>{user.first_name}</h2>
                <h3>Au-pair</h3>
                <div className="social-links mt-2">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      onClick={onOverView}
                      className={
                        tabIndex === 0 ? "nav-link active" : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      onClick={onEdit}
                      className={
                        tabIndex === 1 ? "nav-link active" : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-settings"
                    >
                      Settings
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <ProfileOverview user={user} tabIndex={tabIndex} />
                  <EditProfile user={user} tabIndex={tabIndex} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
