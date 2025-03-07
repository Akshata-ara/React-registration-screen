import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: "",
    
  });

  const { name, email, phone} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/");
    alert("Registered Successfully")
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Register A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              required="required"
              value={name}
              onChange={e => onInputChange(e)}
            /><br/>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              required="required"
              value={email}
              onChange={e => onInputChange(e)}
            /><br/>
          </div>
          
          <div className="form-group">
            <input
              type="number"
              id="phonenumber"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              required="required"
              value={phone}
              onChange={e => onInputChange(e)}
             
            /><br/>
            <div className="form-group">
              <form>
            <input
              type="file"
              id="Resume"
              className="form-control form-control-lg"
              name="Upload"
              required="required"
              onChange={e => onInputChange(e)}
             
            />
            </form>
            </div>
            
          
          </div>
          <br/>
          <button  className="btn btn-primary btn-block">REGISTER</button>
          
        </form>
      </div>
    </div>
  );
};

export default AddUser;