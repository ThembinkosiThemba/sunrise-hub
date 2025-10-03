import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Store, User } from "lucide-react";

interface UserTypeCardProps {
  icon: "user" | "building" | "store";
  title: string;
  description: string;
  href: string;
  variant?: "default" | "primary";
}

export function UserTypeCard({
  icon,
  title,
  description,
  href,
  variant = "default",
}: UserTypeCardProps) {
  const icons = {
    user: User,
    building: Building2,
    store: Store,
  };

  const Icon = icons[icon];

  const isPrimary = variant === "primary";

  return (
    <Link href={href}>
      <Card
        className={`card text-brand group h-full border-2 border-outline transition-all hover:shadow-lg ${
          isPrimary
            ? "bg-primary/5 hover:bg-primary/10"
            : "bg-surface hover:border-primary/50"
        }`}
      >
        <CardContent className="flex flex-col items-center p-4 sm:p-6 lg:p-8 text-center">
          <div
            className={`mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl sm:rounded-2xl transition-colors ${
              isPrimary
                ? "bg-primary text-primary-foreground group-hover:bg-primary/90"
                : "bg-primary/10 text-accent group-hover:bg-primary group-hover:text-primary-foreground"
            }`}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
          </div>
          <h3 className="font-serif text-base sm:text-lg lg:text-xl font-semibold">
            {title}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-description">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
