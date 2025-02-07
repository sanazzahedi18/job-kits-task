import React, { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

async function MainLayout({ children }: { children: ReactNode }) {
  const token = 's'
  return (
    <>
      {/* <Navbar /> */}
      <Navbar userToken={token} />
      {/* <Container maxWidth={'xl'}> */}
      {/* <Box sx={{ padding: 3 }}> */}
      {children}
      {/* </Box> */}
      {/* </Container> */}

      <Footer />
    </>
  )
}

export { MainLayout }
