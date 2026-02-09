"use client";

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

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-primary">Apex</span> Garments Ltd.
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
          <div className="flex items-center gap-x-4">
            <Link href="/inquiry">
              <Button>Request Evaluation</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-4 space-y-1">
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
        </div>
      </nav>
    </header>
  );
}
