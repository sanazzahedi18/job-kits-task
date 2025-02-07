import React from 'react'
import { Button, Link, TextField, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/core/libraries/yup/validation'
import { FormTextField } from '../formTextfield'
import { LoginRequest } from '@/core/definition/types/auth'

interface loginFormProps {
  onSubmit: (data: LoginRequest) => void
}
const LoginForm: React.FC<loginFormProps> = ({ onSubmit }) => {
  const theme = useTheme()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
    shouldFocusError: true,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })
  return (
    <>
      <FormTextField
        label="ایمیل یا شماره تلفن"
        control={control}
        fullWidth
        name="identifier"
        error={Boolean(errors.identifier)}
        helperText={errors.identifier?.message}
        variant="outlined"
        color="success"
        sx={
          {
            // backgroundColor: '#1a1c1f',
            // input: { color: 'white' },
          }
        }
      />
      <FormTextField
        type="password"
        label="رمز عبور"
        control={control}
        name="password"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        fullWidth
        variant="outlined"
        color="success"
        sx={
          {
            // backgroundColor: '#1a1c1f',
            // borderRadius: 1,
          }
        }
      />
      <Link
        href="/"
        variant="h6"
        sx={{
          color: 'white',
          textDecoration: 'underline',
          direction: 'ltr',
        }}
      >
        رمز عبور را فراموش کرده اید؟
      </Link>
      {/* //ch */}
      {/* Login Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
          fontWeight: 700,
          fontSize: '15px',
          padding: '8px 16px',
          height: '48px',
        }}
      >
        ورود
      </Button>
    </>
  )
}

export { LoginForm }
