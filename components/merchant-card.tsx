import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VerificationBadge } from "@/components/verification-badge";
import { MapPin, Package } from "lucide-react";
import type { Merchant } from "@/lib/types";

interface MerchantCardProps {
  merchant: Merchant;
}

export function MerchantCard({ merchant }: MerchantCardProps) {
  return (
    <Link href={`/merchants/${merchant.merchant_id}`}>
      <Card className="card bg-surface border-outline group h-full overflow-hidden transition-all hover:shadow-lg p-0">
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={merchant.logo_url || "/placeholder.svg"}
            alt={merchant.display_name}
            fill
            priority
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl font-semibold text-brand line-clamp-1">
              {merchant.display_name}
            </h3>
            <VerificationBadge
              status={merchant.verification_status}
              className="shrink-0"
            />
          </div>

          <p className="mb-4 text-sm text-description line-clamp-2">
            {merchant.short_bio}
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="secondary" className="font-normal">
                {merchant.industry}
              </Badge>
              <span className="text-description">•</span>
              <span className="text-description">{merchant.sub_industry}</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-description">
              <div className="flex items-center gap-1.5">
                <Package className="h-4 w-4" />
                <span>{merchant.services_count} services</span>
              </div>
              {merchant.branches.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {merchant.branches[0].address.split(",")[1]?.trim() ||
                        "Eswatini"}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border p-4">
          <div className="flex w-full items-center justify-between text-sm">
            <span className="text-description">Profile Score</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${merchant.profile_score}%` }}
                />
              </div>
              <span className="font-semibold text-label">
                {merchant.profile_score}%
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
