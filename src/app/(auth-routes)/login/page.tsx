'use client'
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import GoogleIcon from '@mui/icons-material/Google'
import Image from 'next/image'
import { LoginForm } from '@/components/loginForm'
import { LoginRequest } from '@/core/definition/types/auth'
import {
  AuthEndpoints,
  useLoginMutation,
} from '@/core/libraries/redux/auth/authApi'
import { useRouter } from 'next/navigation'

export default function Login() {
  const theme = useTheme()
  const [loginUser] = useLoginMutation()
  const { push } = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) // Detect mobile screens
  const handleLoginSubmit = (data: LoginRequest) => {
    loginUser(data).then(() => {
      push('/dashboard')
    })
  }
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      {!isMobile && (
        <Grid size={{ md: 8 }}>
          <Box
            sx={{
              minHeight: '100vh',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '80px',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              mb={2}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              سلام، خوش آمدید
            </Typography>
            <Image
              src="https://www.jobs-kit.com/assets/illustrations/illustration_dashboard.png"
              alt="Illustration"
              width={500}
              height={400}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      )}
      {/* //ch */}
      {/* Left Side (Login Form) */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '160px 64px 0px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="white" mb={1}>
              ورود به جابزکیت
            </Typography>
            <Typography variant="h6" color="white" sx={{ mb: '40px' }}>
              کاربر جدید؟{' '}
              <Link
                href="/signup"
                variant="body1"
                sx={{
                  color: theme.palette.info.main,
                  textDecoration: 'none',
                }}
              >
                ایجاد حساب کاربری
              </Link>
            </Typography>
          </Box>
          {/* //ch */}
          {/* Input Fields */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <LoginForm onSubmit={handleLoginSubmit} />
          </Box>
        </Box>
      </Grid>
      {/* //ch */}
      {/* Right Side (Illustration for Desktop) */}
    </Grid>
  )
}
