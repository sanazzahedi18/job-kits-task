'use client'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useScrollTrigger,
  CssBaseline,
  Container,
} from '@mui/material'
import Image from 'next/image'
import { navbarItems } from '../core/constant/navbar'
import { Navlink } from './Navlink'
import React from 'react'
import { usePathname } from 'next/navigation'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Link from 'next/link'
interface Props {
  // ch
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  userToken: string | undefined
  window?: () => Window
  children?: React.ReactElement<{ elevation?: number }>
}

function ElevationScroll(props: Props) {
  const { children, window } = props
  // ch

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null
}
const Navbar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const pathname = usePathname()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: 'rgba(22, 28, 36, 0.8)',
            backdropFilter: 'blur(6px)',
            boxShadow: 'none',
          }}
        >
          <Container maxWidth={'lg'}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'right', gap: 8 }}>
              <Image
                src="https://www.jobs-kit.com/logo/logo_full_200.webp"
                height={25}
                width={100}
                alt="website logo"
              />

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {navbarItems.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: 'center' }}>
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  gap: 5,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {navbarItems.map((item, index) => (
                  <Navlink
                    key={index}
                    href={item.href}
                    title={item.title}
                    isActive={pathname === item.href}
                  />
                ))}
              </Box>
              <Box>
                {props.userToken ? (
                  <Link href={'/dashboard'}>
                    <Button variant={'contained'}>داشبورد</Button>
                  </Link>
                ) : (
                  <Link href={'/login'}>
                    <Button variant={'outlined'}>ورود</Button>
                  </Link>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}

export { Navbar }
