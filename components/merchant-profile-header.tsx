"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VerificationBadge } from "@/components/verification-badge";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  Share2,
  ExternalLink,
  Instagram,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Merchant } from "@/lib/types";
import { whatsapp, facebook, x } from "@/assets";

interface MerchantProfileHeaderProps {
  merchant: Merchant;
}

export function MerchantProfileHeader({
  merchant,
}: MerchantProfileHeaderProps) {
  const [showBranches, setShowBranches] = useState(false);

  // Generate share URLs
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out ${merchant.display_name} on Sunrise Hub!`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      shareText + " " + shareUrl
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`,
  };

  const handleShare = (platform: "whatsapp" | "facebook" | "twitter") => {
    window.open(shareLinks[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <Card className="overflow-hidden border-2 p-0 card bg-surface border-outline">
        <div className="relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 overflow-hidden rounded-xl lg:rounded-2xl border-1 border-card bg-card shadow-xl">
              <Image
                src={merchant.logo_url || "/placeholder.svg"}
                alt={merchant.display_name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <CardContent className="pt-12 sm:pt-16 lg:pt-20 pb-6 lg:pb-8 px-4 lg:px-6">
          <div className="text-center">
            <div className="mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand">
                {merchant.display_name}
              </h1>
              <VerificationBadge status={merchant.verification_status} />
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-description px-4">
              {merchant.short_bio}
            </p>

            <div className="mt-4 lg:mt-6 flex flex-wrap items-center justify-center gap-2 lg:gap-3">
              <Badge
                variant="secondary"
                className="text-xs sm:text-sm text-description"
              >
                {merchant.industry}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs sm:text-sm text-description"
              >
                {merchant.sub_industry}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs sm:text-sm text-description"
              >
                {merchant.services_count} Services
              </Badge>
            </div>

            <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-2 lg:gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="button gap-2 w-full sm:w-auto lg:text-base"
                asChild
              >
                <a href={`tel:${merchant.contacts.phone}`}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent w-full sm:w-auto lg:text-base"
                asChild
              >
                <a
                  href={`https://wa.me/${merchant.contacts.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-description"
                >
                  <Image
                    src={whatsapp}
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Share Accordion */}
            <Accordion
              type="single"
              collapsible
              className="w-full mt-4 lg:mt-6"
            >
              <AccordionItem value="share" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    <span>Share Profile</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 justify-start"
                      onClick={() => handleShare("whatsapp")}
                    >
                      <Image
                        src={whatsapp}
                        alt="WhatsApp"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Share on WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 justify-start"
                      onClick={() => handleShare("facebook")}
                    >
                      <Image
                        src={facebook}
                        alt="Facebook"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Share on Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 justify-start"
                      onClick={() => handleShare("twitter")}
                    >
                      <Image
                        src={x}
                        alt="X/Twitter"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Share on X (Twitter)
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="card bg-surface border-outline">
        <CardContent className="p-4 lg:p-6">
          <h2 className="mb-4 font-serif text-xl lg:text-2xl font-semibold text-brand">
            Contact Information
          </h2>
          <div className="grid gap-3 lg:gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs lg:text-sm text-description">Phone</p>
                <p className="font-medium text-sm lg:text-base text-description truncate">
                  {merchant.contacts.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                <Image
                  src={whatsapp}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-4 w-4 lg:h-5 lg:w-5"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs lg:text-sm text-description">WhatsApp</p>
                <p className="font-medium text-sm lg:text-base text-description truncate">
                  {merchant.contacts.whatsapp}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <div className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs lg:text-sm text-description">Email</p>
                <p className="font-medium text-sm lg:text-base text-description truncate">
                  {merchant.contacts.email}
                </p>
              </div>
            </div>

            {merchant.contacts.website && (
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs lg:text-sm text-description">Website</p>
                  <a
                    href={merchant.contacts.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-sm lg:text-base text-primary hover:underline truncate"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {merchant.contacts.social_media && (
            <div className="mt-4 lg:mt-6 border-t border-border pt-4 lg:pt-6">
              <p className="mb-3 text-xs lg:text-sm font-medium text-description">
                Social Media
              </p>
              <div className="flex flex-wrap gap-2">
                {merchant.contacts.social_media.facebook && (
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a
                      href={merchant.contacts.social_media.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={facebook}
                        alt="Facebook"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Facebook
                    </a>
                  </Button>
                )}
                {merchant.contacts.social_media.instagram && (
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a
                      href={`https://instagram.com/${merchant.contacts.social_media.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="text-pink-600" />
                      {/* <Image src={x} alt="X/Twitter" width={16} height={16} className="h-4 w-4" /> */}
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
      <Card className="card bg-surface border-outline">
        <CardContent className="p-4 lg:p-6">
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h2 className="font-serif text-xl lg:text-2xl font-semibold text-brand">
              Location & Branches
            </h2>
            {merchant.branches.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBranches(!showBranches)}
                className="gap-2"
              >
                {showBranches ? (
                  <>
                    Hide Branches <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View All Branches ({merchant.branches.length}){" "}
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="space-y-3 lg:space-y-4">
            {merchant.branches
              .filter((branch) => showBranches || branch.is_main)
              .map((branch, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 lg:gap-3 rounded-lg border border-border p-3 lg:p-4"
                >
                  <div className="flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-sm lg:text-base text-brand">
                        {branch.name}
                      </p>
                      {branch.is_main && (
                        <Badge variant="secondary" className="text-xs">
                          Main
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs lg:text-sm text-description">
                      {branch.address}
                    </p>
                    <p className="mt-1 text-xs lg:text-sm text-description">
                      Phone: {branch.phone}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Details */}
      {merchant.verification_details && (
        <Card className="border-outline bg-surface card">
          <CardContent className="p-4 lg:p-6">
            <h3 className="mb-3 font-serif text-lg lg:text-xl font-semibold text-label">
              Verification Details
            </h3>
            <div className="space-y-2 text-xs lg:text-sm">
              {merchant.verification_details.umpakatsi && (
                <p className="text-description">
                  <span className="font-medium text-description">
                    Umpakatsi:
                  </span>{" "}
                  {merchant.verification_details.umpakatsi}
                </p>
              )}
              {merchant.verification_details.verified_by && (
                <p className="text-description">
                  <span className="font-medium text-description">
                    Verified by:
                  </span>{" "}
                  {merchant.verification_details.verified_by}
                </p>
              )}
              {merchant.verification_details.verified_date && (
                <p className="text-description">
                  <span className="font-medium text-description">
                    Verified on:
                  </span>{" "}
                  {new Date(
                    merchant.verification_details.verified_date
                  ).toLocaleDateString()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
