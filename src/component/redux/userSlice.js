import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Surjeet",
    mobile: "9113757310",
    email: "surjeet@test.com",
    address: "Madhubani,Bihar",
    pincode: "847236",
  },
  {
    id: "2",
    name: "Amar",
    mobile: "7276760288",
    email: "amar@gmail.com",
    address: "Madhubani,Bihar",
    pincode: "122001",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action)
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, mobile, email, address, pincode } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.mobile = mobile;
        existingUser.email = email;
        existingUser.address = address;
        existingUser.pincode = pincode;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        // console.log("removed user id : " , id)
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
