import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  data: null,
  token: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export const {} = cartSlice.actions

export default cartSlice.reducer
