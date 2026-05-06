import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Capacity & Lead Times", href: "/capacity" },
  { name: "Quality Control", href: "/quality" },
  { name: "Compliance", href: "/compliance" },
  { name: "Blog", href: "/blog" },
  { name: "Factory Overview", href: "/factory" },
  { name: "Work With Us", href: "/work-with-us" },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center">
            <Link href="/" className="truncate text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              <span className="text-primary">Source</span>Loom
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-x-4 lg:flex">
            <Link href="/inquiry">
              <Button>Request Evaluation</Button>
            </Link>
          </div>

          <details className="group relative lg:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span
                aria-label="Toggle menu"
                className="inline-flex size-9 items-center justify-center rounded-md text-xl leading-none text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                ☰
              </span>
            </summary>
            <div
              id="mobile-navigation"
              className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-border bg-white p-3 shadow-xl"
            >
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/inquiry" className="block">
                    <Button className="w-full">Request Evaluation</Button>
                  </Link>
                </div>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
