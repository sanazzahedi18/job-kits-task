'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  Grid2,
} from '@mui/material'
import { Category, Search } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FilterListIcon from '@mui/icons-material/FilterList'

const JobSearch: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [jobs, setJobs] = React.useState<{ title: string; category: string }[]>(
    []
  )
  const [title, setTitle] = React.useState('')
  const [category, setCategory] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddJob = () => {
    if (title && category) {
      setJobs([...jobs, { title, category }])
      setTitle('')
      setCategory('')
      handleClose()
    }
  }
  return (
    <>
      <Box
        sx={{
          marginBottom: '40px',
        }}
      >
        <Container
          maxWidth={'xl'}
          sx={{
            backgroundColor: 'secondary.dark',
            py: '40px',
            minHeight: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '64px',
          }}
        >
          <Typography variant="h1" color="white" gutterBottom>
            مسیر موفقیت شغلی از اینجا آغاز می‌شود
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: 'info.light' }}>
            جست و جوی فرصت‌های شغلی
          </Typography>
        </Container>

        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'success.dark',
            gap: '24px',
            paddingX: '56px',
            minHeight: '64px',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Category
              sx={{
                fontSize: '20px',
              }}
            />
            <Typography variant="h2">دسته بندی ها</Typography>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: '16px',
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                gap: '4px',
              }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: '20px',
                }}
              />
              <Typography variant="h2">لیست کشور ها</Typography>
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: '16px',
                }}
              />
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  left: '600px',
                  maxWidth: '900px',
                  maxHeight: 'calc(100% - 32px)',
                }}
              >
                <Grid2 container columns={3}>
                  <Grid2 sx={{ minHeight: '100px', width: '200px' }}>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                  </Grid2>
                  <Grid2 sx={{ minHeight: '100px', width: '200px' }}></Grid2>
                  <Grid2 sx={{ minHeight: '100px', width: '200px' }}></Grid2>
                  <Grid2 sx={{ minHeight: '100px', width: '200px' }}></Grid2>
                </Grid2>
              </Paper>
            </Box>
          </Box>
          <Button variant="outlined" onClick={handleClickOpen}>
            <Typography color="white">اضافه کردن آگهی</Typography>
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              sx={{ backgroundColor: 'success.dark', color: 'white' }}
            >
              اضافه کردن آگهی جدید
            </DialogTitle>
            <DialogContent
              sx={{ backgroundColor: 'success.dark', color: 'white' }}
            >
              <FormControl fullWidth margin="dense">
                <TextField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  sx={{
                    input: {
                      color: 'white', // Change the color of the input value
                    },
                  }}
                />
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                sx={{ backgroundColor: 'success.dark', color: 'white' }}
              >
                <InputLabel
                  sx={{ backgroundColor: 'success.dark', color: 'white' }}
                >
                  Category
                </InputLabel>
                <Select
                  sx={{ backgroundColor: 'success.dark', color: 'white' }}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Development & IT'}
                  >
                    Development & IT
                  </MenuItem>
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Sales & Marketing'}
                  >
                    Sales & Marketing
                  </MenuItem>
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Design & Creative'}
                  >
                    Design & Creative
                  </MenuItem>
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Healthcare & Medicine'}
                  >
                    Healthcare & Medicine
                  </MenuItem>
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Human Resources'}
                  >
                    Human Resources
                  </MenuItem>
                  <MenuItem
                    sx={{ backgroundColor: 'success.dark', color: 'white' }}
                    value={'Education & Training'}
                  >
                    Education & Training
                  </MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions
              sx={{ backgroundColor: 'success.dark', color: 'white' }}
            >
              <Button sx={{ color: 'white' }} onClick={handleClose}>
                لغو
              </Button>
              <Button
                sx={{ color: 'white' }}
                onClick={handleAddJob}
                color="primary"
              >
                ثبت
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        <Container
          maxWidth="sm"
          sx={{ display: 'flex', marginTop: '64px', marginBottom: '32px' }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="جستجو برای شغل , کلمه کلیدی و ..."
            sx={{
              marginRight: '1rem',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'info.light',
                  transition: 'border-color 0.3s',
                }, // Default gray
                '&:hover fieldset': { borderColor: 'lightgray' }, // Lighter gray on hover
                '&.Mui-focused fieldset': { borderColor: 'white' }, // White when clicked (focused)
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'info.light',
                opacity: 1,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: 'info.light',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'lightgray' }, // Lighter gray on hover
                      '.Mui-focused &': { color: 'white' }, // White when clicked
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Container>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginX: '56px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '1px', alignItems: 'center' }}>
            <Typography variant="h3" color="white">
              139332
            </Typography>
            <Typography variant="h6" color="info.light">
              نتیجه یافت شد
            </Typography>
          </Box>
          <Box
            color="white"
            sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}
          >
            <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
              <Typography variant="h6">فیلتر</Typography>
              <FilterListIcon sx={{ fontSize: '20px' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
              <Typography variant="h6">مرتب سازی بر اساس جدیدترین</Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export { JobSearch }
