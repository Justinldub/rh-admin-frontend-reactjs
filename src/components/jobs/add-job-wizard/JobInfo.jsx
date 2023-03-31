import {useEffect} from 'react';
import {useState} from 'react';
import {React} from 'react';

const JobInfo = () => {

  const [roles, setroles] = useState([])
  const [titles, settitles] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/get-job-roles")
    .then((res) => res.json())
    .then(
    (data) => {
    setroles(data);
    },
    (error) => {
    console.log(error);
    }
    );
    }, []);

    useEffect(() => {
      fetch("http://localhost:8080/api/get-job-titles")
      .then((res) => res.json())
      .then(
      (data) => {
      settitles(data);
      },
      (error) => {
      console.log(error);
      }
      );
      }, []);
  return (
    <>
      <form className="row g-3 col-lg-8 d-inline">
        <div className="col-lg-12 p-12">
          <label htmlFor="inputNanme4" className="form-label">
            Please enter employer client_id for the job{" "}
          </label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-lg-12 p-12">
          <label htmlFor="inputNanme4" className="form-label">
            Job title
          </label>
          <select type="file" className="form-control">
          <option>choose Title</option>
                {
                  titles.map((title,index) => {
                    return (
                     
                    <option key = {index} >{title}</option>)
                  })
                }
          </select>
      
        </div>
        <div className="col-lg-12">
          <label htmlFor="inputEmail4" className="form-label">
            Salary
          </label>
          <input type="number" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-lg-12">
          <label htmlFor="inputEmail4" className="form-label">
            Roles
          </label>
          <ul>
                {
                   roles.map((role,index) => {
                    return (
                     
                    <li key = {index} ><input type = "checkbox"/> <span className="ml-3" >{role}</span></li>)
                  })
                }
          </ul>
        </div>
        <div className="col-lg-12">
          <label htmlFor="" className="form-label">
            Job discription
          </label>
          <textarea
            type="password"
            className="form-control"
            id=""
          ></textarea>
        </div>
        <hr/>

        <div className="text-left">
          <button type="submit" className="btn btn-primary btn-block">
            Save & Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default JobInfo;
