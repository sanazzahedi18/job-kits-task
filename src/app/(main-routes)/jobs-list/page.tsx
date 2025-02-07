import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { JobSearch } from './_partial/page/components/JobHeader'
import JobCard from '@/components/jobCard'
import { cookies } from 'next/headers'
import { JobsList } from './_partial/page/components/JobList'

export default async function page() {
  const cookie = await cookies()
  console.log('cookie', cookie)

  const jobs = await fetch('https://jobs-kit.com/api/job/all')
  console.log('jobs', jobs)

  return (
    <Box sx={{ backgroundColor: 'info.dark' }}>
      <JobSearch />
      <Grid2
        container
        columns={6}
        spacing={3}
        sx={{
         
          paddingTop: '30px',
          paddingRight: '25px',
          marginTop: '-24',
        }}
      >
        <JobsList searchParams={''} />
      </Grid2>
    </Box>
  )
}
