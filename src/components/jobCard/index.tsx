import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Box,
  Divider,
  Grid2,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import WorkIcon from '@mui/icons-material/Work'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CategoryIcon from '@mui/icons-material/Category'
import Groups2Icon from '@mui/icons-material/Groups2'
import InterestsIcon from '@mui/icons-material/Interests'

interface JobCardProps {
  companyLogo: string
  title: string
  company: string
  postedDate: string
  location: string
  isRemote: boolean
  workType: string
  department: string
  subDepartment: string
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  title,
  company,
  postedDate,
  location,
  isRemote,
  workType,
  department,
  subDepartment,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: 'success.dark',
        padding: '0px 24px 16px',
        borderRadius: 2,
        maxWidth: 400,
        height: '100%',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
      }}
    >
      <CardContent>
        {/* //ch */}
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton
            // size="small"
            sx={{ color: 'success.main', alignSelf: 'flex-start' }}
          >
            <ShareIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'flex-end',
              // padding: '0px 24px 16px',
            }}
          >
            <Avatar
              variant="rounded"
              src={companyLogo}
              alt={company}
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#2A2F3A',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ mb: 0.5, direction: 'ltr' }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'info.main',

                  mb: 0.5,
                }}
              >
                {company}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'secondary.light' }}>
                Posted date: {postedDate}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 2,
            backgroundColor: 'info.light',
            borderStyle: 'dashed',
            borderWidth: '0px 0px thin',
            flexShrink: '0',
          }}
        />
        {/* //ch */}
        {/* Job Details Grid */}
        <Grid2
          container
          spacing={2}
          sx={{ color: 'primary.light', direction: 'ltr' }}
        >
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WorkIcon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">Remote</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Groups2Icon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">Not Specified</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeFilledIcon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">{workType}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BusinessCenterIcon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">{location}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CategoryIcon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">{department}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InterestsIcon sx={{ fontSize: '16px' }} />
              <Typography variant="subtitle2">{subDepartment}</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default JobCard
