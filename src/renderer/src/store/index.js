import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice
  },

  devTools: process.env.NODE_ENV !== 'production' ? true : false,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})
