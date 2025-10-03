"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../public/logo2.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  showNavigation?: boolean;
}

export function Header({ showNavigation = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="border-b border-border bg-card relative z-40">
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
                className="lg:hidden relative z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </>
          )}

          {!showNavigation && (
            <Button variant="outline">Sign In</Button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showNavigation && isMobileMenuOpen && (
        <>
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-[73px] left-0 right-0 bg-card border-b border-border shadow-lg z-40 lg:hidden animate-in slide-in-from-top">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/merchants"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Merchants
              </Link>
              <Link
                href="/points"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Points
              </Link>
              <Link
                href="/dashboard"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
