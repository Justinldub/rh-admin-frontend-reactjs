import logo from "../../components/assets/img/logo.png";
function Header(props) {

    const onToogle =()=>{
        props.hideSideBar();
    }

    return ( 
        <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={logo} alt=""/>
          <span className="d-none d-lg-block">RH-Admin</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick ={onToogle} ></i>
      </div>
          </header>
     );
}

export default Header;