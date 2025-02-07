export type LoginResponse = {
  id: number
  role: string
  name: string
  email: string
  phone: null | string
  verified: boolean
  phoneVerified: boolean
  token: string
  avatarId: null | number
  googleUserWithoutPassword: boolean
}
export type LoginRequest = {
  identifier: string
  password: string
}
