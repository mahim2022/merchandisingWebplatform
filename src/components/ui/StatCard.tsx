import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCardData } from "@/types";

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <Card className="stat-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <CardHeader className="pb-3">
        {data.icon && (
          <div className="mb-2 text-primary">{data.icon}</div>
        )}
        <CardTitle className="text-base font-semibold tracking-tight text-foreground/85">
          {data.label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-extrabold tracking-tight text-foreground">{data.value}</div>
        {data.description && (
          <p className="mt-2 text-base font-medium text-muted-foreground">
            {data.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
