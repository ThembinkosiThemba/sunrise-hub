"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VerificationBadge } from "@/components/verification-badge"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, MessageCircle, Globe, ChevronDown, ChevronUp, Share2, ExternalLink } from "lucide-react"
import type { Merchant } from "@/lib/types"

interface MerchantProfileHeaderProps {
  merchant: Merchant
}

export function MerchantProfileHeader({ merchant }: MerchantProfileHeaderProps) {
  const [showBranches, setShowBranches] = useState(false)

  return (
    <div className="space-y-6">
      {/* Hero Section with Logo */}
      <Card className="overflow-hidden border-2">
        <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-xl">
              <Image
                src={merchant.logo_url || "/placeholder.svg"}
                alt={merchant.display_name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <CardContent className="pt-20 pb-8">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <h1 className="font-serif text-4xl font-bold text-foreground">{merchant.display_name}</h1>
              <VerificationBadge status={merchant.verification_status} />
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{merchant.short_bio}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {merchant.industry}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {merchant.sub_industry}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {merchant.services_count} Services
              </Badge>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="default" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-2">
        <CardContent className="p-6">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">Contact Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">{merchant.contacts.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <MessageCircle className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-medium text-foreground">{merchant.contacts.whatsapp}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{merchant.contacts.email}</p>
              </div>
            </div>

            {merchant.contacts.website && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a
                    href={merchant.contacts.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {merchant.contacts.social_media && (
            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-3 text-sm font-medium text-muted-foreground">Social Media</p>
              <div className="flex flex-wrap gap-2">
                {merchant.contacts.social_media.facebook && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={merchant.contacts.social_media.facebook} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Button>
                )}
                {merchant.contacts.social_media.instagram && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://instagram.com/${merchant.contacts.social_media.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Location & Branches */}
      <Card className="border-2">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Location & Branches</h2>
            {merchant.branches.length > 1 && (
              <Button variant="ghost" size="sm" onClick={() => setShowBranches(!showBranches)} className="gap-2">
                {showBranches ? (
                  <>
                    Hide Branches <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View All Branches ({merchant.branches.length}) <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {merchant.branches
              .filter((branch) => showBranches || branch.is_main)
              .map((branch, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">{branch.name}</p>
                      {branch.is_main && (
                        <Badge variant="secondary" className="text-xs">
                          Main
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{branch.address}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Phone: {branch.phone}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Details */}
      {merchant.verification_details && (
        <Card className="border-2 border-secondary/20 bg-secondary/5">
          <CardContent className="p-6">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">Verification Details</h3>
            <div className="space-y-2 text-sm">
              {merchant.verification_details.umpakatsi && (
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Umpakatsi:</span>{" "}
                  {merchant.verification_details.umpakatsi}
                </p>
              )}
              {merchant.verification_details.verified_by && (
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Verified by:</span>{" "}
                  {merchant.verification_details.verified_by}
                </p>
              )}
              {merchant.verification_details.verified_date && (
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Verified on:</span>{" "}
                  {new Date(merchant.verification_details.verified_date).toLocaleDateString()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
