import pp from "../../assets/img/profile-img.jpg";
import { React } from "react";
const EditProfile = (props) => {
  return (
    <>
      {props.tabIndex === 1 ? (
        <div
          className="tab-pane fade show active profile-edit pt-3"
          id="profile-edit"
        >
          <form>
            <div className="row mb-3">
              <label
                htmlFor="profileImage"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Change Profile Image
              </label>
              <input type="file" className="form-control" />
              <button className="btn btn-primary col-lg-1 mt-1">
                <i className="bi-upload"></i>
              </button>
              {/*}
              <div className="col-md-8 col-lg-9">
                <img src={pp} alt="Profile" />
                <div className="pt-2">
                  <a
                    href="#"
                    className="btn btn-primary btn-block btn-md col-lg-4"
                    title="Upload new profile image"
                  >
                    <i className="bi bi-upload"></i>
                  </a>
                
                </div>
      </div>*/}
            </div>

            <div className="row mb-3">
              <label
                htmlFor="fullName"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Full Name
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  placeholder={props.user.first_name}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="about"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Surname
              </label>
              <div className="col-md-8 col-lg-9">
                {" "}
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  placeholder={props.user.surname}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="company"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Company
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Lueilwitz, Wisoky and Leuschke"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">
                Job
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="job"
                  type="text"
                  className="form-control"
                  id="Job"
                  placeholder="Web Designer"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Country"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Country
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  id="Country"
                  placeholder="USA"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Address"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Address
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="A108 Adam Street, New York, NY 535022"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Phone"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Phone
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  id="Phone"
                  placeholder="(436) 486-3538 x29071"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Email"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Email
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="k.anderson@example.com"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Twitter"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Twitter Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="twitter"
                  type="text"
                  className="form-control"
                  id="Twitter"
                  placeholder="https://twitter.com/#"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Facebook"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Facebook Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="facebook"
                  type="text"
                  className="form-control"
                  id="Facebook"
                  placeholder="https://facebook.com/#"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Instagram"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Instagram Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="instagram"
                  type="text"
                  className="form-control"
                  id="Instagram"
                  placeholder="https://instagram.com/#"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="Linkedin"
                className="col-md-4 col-lg-3 col-form-label"
              >
                Linkedin Profile
              </label>
              <div className="col-md-8 col-lg-9">
                <input
                  name="linkedin"
                  type="text"
                  className="form-control"
                  id="Linkedin"
                  placeholder="https://linkedin.com/#"
                />
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditProfile;
