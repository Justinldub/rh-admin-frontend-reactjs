import JobInfo from "./JobInfo"
import {useState} from 'react';
import {React} from'react';
const AddJob =()=> {
    const [step, setstep] = useState(0)
    return ( <>
      <div className="pagetitle">
        <h1>Jobs Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <i className="bi bi-people-fill"></i> Users
            </li>
            <li className="breadcrumb-item">
              <a href="/add-jobs">
                <i className="bi bi-layers"></i> Add Jobs
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/home">
                <i className="bi bi-house"></i> Home
              </a>
            </li>
          </ol>
          <hr />
        
        <div className = "card p-4">
            <div className = "card-title">
            <h2>Create new job</h2>
            </div>
        <div className = "card-body">
            <JobInfo/>
        </div>
        </div>
        

        </nav>

        
      </div>
    
    </> );
}

export default  AddJob;