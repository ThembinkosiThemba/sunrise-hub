"use client";

import { Search } from "lucide-react";
import { SunriseLogo } from "@/components/sunrise-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserTypeCard } from "@/components/user-type-card";
import { PointsDisplay } from "@/components/points-display";
import { mockCustomerPoints } from "@/lib/mock-data";
import { Header } from "@/components/header";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const isLoggedIn = false; // TODO: Replace with actual auth state

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/merchants?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      <Header showNavigation={true} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
            Get started with Sunrise
          </h1>
          <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
            The one-stop marketing portal for MSMEs and Professionals to bring
            their business online
          </p>

          {/* Search Bar */}
          <div className="mt-10">
            <form className="relative mx-auto max-w-2xl" onSubmit={handleSearch}>
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by business, category or location"
                className="h-14 rounded-full border-2 pl-12 pr-4 text-base shadow-sm transition-shadow focus-visible:shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* User Type Selection */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <UserTypeCard
              icon="user"
              title="Personal"
              description="Browse and discover local businesses"
              href="/personal"
            />
            <UserTypeCard
              icon="building"
              title="Enterprise"
              description="Business solutions and partnerships"
              href="/enterprise"
            />
            <UserTypeCard
              icon="store"
              title="Go to Merchant"
              description="Access merchant profiles directly"
              href="/merchants"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Sunrise Points Section - Only for logged in users */}
      {isLoggedIn && (
        <section className="border-t border-border bg-card">
          <div className="container mx-auto px-4 py-12 lg:px-8">
            <PointsDisplay points={mockCustomerPoints} />
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Why Choose Sunrise Hub?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            Affordable digital presence for businesses of all sizes in Eswatini
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  No Website Needed
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Get your business online without the cost of domain
                  registration and web development
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-secondary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Verified Businesses
                </h3>
                <p className="mt-3 text-muted-foreground">
                  All merchants are verified through our KYC platform, ensuring
                  legitimate and trustworthy businesses
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Earn Rewards
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Accumulate Sunrise Points with every transaction and redeem
                  them for exclusive benefits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight lg:text-5xl">
              Ready to bring your business online?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join hundreds of businesses already thriving on Sunrise Hub
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-card-foreground hover:bg-card/90"
              >
                Register Your Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 hover:bg-secondary-foreground/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <SunriseLogo className="h-8 w-8" />
                <span className="font-serif text-xl font-bold text-foreground">
                  SUNRISE HUB
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Empowering MSMEs and professionals in Eswatini with affordable
                digital presence and marketing solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Platform</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/merchants" className="hover:text-foreground">
                    Find Merchants
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-foreground">
                    Register Business
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Sunrise Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
