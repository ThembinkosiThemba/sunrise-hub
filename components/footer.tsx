import { logo2 } from "@/assets";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo2}
                width={160}
                height={20}
                alt="Logo"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-description">
              Empowering MSMEs and professionals in Eswatini with affordable
              digital presence and marketing solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li>
                <Link href="/merchants" className="text-label">
                  Find Merchants
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-label">
                  Register Business
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-label">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-label">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-label">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-label">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-label">
          <p>&copy; 2025 Sunrise Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
