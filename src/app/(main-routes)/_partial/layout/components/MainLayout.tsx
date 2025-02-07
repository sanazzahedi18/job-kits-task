import React, { ReactNode } from 'react'
import { Footer } from './Footer'
import { MainLayoutProps } from '../core/types/interfaces'
import { Box, Container } from '@mui/material'
import { Navbar } from './Navbar'
import { promises } from 'dns'
import { cookies } from 'next/headers'

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
