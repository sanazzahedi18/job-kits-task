export type job = {
  id: number
  title: string
  featured: boolean
  datePosted: string
  expirationDate: string
  employmentType: string
  positionLevel: string
  company: {
    id: number
    name: string
    industry: string
    description: null | string
    address: null | string
    phone: string
    email: null | string
    size: number
    imageId: number
    imageURL: string
  }
  country: string
  location: string
  category: {
    id: number
    name: string
    slug: string
    icon: null | string
  }
  subCategory: {
    id: number
    name: string
    slug: string
  }
  speciality: {
    id: number
    name: string
    slug: string
  }
  jobType: string
  views: number
  shares: number
}
