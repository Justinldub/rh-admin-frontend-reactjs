import {React} from'react';

function Sidebar() {
    return ( 
        <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
        <a to="/home" className="nav-link " href="/home">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
          </ul >
          <ul className = "sidebar-nav">
              <li className="nav-item col-lg-12">
              <a className="nav-link " href ="/users" >
          <i className="bi bi-people"></i>
          <span>Users</span>
        </a>
              </li>
              <a className="nav-link " href = "/jobs">
          <i className="bi bi-briefcase"></i>
          <span>Jobs</span>
        </a>
        <a className="nav-link " href = "/agreements">
          <i className="bi bi-file-earmark-text"></i>
          <span>Aggrements</span>
        </a>
          </ul>
        </aside>
     );
}

export default Sidebar;