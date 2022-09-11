import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import shortId from "shortid";

const vId = shortId.generate()
// console.log(vId)

const CreateUser = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setuserData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    pincode: "",
  });

  //input Handelrer  -----------
  const changeHandler = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);     
  };


  const { name, mobile, email, address, pincode } = userData;
  const createUser = (e) => {
    e.preventDefault();

    var mobileRegEx = /^[789]\d{9}$/;
    var spaceRegex = /^\s+$/;
    var pinCodeRegEx = /^[1-9]\d{5}$/;
    var nameRegEx = (/^[A-Za-z_\s]+$/)
    var emailRegEx = /^[a-zA-Z]+[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (name === "") {
      alert("Enter your name...");
      document.getElementById("name").focus();
    } else if (spaceRegex.test(name)) {
      alert("White space not allowed !! enter valid name !!!");
      document.getElementById("name").focus();
    } else if (!nameRegEx.test(name)) {
      alert("Please enter valid name !!! ");
      document.getElementById("name").focus();
    } else if (name.length < 3) {
      alert("Name should be atleast 3 charecter...");
    } else if (mobile === "") {
      alert("Enter your mobile number");
      document.getElementById("mobile").focus();
    } else if (spaceRegex.test(mobile)) {
      alert("White space not allowed  enter valid number !");
    } else if (!mobileRegEx.test(mobile)) {
      alert("Enter 10 digit valid mobile !");
    } else if (!emailRegEx.test(email)) {
      alert("Enter valid email with valid character !!! like abc123@gmail.com");
      document.getElementById("email").focus();
    } else if (address === "") {
      alert("enter address !");
    } else if (address.length < 10 ) {
      alert("Atleast write 10 words for your address !");
    } else if (pincode === "") {
      alert("Enter 6 digit pin code !");
    } else if (spaceRegex.test(pincode)) {
      alert("white space not allowed !!! enter valid pin code !");
    } else if (!pinCodeRegEx.test(pincode)) {
      alert("enter valid 6 digit pin code !!!");
    } else {
            
      dispatch(
        addUser({
          id: vId,
          name: userData.name,
          mobile: userData.mobile,
          email: userData.email,
          address: userData.address,
          pincode: userData.pincode,
          
        }),
        
      );
      alert("new user added sucessfully");
      navigate("/userList");

    }
  };

  return (
    <div className="createUser">
      <h2>Add New User</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                value={userData.name}
                onChange={changeHandler}
                placeholder="Enter your name"
              />
            </td>
            <td>
              <input
                type="tell"
                name="mobile"
                id="mobile"
                value={userData.mobile}
                onChange={changeHandler}
                placeholder="Enter contact number"
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={changeHandler}
                placeholder="abc123@test.com"
              />
            </td>
            <td>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={changeHandler}
                placeholder="Enter your address"
              />
            </td>
            <td>
              <input
                type="text"
                name="pincode"
                value={userData.pincode}
                onChange={changeHandler}
                placeholder="Enter your pincode"
              />
            </td>
            <td>
              <button id="btn-create-user" onClick={createUser}>
                Add New User
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CreateUser;
