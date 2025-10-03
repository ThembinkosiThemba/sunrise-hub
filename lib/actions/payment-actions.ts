"use server"

import type { Transaction, Voucher } from "@/lib/types"

// Mock payment processing - in production, integrate with actual payment gateway
export async function processDirectPayment(data: {
  merchantId: string
  customerId: string
  amount: number
  paymentMethod: string
}) {
  // Simulate payment processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate transaction
  const transaction: Transaction = {
    id: `TXN-${Date.now()}`,
    transaction_ref: `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    customer_id: data.customerId,
    merchant_id: data.merchantId,
    amount: data.amount,
    transaction_type: "DIRECT_PAY",
    status: "COMPLETED",
    created_at: new Date().toISOString(),
  }

  // Calculate points earned (10% of amount)
  const pointsEarned = Math.floor(data.amount * 0.1)

  return {
    success: true,
    transaction,
    pointsEarned,
    message: "Payment processed successfully",
  }
}

export async function createGiftVoucher(data: {
  merchantId: string
  customerId: string
  amount: number
  recipientName: string
  recipientEmail: string
  message?: string
  paymentMethod: string
}) {
  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate transaction
  const transaction: Transaction = {
    id: `TXN-${Date.now()}`,
    transaction_ref: `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    customer_id: data.customerId,
    merchant_id: data.merchantId,
    amount: data.amount,
    transaction_type: "GIFT_VOUCHER",
    status: "COMPLETED",
    created_at: new Date().toISOString(),
  }

  // Generate voucher
  const voucher: Voucher = {
    id: `VCH-${Date.now()}`,
    voucher_code: `GIFT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    transaction_id: transaction.id,
    merchant_id: data.merchantId,
    amount: data.amount,
    voucher_type: "GIFT",
    redeemed: false,
    expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
  }

  return {
    success: true,
    transaction,
    voucher,
    message: "Gift voucher created successfully",
  }
}

export async function createLockedVoucher(data: {
  merchantId: string
  customerId: string
  amount: number
  conditions: string
  expiryDate: string
  paymentMethod: string
}) {
  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate transaction
  const transaction: Transaction = {
    id: `TXN-${Date.now()}`,
    transaction_ref: `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    customer_id: data.customerId,
    merchant_id: data.merchantId,
    amount: data.amount,
    transaction_type: "LOCKED_VOUCHER",
    status: "COMPLETED",
    created_at: new Date().toISOString(),
  }

  // Generate voucher
  const voucher: Voucher = {
    id: `VCH-${Date.now()}`,
    voucher_code: `LOCK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    transaction_id: transaction.id,
    merchant_id: data.merchantId,
    amount: data.amount,
    voucher_type: "LOCKED",
    conditions: { description: data.conditions },
    redeemed: false,
    expires_at: data.expiryDate,
  }

  return {
    success: true,
    transaction,
    voucher,
    message: "Locked voucher created successfully",
  }
}

export async function redeemVoucher(voucherCode: string, customerId: string) {
  // Simulate voucher lookup and redemption
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock voucher validation
  if (!voucherCode || voucherCode.length < 8) {
    return {
      success: false,
      message: "Invalid voucher code",
    }
  }

  // Simulate successful redemption
  const pointsEarned = Math.floor(Math.random() * 100) + 50 // 50-150 points

  return {
    success: true,
    pointsEarned,
    message: `Voucher redeemed successfully! You earned ${pointsEarned} Sunrise Points.`,
  }
}
