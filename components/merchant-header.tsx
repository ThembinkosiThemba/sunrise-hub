import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SunriseLogoIcon } from "@/components/sunrise-logo"
import { Menu, User, Bell } from "lucide-react"

export function MerchantHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <SunriseLogoIcon className="h-8 w-8" />
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-bold text-charcoal leading-none">Sunrise Hub</h1>
              <p className="text-xs text-charcoal/60">Marketing Portal</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-charcoal/60 hover:text-sunrise transition-colors">
              Home
            </Link>
            <Link href="/merchants" className="text-sm text-charcoal/60 hover:text-sunrise transition-colors">
              Merchants
            </Link>
            <Link href="/points" className="text-sm text-charcoal/60 hover:text-sunrise transition-colors">
              Points
            </Link>
            <Link href="/dashboard" className="text-sm font-semibold text-sunrise">
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-charcoal/60" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-sunrise rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-charcoal/60" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-charcoal/60" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
