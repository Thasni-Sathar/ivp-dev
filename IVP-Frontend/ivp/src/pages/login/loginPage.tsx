import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";

function Login() {

  const [data, setData] = useState({});

  const navigate = useNavigate();

  function handleChange(event:any) {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event:any) {
    event.preventDefault();

    axios
      .post(`http://localhost:4010/users/login`, data)
      .then((response) => {
        let role = response.data.roles;
        const Role = "Role:ADMIN";
        // if (role.includes(Role)) {
        //   window.location: = '/admindashboard';
        // } else {
        //   window.location = "/userdashboard";
        // }
      })
      .catch((error) => {
        localStorage.clear();
        if (error.response) {
          alert(error.response.data.message); //=> response payload
        }
      });
  }

  const handleFailure = (result:any) => {
    alert(result);
  };


  const handleLogin = (googleData:any) => {
    console.log(googleData.tokenId);
    axios
      .post(`http://localhost:4010/users/glogin`, { token: googleData.tokenId })
      .then((data) => {
        // userContext.login(
        //   data.data.accessToken,
        //   data.data.role,
        //   data.data.Username,
        //   data.data.email,
        //   data.data.refreshToken
        //);
        navigate("/userdashboard");
      })
      .catch((error) => {
        localStorage.clear();
        if (error.response) {
          alert("You are not an employee of the company !"); //=> response payload
        }
      });
  };

  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-4">
                    <h3
                      className="h5 mb-2"
                      style={{ fontSize: "30px", fontFamily: "Roboto" }}
                    >
                      Welcome back to RUT
                    </h3>
                    <br />
                    <div className="mb-4">
                      <h1
                        className="h4 font-weight-bold text-theme mb-4"
                        style={{
                          marginTop: "5px",
                          fontSize: "40px",
                          fontFamily: "Roboto",
                          color: "#2C2424",
                        }}
                      >
                        Login
                      </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          onChange={handleChange}
                          className="userTextFeild"
                        />
                      </div>
                      <br />

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          className="password"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <br />
                      <button type="submit" className="btntheme">
                        SignIn
                      </button>
                      <br />
                      <br />
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right" >
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Login;