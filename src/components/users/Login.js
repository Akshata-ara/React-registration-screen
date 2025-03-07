import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    
  });

  const { username,  password} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/");
    alert("Login Successful")
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">LOGIN</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter user email"
              name="email"
              required="required"
              value={username}
              onChange={e => onInputChange(e)}
            /><br/>
          </div>
                            
          <div className="form-group">
            <input
              type="number"
              id="password"
              className="form-control form-control-lg"
              placeholder=""
              name="password"
              required="required"
              value={password}
              onChange={e => onInputChange(e)}
             
            /><br/>
           
            
          
          </div>
          <br/>
          <button  className="btn btn-primary btn-block">Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;