import {React} from'react';
const ProfileOverview =(props)=> {
    return ( <>
                {props.tabIndex === 0 ? (<div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 className="card-title">About</h5>
                    <p className="small fst-italic">
                      Sunt est soluta temporibus accusantium neque nam maiores
                      cumque temporibus. Tempora libero non est unde veniam est
                      qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                      perspiciatis odit. Fuga sequi sed ea saepe at unde.
                    </p>

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Full name</div>
                      <div className="col-lg-9 col-md-8">{props.user.first_name}</div>
                    </div>

                   

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Surname</div>
                      <div className="col-lg-9 col-md-8">{props.user.surname}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">
                        {props.user.address.street_name} {props.user.address.suburb}, {props.user.address.city}, North West, South Africa 0260
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">{props.user.contact_numbers}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">
                      {props.user.email}
                      </div>
                    </div>
                  </div>) :""}
        </> );
}

export default ProfileOverview;