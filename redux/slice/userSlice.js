// store/reducers/user.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initialize user as null or an empty object, depending on your use case
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the user object in the Redux store
    },
    deleteUser: (state) => {
      state.user = null; // Delete the user object from the Redux store
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
