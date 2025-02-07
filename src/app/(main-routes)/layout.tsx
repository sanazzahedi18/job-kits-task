import { MainLayout } from '../_partial/layout/components/MainLayout'

export default function AuthPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainLayout>{children}</MainLayout>
}
