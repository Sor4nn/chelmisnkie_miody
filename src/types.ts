export interface Product {
  id: string
  name: string
  tag: string
  description: string
  weight: string
  price: string
  image: string
}

export interface NavItem {
  href: string
  label: string
}

export interface ProcessStep {
  icon: string
  title: string
  text: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FormValues {
  name: string
  email: string
  message: string
  website: string
}

export type FormStatusType = 'success' | 'error' | null

export interface FormStatus {
  type: FormStatusType
  message: string
}
