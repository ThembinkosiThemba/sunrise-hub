import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MerchantProfileHeader } from "@/components/merchant-profile-header";
import { MerchantServices } from "@/components/merchant-services";
import { MerchantPayment } from "@/components/merchant-payment";
import { MerchantPromotions } from "@/components/merchant-promotions";
import { mockMerchants } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";

interface MerchantPageProps {
  params: {
    id: string;
  };
}

export default function MerchantPage({ params }: MerchantPageProps) {
  const merchant = mockMerchants.find((m) => m.merchant_id === params.id);

  if (!merchant) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />

      {/* Merchant Profile */}
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="bg-surface text-brand grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger
              className="text-brand data-[state=active]:bg-slate-600"
              value="profile"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              className="text-brand data-[state=active]:bg-slate-600"
              value="services"
            >
              Services
            </TabsTrigger>
            <TabsTrigger
              className="text-brand data-[state=active]:bg-slate-600"
              value="payment"
            >
              Payment
            </TabsTrigger>
            <TabsTrigger
              className="text-brand data-[state=active]:bg-slate-600"
              value="promotions"
            >
              Promotions
            </TabsTrigger>
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
  );
}
