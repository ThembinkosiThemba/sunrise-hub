import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, Gift, TrendingUp, Award, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { mockCustomerPoints } from "@/lib/mock-data"
import { Header } from "@/components/header"

export default function PointsPage() {
  const pointsData = mockCustomerPoints

  // Calculate points breakdown
  const pointsByType = pointsData.recent_activities.reduce(
    (acc, activity) => {
      acc[activity.activity_type] = (acc[activity.activity_type] || 0) + activity.points
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Coins className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-foreground lg:text-6xl">Sunrise Points</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Earn rewards with every transaction and engagement on Sunrise Hub
            </p>

            {/* Points Balance */}
            <Card className="mx-auto mt-8 max-w-md border-2 border-primary/20 bg-card">
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground">Your Total Balance</p>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <Coins className="h-8 w-8 text-primary" />
                  <span className="font-serif text-6xl font-bold text-primary">{pointsData.total_points}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Sunrise Points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Earn Points */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-4xl font-bold text-foreground">How to Earn Points</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Multiple ways to accumulate Sunrise Points and unlock rewards
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Make Purchases</h3>
                <p className="mt-2 text-sm text-muted-foreground">Earn 10% of your purchase amount in points</p>
                <Badge className="mt-4 bg-primary/10 text-primary">10% Back</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <Gift className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Redeem Vouchers</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get points when you redeem gift vouchers</p>
                <Badge className="mt-4 bg-accent/10 text-accent">50-150 Points</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Engage with Merchants</h3>
                <p className="mt-2 text-sm text-muted-foreground">Like businesses and send messages</p>
                <Badge className="mt-4 bg-secondary/10 text-secondary">10 Points</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Special Promotions</h3>
                <p className="mt-2 text-sm text-muted-foreground">Bonus points from merchant campaigns</p>
                <Badge className="mt-4 bg-primary/10 text-primary">Varies</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground">Recent Activity</h2>
            <p className="mt-2 text-muted-foreground">Your latest points transactions</p>

            <div className="mt-8 space-y-4">
              {pointsData.recent_activities.map((activity) => (
                <Card key={activity.id} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{activity.activity_type.replace("_", " ")}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(activity.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <p className="mt-2 font-medium text-foreground">{activity.activity_description}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                        <Coins className="h-5 w-5 text-primary" />
                        <span className="font-serif text-xl font-bold text-primary">+{activity.points}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Activity
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Points Breakdown */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground">Points Breakdown</h2>
          <p className="mt-2 text-muted-foreground">See where your points come from</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {Object.entries(pointsByType).map(([type, points]) => (
              <Card key={type} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{type.replace("_", " ")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Coins className="h-6 w-6 text-primary" />
                    <span className="font-serif text-3xl font-bold text-primary">{points}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {((points / pointsData.total_points) * 100).toFixed(1)}% of total
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redeem Points CTA */}
      <section className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold">Ready to Use Your Points?</h2>
            <p className="mt-4 text-lg opacity-90">Redeem your Sunrise Points for exclusive rewards and discounts</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-2 bg-card text-card-foreground hover:bg-card/90">
                Browse Rewards
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-secondary-foreground/20 bg-transparent hover:bg-secondary-foreground/10"
                asChild
              >
                <Link href="/merchants">Find Merchants</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
