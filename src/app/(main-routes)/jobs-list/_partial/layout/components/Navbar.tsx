'use client'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Image from 'next/image'
import { navbarItems } from '../core/constant/navbar'
import { Navlink } from './Navlink'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(22, 28, 36, 0.8)',
        backdropFilter: 'blur(6px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image
          src="https://www.jobs-kit.com/logo/logo_full_200.webp"
          height={25}
          width={100}
          alt="website logo"
        />
        {/* //ch */}
        {/* Right Side - Navigation Links */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navbarItems.map((item, index) => (
            <Navlink
              key={index}
              href={item.href}
              title={item.title}
              isActive={pathname === item.href}
            />
          ))}
        </Box>
        {/* //ch */}
        {/* Left Side - Login Button */}
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: 'currentColor',
              borderRadius: '8px',
              borderColor: '#919eab',
              '&:hover': { borderColor: '#fff' },
            }}
          >
            ورود
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export { Navbar }
