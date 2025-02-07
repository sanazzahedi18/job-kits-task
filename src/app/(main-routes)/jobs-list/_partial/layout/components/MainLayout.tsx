import React from 'react'
import { Footer } from './Footer'
import { MainLayoutProps } from '../core/types/interfaces'
import { Navbar } from './Navbar'
import { Box, Container } from '@mui/material'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <Container maxWidth={'xl'}>
        <Box sx={{ padding: 3 }}>{children}</Box>
      </Container>

      <Footer />
    </>
  )
}

export { MainLayout }
