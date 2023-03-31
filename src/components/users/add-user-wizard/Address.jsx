import { useState } from "react";
import {React} from'react';
function Address(props) {
const [street_name, setstreet_name] = useState("");
const [suburb, setsuburb] = useState("");
const [city, setcity] = useState("");
const [country, setcountry] = useState("");




  const onNext = () => {
    let address={
      "street_name":street_name,
      "suburb":suburb,
      "city":city,
      "country":country
    }
    props.next(address);
  };
  const onPrevious = () => {
    props.previous();
  };
  return (
    <div className="form-group row g-4">
      <div className="col-lg-4">
        <label className="form-label">Street Number</label>
        <input onChange ={(e) =>setstreet_name(e.target.value)} type="text" className="form-control" required />
      </div>
      <div className="col-lg-4">
        <label className="form-label">Suburb</label>
        <input onChange ={(e) =>setsuburb(e.target.value)}  type="text" className="form-control" required />
      </div>
      <div className="col-md-4">
        <label className="form-label">City</label>
        <input onChange ={(e) =>setcity(e.target.value)}  type="text" className="form-control" required />
      </div>

      <div className="col-md-12">
        <label  className="form-label">Country</label>
        <select className="form-select col-lg-4">
         
          <option>...</option>
        </select>
      </div>

      <div className="col-lg-6">
        <button
          onClick={onPrevious}
          className="text-white btn btn-primary btn-block pull-right p-3 col-lg-12 "
          type="button"
        >
          <i className="bi bi-arrow-left-circle-fill"></i> Previous
        </button>
      </div>
      <div className="col-lg-6">
        {" "}
        <button
          onClick={onNext}
          className="text-white btn btn-success btn-block pull-right p-3 col-lg-12"
          type="button"
        >
          Save and Submit <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Address;
