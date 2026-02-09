import { Badge } from "@/components/ui/badge";

interface CertificationBadgeProps {
  name: string;
  variant?: "default" | "secondary" | "outline";
}

export default function CertificationBadge({
  name,
  variant = "secondary",
}: CertificationBadgeProps) {
  return (
    <Badge variant={variant} className="px-3 py-1 text-xs font-medium">
      {name}
    </Badge>
  );
}
