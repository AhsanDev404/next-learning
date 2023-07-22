// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if you have more slices
  },
});

export default store;
