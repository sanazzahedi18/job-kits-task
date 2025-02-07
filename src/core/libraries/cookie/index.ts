import { getCookie, setCookie, deleteCookie } from 'cookies-next/client'

const decodeBase64 = (input: string): string => {
  return Buffer.from(input, 'base64').toString('utf-8')
}
const encodeBase64 = (input: string): string => {
  return Buffer.from(input, 'utf-8').toString('base64')
}
const getAuthCookie = () => {
  const cookie = getCookie('auth_token')
  if (!cookie) return undefined
  return decodeBase64(cookie)
}

const getValidAuthTokens = () => {
  const tokenValue = getAuthCookie()
  return {
    token: tokenValue ? tokenValue : undefined,
  }
}
const setAuthCookie = (token: string, name: string) => {
  setCookie(name, encodeBase64(token), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    // more security options here
    // sameSite: 'strict',
    // httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  })
}
const deleteAuthCookie = () => {
  deleteCookie('auth_token')
}
export { getValidAuthTokens, setAuthCookie, deleteAuthCookie }
