import { configureStore } from '@reduxjs/toolkit'
import  userInfo  from './slices/userSlice'

export const store = configureStore({
  reducer: {
    userInfo: userInfo
  },
})