import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/userSlice";

const UserList = ()=> {
  const users = useSelector((store) => store.users);
  // console.log(users); 
  const dispatch = useDispatch();

  ////  Selcting userDetail && delete them through Id  --------------->>
  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
    // console.log("deleted id : ", id);

    alert("User data deleted sucessfully...");
  
  };

  return (
    <>
      {users.length > 0 ? 
        <div className="user_list">
          <h2>User list </h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Pincode</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val, i) => (
                <tr key={i}>
                  <td>{val.name}</td>
                  <td>{val.mobile}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>{val.pincode}</td>
                  <td className="delete">
                    <Link to={`/updateUser/${val.id}`}>
                      <button id="update" className="mx-2">
                        Edit
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteUser(val.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        : <h3 style={{"color":"red"}}> ohoo!!! No data found</h3>
      }
    </>
  );
}
export default UserList;
