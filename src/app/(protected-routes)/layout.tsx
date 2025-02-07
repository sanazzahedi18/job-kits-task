import { AuthWrapper } from '@/components/authWrapper'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthWrapper>{children}</AuthWrapper>
}
