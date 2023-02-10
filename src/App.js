import Home from "./components/Home";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Login from "./components/Login";
import Users from "./components/users/Users";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Profile from "./components/users/Profile";
function App() {
  const [toogle, settoogle] = useState(true);
  const [users, setusers] = useState([
    
    
    {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },  {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },  {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },  {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },  {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },  {
    "id":1,
    "first_name":"Justin Letlhogonolo",
    "surname":"Dube",
    "role":"Employer",
    "address":{
      "street_number":"2092 Ext2 Block/B",
      "suburn":"Letlhabile",
      "city":"Brits",
      "province":"North West",
    }
  },
  
  ])

  const onToogle = () => {
    settoogle(!toogle);
  };
  return (
    
      
      <>
        <Header hideSideBar={onToogle} />
        {toogle && <Sidebar />}
        <main id="main" className="main">
        <Router>
          <Routes>
              <Route path ="/home" element ={<Home/>}/>
              <Route path  = "/users" element = {<Users users = {users} />}/>
              <Route path  = "/add-user" element = {<AddUser />}/>
              <Route path = "/profile" element = {<Profile/>} />
         </Routes>
          </Router>    
         
        </main>
        <Footer/>
      </>
    
  );
}

export default App;
