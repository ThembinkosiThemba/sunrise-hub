"use server"

import type { SunrisePoints } from "@/lib/types"

export async function addPoints(data: {
  customerId: string
  merchantId: string
  points: number
  activityType: string
  activityDescription: string
}) {
  // Simulate database operation
  await new Promise((resolve) => setTimeout(resolve, 500))

  const pointsRecord: SunrisePoints = {
    id: `PTS-${Date.now()}`,
    customer_id: data.customerId,
    merchant_id: data.merchantId,
    points: data.points,
    activity_type: data.activityType,
    activity_description: data.activityDescription,
    created_at: new Date().toISOString(),
  }

  return {
    success: true,
    pointsRecord,
    message: `${data.points} points added successfully`,
  }
}

export async function getCustomerPoints(customerId: string) {
  // Simulate database query
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock data - in production, fetch from database
  return {
    total_points: 1200,
    recent_activities: [
      {
        id: "1",
        customer_id: customerId,
        merchant_id: "KYC-00012345",
        points: 50,
        activity_type: "VOUCHER_REDEMPTION",
        activity_description: "Redeemed voucher at Nokuthula Beauty Studio",
        created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        customer_id: customerId,
        merchant_id: "KYC-00012348",
        points: 100,
        activity_type: "PURCHASE",
        activity_description: "Purchase at Mama's Kitchen",
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
  }
}

export async function likeMerchant(customerId: string, merchantId: string) {
  // Simulate database operation
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Award points for liking
  const pointsEarned = 10

  await addPoints({
    customerId,
    merchantId,
    points: pointsEarned,
    activityType: "ENGAGEMENT",
    activityDescription: "Liked merchant profile",
  })

  return {
    success: true,
    pointsEarned,
    message: `You earned ${pointsEarned} points for liking this business!`,
  }
}
