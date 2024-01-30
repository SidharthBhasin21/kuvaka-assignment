import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'login',
    initialState:{
      credential: null
    },
  reducers: {
    setUser: (state,action) => {
      state.value  = action.payload;
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer