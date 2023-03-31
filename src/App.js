import Home from "./components/Home";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Login from "./components/Login";
import Users from "./components/users/Users";
import AddUser from "./components/users/add-user-wizard/AddUser";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Profile from "./components/users/user-profile/Profile";
import Jobs from "./components/jobs/Jobs";
import {useContext} from'react';

import AddJob from "./components/jobs/add-job-wizard/AddJob";
import Agreements from "./components/agreements/Agreements";
import { useEffect } from "react";
import {React} from'react';
function App () {
  const [toogle, settoogle] = useState(true);
  const [users, setusers] = useState([]);
  const [jobs, setjobs] = useState([]);
  const [agreements, setagreements] = useState([]);
  const [user, setuser] = useState({});
  
  const onToogle = () => {
    settoogle(!toogle);
  };

  const selectUser =(user)=>{
    user = localStorage.getItem('user',user);
    console.log(user);
    setuser(user);
  }
 
  

  useEffect(() => {
    fetch("http://localhost:8080/api/get-users")
      .then((res) => res.json())
      .then(
        (data) => {
          setusers(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/get-all-jobs")
      .then((res) => res.json())
      .then(
        (data) => {
          setjobs(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/get-all-agreements")
      .then((res) => res.json())
      .then(
        (data) => {
          setagreements(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);



  return (<>
      <Header hideSideBar={onToogle} />
      {toogle && <Sidebar />}
      <main id="main" className="main">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users users={users} selectUser ={ selectUser}  />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/profile" element={<Profile  />} />
            <Route path="/jobs" element={<Jobs jobs={jobs} />} />
            <Route path="/add-job" element={<AddJob />} />

            <Route
              path="/agreements"
              element={<Agreements agreements={agreements} />}
            />
          </Routes>
        </Router>
      </main>
      <Footer /></>
  );
}

export default App;
