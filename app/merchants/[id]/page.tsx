import { notFound } from "next/navigation"
import { SunriseLogo } from "@/components/sunrise-logo"
import { Button } from "@/components/ui/button"
import { MerchantProfileHeader } from "@/components/merchant-profile-header"
import { MerchantServices } from "@/components/merchant-services"
import { MerchantPayment } from "@/components/merchant-payment"
import { MerchantPromotions } from "@/components/merchant-promotions"
import { mockMerchants } from "@/lib/mock-data"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MerchantPageProps {
  params: {
    id: string
  }
}

export default function MerchantPage({ params }: MerchantPageProps) {
  const merchant = mockMerchants.find((m) => m.merchant_id === params.id)

  if (!merchant) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <SunriseLogo className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">SUNRISE HUB</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/merchants">Back to Merchants</Link>
            </Button>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Merchant Profile */}
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <MerchantProfileHeader merchant={merchant} />
          </TabsContent>

          <TabsContent value="services">
            <MerchantServices merchant={merchant} />
          </TabsContent>

          <TabsContent value="payment">
            <MerchantPayment merchant={merchant} />
          </TabsContent>

          <TabsContent value="promotions">
            <MerchantPromotions merchant={merchant} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
