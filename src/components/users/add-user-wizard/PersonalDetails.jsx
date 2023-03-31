import { useState } from "react";
import { useEffect } from "react";
import {React} from'react';
function PersonalDetails(props) {
  const [selectedLanguages, setselectedLanguages] = useState([]);
  const [first_name, setfirst_name] = useState("");
  const [surname, setsurname] = useState("");
  const [id_number, setid_number] = useState("");
  const [email, setemail] = useState("");
  const [nationalities, setnationalities] = useState([]);
  const [nationality, setnationality] = useState("");
  const [language, setlanguage] = useState([]);
  const [races, setraces] = useState([]);
  const [race, setrace] = useState("");
  const [roles, setroles] = useState([]);
  const [role, setrole] = useState("");
  const [contact_numbers, setcontact_numbers] = useState("");
 
  useEffect(() => {
    const url = "http://localhost:8080/api/get-nationality";
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setnationalities(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  useEffect(() => {
    const url = "http://localhost:8080/api/get-races";
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setraces(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  useEffect(() => {
    const url = "http://localhost:8080/api/get-languages";
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setlanguage(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  useEffect(() => {
    const url = "http://localhost:8080/api/get-roles";
    fetch(url)
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
  const onNext = () => {
    let details = {
      first_name : first_name,
      surname : surname,
      id_number: id_number,
      email: email,
      contact_numbers: contact_numbers,
      selectedLanguages: selectedLanguages,
      role: role,
      nationality: nationality,
      race: race
    };
    //console.log(details.selectedLanguages);
    props.next(details);
  };

  const addLanguage = (event) => {
    const language = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setselectedLanguages([...selectedLanguages, language]);
      // console.log(selectedLanguages);
    } else {
      setselectedLanguages(selectedLanguages.filter((i) => i !== language));
    }

    // console.log(selectedLanguages);
  };

  return (
    <div className="form-group row ">
      <div className="col-lg-6">
        <label className="form-label">First name</label>
        <input
          value={first_name}
          onChange={(e) => setfirst_name(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-lg-6">
        <label className="form-label">Last name</label>
        <input
          value={surname}
          onChange={(e) => setsurname(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-lg-6">
        <label className="form-label">ID Number</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person-badge" aria-hidden="true"></i>
          </span>
          <input
            value={id_number}
            onChange={(e) => setid_number(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <label className="form-label">Email</label>
        <div className="input-group">
          <span className="input-group-text">@</span>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="col-lg-12">
        <label className="form-label">Phone</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-phone-fill" aria-hidden="true"></i>
          </span>
          <input
            value={contact_numbers}
            onChange={(e) => setcontact_numbers(e.target.value)}
            type="text"
            className="form-control col-3"
          />
        </div>
      </div>
      <hr className="mt-4" />
      <div className="col-lg-6">
        <h3 className="form-label">Spoken Languages</h3>
        <ul>
          {language.map((l, index) => {
            return (
              <li key={index} className="text-dark">
                <input
                  type="checkbox"
                  value={l}
                  checked={selectedLanguages.includes(l)}
                  onChange={addLanguage}
                />
                <span className="ml-3">{l}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-lg-6">
        <h3 className="form-label">Role</h3>
        <p>Please select Role</p>

        <select
          className="form-control"
          value={role}
          onChange={(e) => setrole(e.target.value)}
          name={role}
        >
          <option>...</option>
          {roles.map((role, index) => {
            return <option key={index}>{role}</option>;
          })}
        </select>
      </div>

      <div className="col-lg-6">
        <h3 className="form-label">Nataionality</h3>
        <p>Please select Nationality</p>

        <select
          className="form-control"
          value={nationality}
          onChange={(e) => setnationality(e.target.value)}
          name={nationality}
        >
          <option>...</option>
          {nationalities.map((n, index) => {
            return <option key={index}>{n}</option>;
          })}
        </select>
      </div>
      <div className="col-lg-6">
        <h3 className="form-label">Athnicity</h3>
        <p>Please select Athnicity group</p>

        <select
          className="form-control"
          value={race}
          onChange={(e) => setrace(e.target.value)}
          name={race}
        >
          <option>...</option>
          {races.map((r, index) => {
            return <option key={index}>{r}</option>;
          })}
        </select>
      </div>
      <div className="mt-3 col-lg-12">
        <button
          onClick={onNext}
          className="text-white btn btn-success btn-block pull-right p-3"
          type="button"
        >
          Save & Proceed <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;
