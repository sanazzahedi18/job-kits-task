import React, { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

async function MainLayout({ children }: { children: ReactNode }) {
  const token = 's'
  return (
    <>
      <Navbar userToken={token} />
      {children}
      <Footer />
    </>
  )
}

export { MainLayout }
