
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setUser(state, action){ state.user = action.payload.user; state.token = action.payload.token },
    logout(state){ state.user = null; state.token = null }
  }
})

export const { setUser, logout } = slice.actions
export default slice.reducer
