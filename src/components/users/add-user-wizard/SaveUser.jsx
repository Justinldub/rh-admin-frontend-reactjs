import {React} from'react';
const SaveUser = (props) => {
  //console.log(props.user.firs_name);

  const onSave = () => {
    console.log("finalizing");
    props.onFinalize();
  };

  return (
    <>
      <div className="col-lg-12 d-inline">
        <h4 className="col-lg-12 block">Save new user</h4>

        <div>
          <h5 className="card-title">Profile Details</h5>

          <div className="row">
            <div className="col-lg-3 col-md-4 label ">Full Name</div>
            <div className="col-lg-9 col-md-8">
              {props.user.first_name} {props.user.surname}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Role</div>
            <div className="col-lg-9 col-md-8">{props.user.role}</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">{props.user.email}</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Location</div>
            <div className="col-lg-9 col-md-8">
              {props.user.address.city}, {props.user.address.street_name},{" "}
              {props.user.address.suburb}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Phone</div>
            <div className="col-lg-9 col-md-8">
              (+27) {props.user.contact_numbers}{" "}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">{props.user.email}</div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 label">Role</div>
            <div className="col-lg-9 col-md-8">{props.user.role}</div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Athnicity</div>
            <div className="col-lg-9 col-md-8">{props.user.race}</div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Nationality</div>
            <div className="col-lg-9 col-md-8">{props.user.nationality}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Languages</div>
            <div className="col-lg-9 col-md-8">
              <ul>{
                props.user.languages.map((l,index) =>{
                  return (<li key ={index}>{l}</li>)
                })
                }</ul>
            </div>
          </div>

          <p className="text-danger">Are you sure you want to save</p>
          <button
            className="btn btn-dark col-lg-6 p-3"
            type="submit"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default SaveUser;
