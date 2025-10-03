import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, BarChart3, Shield } from "lucide-react";
import { Header } from "@/components/header";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl font-bold text-brand lg:text-6xl">
            Sunrise Enterprise
          </h1>
          <p className="mt-6 text-xl text-description">
            Business solutions and partnerships for organizations in Eswatini
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand">
                  Corporate Accounts
                </h3>
                <p className="mt-2 text-sm text-description">
                  Manage multiple business profiles
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand">
                  Team Management
                </h3>
                <p className="mt-2 text-sm text-description">
                  Collaborate with your team
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <BarChart3 className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand">
                  Analytics
                </h3>
                <p className="mt-2 text-sm text-description">
                  Advanced insights and reporting
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand">
                  Priority Support
                </h3>
                <p className="mt-2 text-sm text-description">
                  Dedicated account manager
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Contact Sales</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
