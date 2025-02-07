import { Controller } from 'react-hook-form'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import React from 'react'

type FormTextFieldProps = {
  name: string
  control: any
} & TextFieldProps
const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          {...rest}
          sx={{ direction: 'rtl' }}
        />
      )}
    />
  )
}
export { FormTextField }
