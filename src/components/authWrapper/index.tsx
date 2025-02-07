'use client'
import { useDispatch, useSelector } from 'react-redux'
import {
  authApi,
  useGetAuthDataQuery,
  useLoginMutation,
} from '@/core/libraries/redux/auth/authApi'
import { use, useEffect, useState } from 'react'
import { getValidAuthTokens } from '@/core/libraries/cookie'
import { RootState } from '@reduxjs/toolkit/query'
import { logout } from '@/core/libraries/redux/auth/auth'
import { useRouter } from 'next/navigation'

type Props = {
  children?: React.ReactNode
}

const AuthWrapper = ({ children }: Props) => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const { userEmail } = useSelector((state: any) => state.auth)
  const { token } = getValidAuthTokens()
  const { error, isLoading } = useGetAuthDataQuery(
    { token: token || '' },
    {
      //ch

      // The useGetAuthDataQuery hook will not execute the query at all if these values are falsy
      skip: userEmail || !token,
    }
  )
      //ch

  // this query will only execute if the token is valid and the user email is not already in the redux store
      //ch

  // if the user doesnt have a valid token, redirect to login page
  useEffect(() => {
    if (!token) {
      push('/login')
      dispatch(logout())
    }
  }, [token, push])
  if (isLoading) {
    return <div>Loading...</div>
  }

  return children
}
export { AuthWrapper }
