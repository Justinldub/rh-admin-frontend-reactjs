import PersonalDetails from "./add-user-wizard/PersonalDetails";
import { useState } from "react";
import Address from "./add-user-wizard/Address";
function AddUser() {
  let [step, setStep] = useState(1);
  const onNextPressed = () => {
    step += 1;
    setStep(step);
  };
  const onPrevious = () =>{
    step -= 1;
    setStep(step);
  }
  return (
    <>
      <div className="pagetitle">
        <h1>Users Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active"><i className="bi bi-person-plus"></i> Add Users</li>
            <li className="breadcrumb-item">
              <a href="/users"><i className="bi bi-people"></i> Users</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/home"><i className="bi bi-house"></i> Home</a>
            </li>
          </ol>
          <hr/>
        </nav>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add New User</h5>
          <p>Fill the required fields to proceed to the next Section</p>
          <form className="row g-3">
            <ul
              class="nav nav-tabs nav-tabs-bordered"
              id="borderedTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  className= {step === 1 ? "nav-link active":"nav-link"}   
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Contact Info
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  className= {step === 2 ? "nav-link active":"nav-link"}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Address
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  className= {step === 3 ? "nav-link active":"nav-link"}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Finalize & Save
                </button>
              </li>
             
            </ul>
            <div class="tab-content pt-2" col-lg-12>
              {step === 1 ? (
                <div class="tab-pane fade show active" role="tabpanel">
                  <PersonalDetails next={onNextPressed} />
                </div>
              ) : (
                ""
              )}
              {
                step === 2 ? <div class="tab-pane fade show active" role="tabpanel">
                <Address next={onNextPressed} previous ={onPrevious} />
              </div> :""
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
