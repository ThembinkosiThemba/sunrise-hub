import { Card, CardContent } from "@/components/ui/card"
import { Coins, Search, Heart } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl font-bold text-foreground lg:text-6xl">Sunrise Personal</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Discover local businesses, earn rewards, and support your community
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Discover</h3>
                <p className="mt-2 text-sm text-muted-foreground">Find verified local businesses and services</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <Coins className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Earn Points</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get rewarded for every purchase and engagement</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Support Local</h3>
                <p className="mt-2 text-sm text-muted-foreground">Help local businesses thrive in your community</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/merchants">Browse Merchants</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/points">View My Points</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
