// Mock data for development and demonstration
import type { Merchant, CustomerPointsSummary } from "./types";

export const INDUSTRIES = [
  "Personal Care",
  "Retail",
  "Technology",
  "Food & Beverage",
  "Professional Services",
  "Construction",
  "Agriculture",
  "Education",
  "Healthcare",
  "Transportation",
];

export const mockMerchants: Merchant[] = [
  {
    merchant_id: "KYC-00012345",
    display_name: "Nokuthula Beauty Studio",
    logo_url: "/beauty-salon-logo.png",
    short_bio:
      "Affordable hair styling and braids in Manzini. Mobile appointments available.",
    industry: "Personal Care",
    sub_industry: "Hairdressing",
    contacts: {
      phone: "+268-7612-3456",
      whatsapp: "+268-7612-3456",
      email: "nokuthula@example.com",
      social_media: {
        facebook: "facebook.com/nokuthulabeauty",
        instagram: "@nokuthula_beauty",
      },
    },
    branches: [
      {
        name: "Main",
        address: "Market Road, Manzini",
        gps: null,
        phone: "+268-7612-3456",
        is_main: true,
      },
    ],
    verification_status: "VERIFIED_INFORMAL",
    verification_details: {
      umpakatsi: "Manzini Central",
      verified_by: "Indvuna John Dlamini",
      verified_date: "2025-09-05",
    },
    services_count: 6,
    profile_score: 78,
    created_at: "2025-09-01T12:00:00Z",
  },
  {
    merchant_id: "KYC-00012346",
    display_name: "Swaziland Crafts Co.",
    logo_url: "/crafts-shop-logo.jpg",
    short_bio:
      "Authentic handmade Swazi crafts and traditional artwork. Supporting local artisans.",
    industry: "Retail",
    sub_industry: "Arts & Crafts",
    contacts: {
      phone: "+268-7623-4567",
      whatsapp: "+268-7623-4567",
      email: "info@swazilandcrafts.sz",
      website: "https://swazilandcrafts.sz",
    },
    branches: [
      {
        name: "Mbabane Store",
        address: "Swazi Plaza, Mbabane",
        gps: { lat: -26.3054, lng: 31.1367 },
        phone: "+268-7623-4567",
        is_main: true,
      },
      {
        name: "Ezulwini Branch",
        address: "Ezulwini Valley",
        gps: { lat: -26.45, lng: 31.2 },
        phone: "+268-7623-4568",
        is_main: false,
      },
    ],
    verification_status: "VERIFIED_FORMAL",
    services_count: 12,
    profile_score: 92,
    created_at: "2025-08-15T10:00:00Z",
  },
  {
    merchant_id: "KYC-00012347",
    display_name: "TechFix Eswatini",
    logo_url: "/tech-repair-logo.png",
    short_bio:
      "Professional phone and laptop repair services. Same-day service available.",
    industry: "Technology",
    sub_industry: "Repair Services",
    contacts: {
      phone: "+268-7634-5678",
      whatsapp: "+268-7634-5678",
      email: "support@techfix.sz",
    },
    branches: [
      {
        name: "Main Workshop",
        address: "Industrial Site, Matsapha",
        gps: null,
        phone: "+268-7634-5678",
        is_main: true,
      },
    ],
    verification_status: "VERIFIED_FORMAL",
    services_count: 8,
    profile_score: 85,
    created_at: "2025-07-20T14:30:00Z",
  },
  {
    merchant_id: "KYC-00012348",
    display_name: "Mama's Kitchen",
    logo_url: "/restaurant-logo.png",
    short_bio:
      "Traditional Swazi cuisine and catering services. Home-cooked meals daily.",
    industry: "Food & Beverage",
    sub_industry: "Restaurant",
    contacts: {
      phone: "+268-7645-6789",
      whatsapp: "+268-7645-6789",
      email: "mamaskitchen@example.com",
    },
    branches: [
      {
        name: "Main",
        address: "Ngwane Street, Manzini",
        gps: null,
        phone: "+268-7645-6789",
        is_main: true,
      },
    ],
    verification_status: "VERIFIED_INFORMAL",
    verification_details: {
      umpakatsi: "Manzini West",
      verified_by: "Community Leader Sarah Nkosi",
      verified_date: "2025-08-10",
    },
    services_count: 10,
    profile_score: 81,
    created_at: "2025-08-01T09:00:00Z",
  },
];

export const mockCustomerPoints: CustomerPointsSummary = {
  total_points: 1200,
  recent_activities: [
    {
      id: "1",
      customer_id: "CUST-001",
      merchant_id: "KYC-00012345",
      points: 50,
      activity_type: "VOUCHER_REDEMPTION",
      activity_description: "Redeemed voucher at Nokuthula Beauty Studio",
      created_at: "2025-10-01T14:30:00Z",
    },
    {
      id: "2",
      customer_id: "CUST-001",
      merchant_id: "KYC-00012348",
      points: 100,
      activity_type: "PURCHASE",
      activity_description: "Purchase at Mama's Kitchen",
      created_at: "2025-09-28T12:15:00Z",
    },
    {
      id: "3",
      customer_id: "CUST-001",
      merchant_id: "KYC-00012346",
      points: 75,
      activity_type: "VOUCHER_REDEMPTION",
      activity_description: "Redeemed voucher at Swaziland Crafts Co.",
      created_at: "2025-09-25T16:45:00Z",
    },
  ],
};

export const mockServices = [
  {
    serviceId: "SVC-001",
    merchantId: "KYC-00012345",
    name: "Box Braids - Medium Length",
    description:
      "Beautiful box braids for medium length hair. Includes hair extensions and styling.",
    pricing: "E350 - E450",
    images: ["/box-braids-hairstyle.png", "/box-braids-side-view.jpg"],
    variants: [
      { name: "Small", price: 450 },
      { name: "Medium", price: 400 },
      { name: "Large", price: 350 },
    ],
  },
  {
    serviceId: "SVC-002",
    merchantId: "KYC-00012345",
    name: "Cornrows Styling",
    description:
      "Traditional cornrows with creative patterns. Perfect for any occasion.",
    pricing: "E200 - E300",
    images: ["/cornrows-hairstyle.jpg"],
    variants: [
      { name: "Simple Pattern", price: 200 },
      { name: "Complex Pattern", price: 300 },
    ],
  },
];

export const mockTransactions = [
  {
    transactionRef: "TXN-2025-001",
    merchantId: "KYC-00012345",
    customerId: "CUST-001",
    amount: 350,
    transactionType: "DIRECT_PAYMENT",
    status: "completed",
    createdAt: "2025-10-01T14:30:00Z",
  },
  {
    transactionRef: "TXN-2025-002",
    merchantId: "KYC-00012345",
    customerId: "CUST-002",
    amount: 200,
    transactionType: "VOUCHER_REDEMPTION",
    status: "completed",
    createdAt: "2025-09-28T12:15:00Z",
  },
  {
    transactionRef: "TXN-2025-003",
    merchantId: "KYC-00012345",
    customerId: "CUST-003",
    amount: 450,
    transactionType: "DIRECT_PAYMENT",
    status: "pending",
    createdAt: "2025-09-25T16:45:00Z",
  },
];

export const mockPointsActivities = [
  {
    id: "PA-001",
    merchantId: "KYC-00012345",
    customerId: "CUST-001",
    points: 50,
    activityType: "PURCHASE",
    description: "Earned points from purchase",
    createdAt: "2025-10-01T14:30:00Z",
  },
  {
    id: "PA-002",
    merchantId: "KYC-00012345",
    customerId: "CUST-002",
    points: 30,
    activityType: "VOUCHER_REDEMPTION",
    description: "Earned points from voucher redemption",
    createdAt: "2025-09-28T12:15:00Z",
  },
];
