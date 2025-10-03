import { Search } from "lucide-react"
import { SunriseLogo } from "@/components/sunrise-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MerchantCard } from "@/components/merchant-card"
import { mockMerchants, INDUSTRIES } from "@/lib/mock-data"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MerchantsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <SunriseLogo className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">SUNRISE HUB</span>
          </Link>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Search Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">Find Merchants</h1>
          <p className="mt-2 text-muted-foreground">Search by merchant code, name, industry, or location</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative md:col-span-2">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search by name or merchant code..." className="h-12 pl-12" />
            </div>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Merchants Grid */}
      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing {mockMerchants.length} verified merchants</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockMerchants.map((merchant) => (
            <MerchantCard key={merchant.merchant_id} merchant={merchant} />
          ))}
        </div>
      </section>
    </div>
  )
}
