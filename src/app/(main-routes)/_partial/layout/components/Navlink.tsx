import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { NavlinkProps } from '../core/types/interfaces'

const Navlink: React.FC<NavlinkProps> = ({ href, isActive, title }) => {
  return (
    <Link href={href} passHref>
      <Typography
        sx={{
          position: 'relative',
          right: isActive ? '5px' : '',
          color: isActive ? '#00a76f' : 'currentColor',
          cursor: 'pointer',
          ':hover': {
            opacity: '64%',
            '&::before': {
              width: '6px',
              height: '6px',
              right: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: '0.64',
              content: '""',
              position: 'absolute',
              backgroundColor: 'currentcolor',
              borderRadius: '50%',
            },
          },
          '&::before': isActive
            ? {
                width: '6px',
                height: '6px',
                right: '-12px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: '0.64',
                content: '""',
                position: 'absolute',
                backgroundColor: 'currentcolor',
                borderRadius: '50%',
              }
            : {},
        }}
      >
        {title}
      </Typography>
    </Link>
  )
}

export { Navlink }
