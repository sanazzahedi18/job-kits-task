'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Grid2,
  Skeleton,
  Box,
} from '@mui/material'
import { job } from '@/core/definition/types/jobs'
import { useSearchParams } from 'next/navigation'
import JobCard from '@/components/jobCard'
import { getValidAuthTokens } from '@/core/libraries/cookie'

interface JobsListProps {
  searchParams: any
}
const JobsList: React.FC<JobsListProps> = ({ searchParams }) => {
  const [data, setData] = useState<job[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const { token } = getValidAuthTokens()

  const fetchData = async (pageNum: number) => {
    const pageLimit = 9
    const order = 'DESC'
    const orderBy = 'datePosted'

    setLoading(true)
    try {
      const response = await fetch(
        `https://jobs-kit.com/api/job/all${
          token ? '/detailed' : ''
        }?page=${pageNum}&limit=${pageLimit}&order=${order}&orderBy=${orderBy}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const newData: job[] = (await response.json()).data
      if (newData && newData.length > 0)
        setData((prev) => [...prev, ...newData]) // Append new data
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load initial data
  useEffect(() => {
    fetchData(page)
  }, [page])

  const lastElementObserver = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return
      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver((entries) => {
        console.log('en', entries)

        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1)
        }
      })

      if (node) observerRef.current.observe(node)
    },
    [loading]
  )

  return (
    <div>
      <Grid2 container columns={6} spacing={3} sx={{paddingX:'40px'}}>
        {loading &&
          Array.from(new Array(9)).map((_, index) => (
            <Grid2 key={index} size={{ xs: 6, md: 3, lg: 2 }}>
              <Card
                sx={{
                  backgroundColor: 'success.light',
                  padding: '0px 24px 16px',
                  maxWidth: 400,
                  height: '100%',
                }}
              >
                <CardContent>
                  <Skeleton variant="rectangular" height={150} />
                </CardContent>
                <CardHeader
                  avatar={
                    <Box sx={{display:'flex', gap:'2px'}} >
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton variant="circular" width={40} height={40} />
                    </Box>
                  }
                  title={<Skeleton width="80%" />}
                  subheader={<Skeleton width="60%" />}
                />
              </Card>
            </Grid2>
          ))}

        {data.map((item, index) => (
          <Grid2 key={index} size={{ xs: 6, md: 3, lg: 2 }}>
            <JobCard
              companyLogo={item.company.imageURL}
              title={item.title}
              company={item.category.name}
              postedDate={item.datePosted}
              location={item.country}
              isRemote={item.jobType === 'REMOTE'}
              workType={item.jobType}
              department="Human Resources"
              subDepartment="HR Management"
            />
          </Grid2>
        ))}
      </Grid2>

      <div
        ref={lastElementObserver}
        style={{ height: 20, background: 'transparent' }}
      />

      {loading && <CircularProgress />}
    </div>
  )
}

export { JobsList }
