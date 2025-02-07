import * as Yup from 'yup'

const validateEmail = (email: string | undefined) => {
  return Yup.string().email().isValidSync(email)
}

const validatePhone = (phone: string) => {
  const phoneRegExp = /^(0|0098|\+98|)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
  return Yup.string().matches(phoneRegExp).isValidSync(phone)
}
const loginSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('ایمیل یا شماره تماس را وارد کنید')
    .test('identifier', 'ایمیل یا شماره تماس اشتباه است', (value) => {
      return validateEmail(value) || validatePhone(value)
    }),
  password: Yup.string()
    .required('رمز عبور را وارد کنید.')
    .test('minLength', 'حداقل ۶ کاراکتر', (value) => /^.{6,}$/.test(value))
    .test('lowercase', 'حداقل یک حرف کوچک وارد کنید', (value) =>
      /[a-z]/.test(value)
    )
    .test('uppercase', 'حداقل یک حرف بزرگ وارد کنید', (value) =>
      /[A-Z]/.test(value)
    )
    .test('number', 'حداقل یک عدد', (value) => /\d/.test(value)),
})
export { loginSchema }
