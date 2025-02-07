function parseJwt(token: string | undefined) {
  if (!token) {
    return
  }
  try {
    const splited = token.split('.')
    const base64Url = splited[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  } catch (error) {
    console.log(error)
    return null
  }
}
export { parseJwt }
