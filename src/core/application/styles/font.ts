import { Roboto, Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-vazir',
})
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
export { vazir, roboto }
