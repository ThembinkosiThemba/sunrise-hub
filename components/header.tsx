"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../public/logo2.svg";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  showNavigation?: boolean;
}

export function Header({ showNavigation = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={160} height={20} alt="Logo" style={{ height: 'auto' }} />
        </Link>

        {showNavigation && (
          <>
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/merchants"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Merchants
              </Link>
              <Link
                href="/points"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Points
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
             <Menu />
            </Button>
          </>
        )}

        {!showNavigation && (
          <Button variant="outline">Sign In</Button>
        )}
      </div>

      {/* Mobile Menu */}
      {showNavigation && isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/merchants"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Merchants
            </Link>
            <Link
              href="/points"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Points
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
