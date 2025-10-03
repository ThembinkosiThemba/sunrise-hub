// Core merchant and service types for Sunrise Hub

export type VerificationStatus = "VERIFIED_FORMAL" | "VERIFIED_INFORMAL" | "PENDING"

export interface MerchantContacts {
  phone: string
  whatsapp: string
  email: string
  website?: string
  app_download_url?: string
  social_media?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface Branch {
  id?: string
  name: string
  address: string
  gps?: {
    lat: number
    lng: number
  } | null
  phone: string
  is_main?: boolean
}

export interface VerificationDetails {
  umpakatsi?: string
  verified_by?: string
  verified_date?: string
}

export interface Service {
  id: string
  service_name: string
  description: string
  pricing: string
  images: string[]
  variants?: string[]
  display_order: number
  is_active: boolean
}

export interface Merchant {
  merchant_id: string
  display_name: string
  logo_url: string
  short_bio: string
  industry: string
  sub_industry: string
  contacts: MerchantContacts
  branches: Branch[]
  verification_status: VerificationStatus
  verification_details?: VerificationDetails
  services_count: number
  services?: Service[]
  administrators?: Administrator[]
  profile_score: number
  created_at: string
  updated_at?: string
  kyc_last_synced?: string
}

export interface Administrator {
  id?: string
  name: string
  role: "OWNER" | "ADMIN" | "CONTACT_PERSON"
  contact: string
}

export interface Transaction {
  id: string
  transaction_ref: string
  customer_id: string
  merchant_id: string
  amount: number
  transaction_type: "DIRECT_PAY" | "GIFT_VOUCHER" | "LOCKED_VOUCHER"
  status: string
  created_at: string
}

export interface Voucher {
  id: string
  voucher_code: string
  transaction_id: string
  merchant_id: string
  amount: number
  voucher_type: "GIFT" | "LOCKED"
  conditions?: Record<string, any>
  redeemed: boolean
  redeemed_at?: string
  expires_at: string
}

export interface SunrisePoints {
  id: string
  customer_id: string
  merchant_id: string
  points: number
  activity_type: string
  activity_description: string
  created_at: string
}

export interface CustomerPointsSummary {
  total_points: number
  recent_activities: SunrisePoints[]
}

// Industry categories for merchant classification
export const INDUSTRIES = [
  "Personal Care",
  "Food & Beverage",
  "Retail",
  "Professional Services",
  "Health & Wellness",
  "Education",
  "Technology",
  "Construction",
  "Transportation",
  "Entertainment",
  "Agriculture",
  "Other",
] as const

export type Industry = (typeof INDUSTRIES)[number]
