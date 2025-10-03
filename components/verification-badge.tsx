import { CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { VerificationStatus } from "@/lib/types";

interface VerificationBadgeProps {
  status: VerificationStatus;
  className?: string;
}

export function VerificationBadge({
  status,
  className,
}: VerificationBadgeProps) {
  const badges = {
    VERIFIED_FORMAL: {
      icon: CheckCircle2,
      label: "Verified Formal",
      variant: "default" as const,
      className: "bg-secondary text-secondary-foreground",
    },
    VERIFIED_INFORMAL: {
      icon: CheckCircle2,
      label: "Verified Informal",
      variant: "secondary" as const,
      className: "bg-primary/20 text-brand border-primary",
    },
    PENDING: {
      icon: Clock,
      label: "Verification Pending",
      variant: "outline" as const,
      className: "border-muted-foreground/30 text-description",
    },
  };

  const badge = badges[status];
  const Icon = badge.icon;

  return (
    <Badge
      variant={badge.variant}
      className={`${badge.className} ${className} flex items-center gap-1.5`}
    >
      <Icon className="h-3.5 w-3.5" />
      {badge.label}
    </Badge>
  );
}
