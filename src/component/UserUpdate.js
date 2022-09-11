import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/userSlice";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const users = useSelector((store) => store.users);
  // console.log("hiiiiii", id, users);

  ////  Selcting userDetail according to unique Id --------------->>
  const existingUser = users.filter((user) => user.id === id);    
  // console.log("hiiiiii", id, existingUser);

  const { name, mobile, email, address, pincode } = existingUser[0];
  const [userData, setuserData] = useState({
    name,
    mobile,
    email,
    address,
    pincode,
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    // console.log(e.target.name, ":", e.target.value);
    setuserData({ ...userData, [e.target.name]: e.target.value });
    
    // console.log(userData);
  };

  const handelUserUpdate = () => {
    dispatch(
      updateUser({
        id: id,
        name: userData.name,
        mobile: userData.mobile,
        email: userData.email,
        address: userData.address,
        pincode: userData.pincode,
      })
    );
    alert("Your data updated !!! ");
    navigate("/userlist");
  };

  return (
    <div className="createUser">
      <h2>Update User</h2>
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
              <button id="btn-create-user" onClick={handelUserUpdate}>
                Update Now
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UpdateUser;
