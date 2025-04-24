import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' // Ensure correct path
import adminReducer from './adminSlice' // Ensure correct path

export const store = configureStore({
  reducer: {
    user: userReducer, // Assigning the user slice reducer
    admin: adminReducer, // Assigning the seller slice reducer
  },
})

export default store; // Optional: Export store for easy imports
