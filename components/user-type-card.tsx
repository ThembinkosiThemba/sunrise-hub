import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Store, User } from "lucide-react"

interface UserTypeCardProps {
  icon: "user" | "building" | "store"
  title: string
  description: string
  href: string
  variant?: "default" | "primary"
}

export function UserTypeCard({ icon, title, description, href, variant = "default" }: UserTypeCardProps) {
  const icons = {
    user: User,
    building: Building2,
    store: Store,
  }

  const Icon = icons[icon]

  const isPrimary = variant === "primary"

  return (
    <Link href={href}>
      <Card
        className={`group h-full border-2 transition-all hover:shadow-lg ${
          isPrimary ? "border-primary bg-primary/5 hover:bg-primary/10" : "hover:border-primary/50"
        }`}
      >
        <CardContent className="flex flex-col items-center p-8 text-center">
          <div
            className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
              isPrimary
                ? "bg-primary text-primary-foreground group-hover:bg-primary/90"
                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            }`}
          >
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
