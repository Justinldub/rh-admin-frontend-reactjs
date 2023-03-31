import {React} from'react';
function Jobs (props){
  return (
    <>
      <div className="pagetitle">
        <h1>Jobs Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <i className="bi bi-people-fill"></i> Users
            </li>
            <li className="breadcrumb-item">
              <a href="/add-job">
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
        </nav>
        <section>
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="card-body">
                <h5 className="card-title">Jobs listing</h5>

                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Status</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                 {props.jobs.map((job) => {
                   return ( <tr key = {job.id} >
                    <th scope="row">#{job.id}</th>
                    
                    <td>{job.title}</td>
                  
                    <td>R {job.salary}</td>
                    
                    <td>
                      <span className="badge bg-success">{job.status}</span>
                    </td>
                    <td> <button className="btn  btn-dark text-white">
                          
                          <a href="/view-job">
                            <i
                              className="bi bi-pencil-square text-white"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </button></td>
                  </tr>)
                 })}


                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Jobs;
