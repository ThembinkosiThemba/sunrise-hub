"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Gift, Lock, Wallet, Loader2, CheckCircle2 } from "lucide-react"
import { processDirectPayment, createGiftVoucher, createLockedVoucher } from "@/lib/actions/payment-actions"
import { useToast } from "@/hooks/use-toast"
import type { Merchant } from "@/lib/types"

interface MerchantPaymentProps {
  merchant: Merchant
}

export function MerchantPayment({ merchant }: MerchantPaymentProps) {
  const [paymentType, setPaymentType] = useState<"direct" | "gift" | "locked">("direct")
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [voucherCode, setVoucherCode] = useState("")
  const { toast } = useToast()

  // Form fields for gift voucher
  const [recipientName, setRecipientName] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [giftMessage, setGiftMessage] = useState("")

  // Form fields for locked voucher
  const [conditions, setConditions] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  const [paymentMethod, setPaymentMethod] = useState("mobile-money")

  const handlePayment = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)
    setPaymentSuccess(false)

    try {
      const customerId = "CUST-001" // Mock customer ID

      if (paymentType === "direct") {
        const result = await processDirectPayment({
          merchantId: merchant.merchant_id,
          customerId,
          amount: Number.parseFloat(amount),
          paymentMethod,
        })

        if (result.success) {
          setPaymentSuccess(true)
          toast({
            title: "Payment Successful",
            description: `You earned ${result.pointsEarned} Sunrise Points!`,
          })
        }
      } else if (paymentType === "gift") {
        if (!recipientName || !recipientEmail) {
          toast({
            title: "Missing Information",
            description: "Please enter recipient details",
            variant: "destructive",
          })
          setIsProcessing(false)
          return
        }

        const result = await createGiftVoucher({
          merchantId: merchant.merchant_id,
          customerId,
          amount: Number.parseFloat(amount),
          recipientName,
          recipientEmail,
          message: giftMessage,
          paymentMethod,
        })

        if (result.success) {
          setPaymentSuccess(true)
          setVoucherCode(result.voucher.voucher_code)
          toast({
            title: "Gift Voucher Created",
            description: `Voucher code: ${result.voucher.voucher_code}`,
          })
        }
      } else if (paymentType === "locked") {
        if (!conditions || !expiryDate) {
          toast({
            title: "Missing Information",
            description: "Please enter voucher conditions and expiry date",
            variant: "destructive",
          })
          setIsProcessing(false)
          return
        }

        const result = await createLockedVoucher({
          merchantId: merchant.merchant_id,
          customerId,
          amount: Number.parseFloat(amount),
          conditions,
          expiryDate,
          paymentMethod,
        })

        if (result.success) {
          setPaymentSuccess(true)
          setVoucherCode(result.voucher.voucher_code)
          toast({
            title: "Locked Voucher Created",
            description: `Voucher code: ${result.voucher.voucher_code}`,
          })
        }
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "An error occurred while processing your payment",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card className="border-2 border-secondary/20 bg-secondary/5">
          <CardContent className="p-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {paymentType === "direct" ? "Payment Successful!" : "Voucher Created!"}
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              {paymentType === "direct"
                ? `Your payment of E${amount} to ${merchant.display_name} has been processed.`
                : `Your voucher has been created successfully.`}
            </p>

            {voucherCode && (
              <div className="mt-6 rounded-lg border-2 border-primary/20 bg-card p-6">
                <p className="mb-2 text-sm font-medium text-muted-foreground">Voucher Code</p>
                <p className="font-mono text-2xl font-bold text-primary">{voucherCode}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {paymentType === "gift"
                    ? "This code has been sent to the recipient's email"
                    : "Save this code to redeem your voucher"}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => {
                  setPaymentSuccess(false)
                  setAmount("")
                  setVoucherCode("")
                  setRecipientName("")
                  setRecipientEmail("")
                  setGiftMessage("")
                  setConditions("")
                  setExpiryDate("")
                }}
              >
                Make Another Payment
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`/merchants/${merchant.merchant_id}`}>Back to Profile</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground">Pay {merchant.display_name}</h2>
        <p className="mt-2 text-muted-foreground">Choose your payment method and support this business</p>
      </div>

      {/* Payment Type Selection */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Payment Type</CardTitle>
          <CardDescription>Select how you want to pay</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentType} onValueChange={(value) => setPaymentType(value as any)}>
            <div className="space-y-3">
              <label
                htmlFor="direct"
                className={`flex cursor-pointer items-start gap-4 rounded-lg border-2 p-4 transition-all ${
                  paymentType === "direct" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value="direct" id="direct" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Direct Pay</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Make an immediate payment to the merchant</p>
                </div>
              </label>

              <label
                htmlFor="gift"
                className={`flex cursor-pointer items-start gap-4 rounded-lg border-2 p-4 transition-all ${
                  paymentType === "gift" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value="gift" id="gift" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">Gift Voucher</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Create a transferable voucher for someone else</p>
                </div>
              </label>

              <label
                htmlFor="locked"
                className={`flex cursor-pointer items-start gap-4 rounded-lg border-2 p-4 transition-all ${
                  paymentType === "locked" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value="locked" id="locked" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-foreground">Locked Voucher</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Create a voucher with specific conditions or restrictions
                  </p>
                </div>
              </label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Payment Form */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Enter the payment information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (SZL)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg"
              disabled={isProcessing}
            />
          </div>

          {paymentType === "gift" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="recipient-name">Recipient Name</Label>
                <Input
                  id="recipient-name"
                  placeholder="Enter recipient's name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipient-email">Recipient Email</Label>
                <Input
                  id="recipient-email"
                  type="email"
                  placeholder="recipient@example.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Personal Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add a personal message..."
                  rows={3}
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
            </>
          )}

          {paymentType === "locked" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="conditions">Voucher Conditions</Label>
                <Textarea
                  id="conditions"
                  placeholder="Specify conditions for voucher usage (e.g., valid for specific services, minimum purchase amount)"
                  rows={4}
                  value={conditions}
                  onChange={(e) => setConditions(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  disabled={isProcessing}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} disabled={isProcessing}>
              <div className="flex items-center space-x-2 rounded-lg border border-border p-3">
                <RadioGroupItem value="mobile-money" id="mobile-money" />
                <Label htmlFor="mobile-money" className="flex flex-1 cursor-pointer items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Mobile Money
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border border-border p-3">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Credit/Debit Card
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Summary & Action */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-muted-foreground">Total Amount:</span>
              <span className="font-serif text-2xl font-bold text-primary">E {amount || "0.00"}</span>
            </div>
            {paymentType === "direct" && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Sunrise Points to Earn:</span>
                <span className="font-semibold text-secondary">
                  +{Math.floor(Number.parseFloat(amount || "0") * 0.1)} points
                </span>
              </div>
            )}
            <Button
              size="lg"
              className="w-full"
              disabled={!amount || Number.parseFloat(amount) <= 0 || isProcessing}
              onClick={handlePayment}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {paymentType === "direct" && "Complete Payment"}
                  {paymentType === "gift" && "Create Gift Voucher"}
                  {paymentType === "locked" && "Create Locked Voucher"}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
