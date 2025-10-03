import { SunriseLogo } from "@/components/sunrise-logo";
import Link from "next/link";

export function Footer() {
  return (
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
  );
}
