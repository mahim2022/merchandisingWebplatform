import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}: CTAButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <Button variant={variant} size={size} className={`${className} group`}>
          {children}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} group`}
      onClick={onClick}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
