import { ReactNode } from 'react'

export interface MainLayoutProps {
  children: ReactNode
}
export interface NavlinkProps {
  title: string
  href: string
  isActive: boolean
}
