import pp from "../assets/img/profile-img.jpg";
import "./users.css";
function Users(props) {
    return ( 
        <>
           <div className="pagetitle">
      <h1>Users Management</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active"><i className="bi bi-people-fill"></i> Users</li>
          <li className="breadcrumb-item"><a href="/add-user"><i className="bi bi-person-plus"></i> Add Users</a></li>
          <li className="breadcrumb-item"><a href="/home"><i className="bi bi-house"></i> Home</a></li>
        </ol>
        <hr/>
      </nav>
    </div>
                  <div className="card">
                  
            <div className="card-body">
              <h5 className="card-title">List of registered users</h5>

             
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col"></th>
                    <th scope="col" className = "">Initials</th>
                   
                    <th scope="col">Role</th>
                    <th scope="col"><i className="bi bi-geo-alt-fill"></i> Localtion</th>
                     <th scope="col text-center"><i className = "bi bi-hammer text-center"></i></th>
                  </tr>
                </thead>
                <tbody>
                 {
                     props.users.map((user) =>{
                         return (<tr key = {user.id}>
                        <td >
                           <p>{user.id}</p>
                        </td>
                        <td>
                            <img width ="100px" height ="100px" src = {pp} alt = "" className = "pp" />
                        </td>
                        <td > <div className ="">
                            
                                <p className="col-lg-12 ml-2 p-2">Mr J.L {user.surname}</p>
                                
                                <span class=" col-lg-12 p-2"><i class="bi bi-whatsapp me-1"></i> 060 8585 764</span>
                                
                            </div></td>
                    
                        <td>{user.role}</td>
                        <td>{user.address.street_number}</td>
                        <td>
                            <div className = "d-inline">
                                <button className="btn  btn-link col-lg-12 p-2"> <a href="/profile"><i className="bi bi-pencil-square" aria-hidden="true"></i></a></button>
                                <button className="btn  btn-link col-lg-12 p-2 mt-1"> <i className="ri ri-delete-bin-2-line " aria-hidden="true"></i></button>
                            </div>
                        </td>
                         </tr>)
                     })
                 }
                 
                </tbody>
              </table>
             

            </div>
          </div>
          </>
     );
}

export default Users;