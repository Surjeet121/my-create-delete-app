import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  var [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;

    // if (email == "test123@gmail.com" && password == 123) {

    // alert("Loged in .....");
    // navigate("/userList");
    // } else {
    //   alert("Email && Password not matched  !!!");
    // }

    if (email === "" || /^\s+$/.test(password) || email.length < 10) {
      alert("enter valid email adsress...");
    } else if (/^\s+$/.test(password) || password === "") {
      alert("Enter valid passaword..");
    } else if (password.length < 3) {
      alert("Passaword should be atleast 3 character..");
    } else {
      alert("Loged in .....");
      navigate("/userList");
    }
  };
  const { email, password } = userData;
  return (
    <>
      <div className="container" style={{ width: "40%" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            onClick={handelSubmit}
            className="btn btn-primary "
            style={{ fontSize: "inherit " }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
