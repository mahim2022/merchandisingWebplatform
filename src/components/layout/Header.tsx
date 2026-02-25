"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Capacity & Lead Times", href: "/capacity" },
  { name: "Quality Control", href: "/quality" },
  { name: "Compliance", href: "/compliance" },
  { name: "Factory Overview", href: "/factory" },
  { name: "Work With Us", href: "/work-with-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex min-w-0 items-center">
            <Link href="/" className="truncate text-base font-bold text-foreground sm:text-xl">
              <span className="text-primary">Source</span>Loom
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-x-4 lg:flex">
            <Link href="/inquiry">
              <Button>Request Evaluation</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-xl leading-none">{isMobileMenuOpen ? "×" : "☰"}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link href="/inquiry" className="block">
                <Button className="w-full">Request Evaluation</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
