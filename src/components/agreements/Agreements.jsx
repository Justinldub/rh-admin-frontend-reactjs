import {React} from'react';
function Agreements(props) {
    return ( <>
         <div className="pagetitle">
        <h1>Agreements Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <i className="bi bi-people-fill"></i> Agreements
            </li>
            <li className="breadcrumb-item">
              <a href="/add-user">
                <i className="bi bi-person-plus"></i> Add Agreement
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
          <h5 className="card-title">List of Agreements</h5>

          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  
                  <th scope="col" className="">
                    Contract Type
                  </th>

                  <th scope="col">Job Title</th>
                  <th scope="col">
                    <i className="bi bi-geo-alt-fill"></i> Status
                  </th>
                  <th scope="col text-center">
                    <i className="bi bi-hammer text-center"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.agreements.map((agreement) => {
                  return (
                    <tr key={agreement.id}>
                      <td>
                        <p>{agreement.id}</p>
                      </td>
                        <td>
                            {agreement.contract}
                        </td>
                      <td>
                        <div className="">
                          <p className="col-lg-12 ml-2 p-2">
                            {agreement.title}
                          </p>

                          <span class=" col-lg-12 p-2">
                            <i class=""></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="">
                          <p className="col-lg-12 ml-2 p-2">
                          {agreement.status}
                          </p>

                          <span class=" col-lg-12 p-2">
                            <i class=""></i> 
                          </span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="d-inline">
                          <button className="btn  btn-link col-lg-12 p-2">
                          
                            <a href="/profile">
                              <i
                                className="bi bi-pencil-square"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </button>
                          <button className="btn  btn-link col-lg-12 p-2 mt-1">
                         
                            <i
                              className="ri ri-delete-bin-2-line "
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </> );
}

export default Agreements;