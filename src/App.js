import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Nav from "./component/Nav";
import CreateUser from "./component/CreateUser";
import UserList from "./component/UserList";
import UserUpdate from "./component/UserUpdate";

import { Provider } from "react-redux";
import { store } from "./component/redux/store";

function App() {

  return (
    <div className="App"> 
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/updateUser/:id" element={<UserUpdate />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

