import { LoginResponse } from '@/core/definition/types/auth'
import { createSlice } from '@reduxjs/toolkit'
import { deleteAuthCookie, setAuthCookie } from '../../cookie'
import { authApi } from './authApi'

const initialState: Partial<LoginResponse> = {}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      deleteAuthCookie()
      return {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (_state, { payload }) => {
          // set the token in the cookies
          setAuthCookie(payload.token, 'auth_token')
          if (payload.token) _state = payload
          return payload
        }
      )
      .addMatcher(
        authApi.endpoints.getAuthData.matchFulfilled,
        (_state, { payload }) => {
          console.log('sup', payload)
          //ch
          // setAuthCookie(payload.token, 'auth_token')
          return payload
        }
      )
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
