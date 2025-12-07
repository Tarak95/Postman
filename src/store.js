import { configureStore } from '@reduxjs/toolkit'
import  userInfo  from './slices/userSlice'
import  activeSlice  from './slices/activeSlice'

export const store = configureStore({
  reducer: {
    userInfo: userInfo,
    activeChatInfo: activeSlice
  },
})