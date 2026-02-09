import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCardData } from "@/types";

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <Card className="stat-card hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        {data.icon && (
          <div className="mb-2 text-primary">{data.icon}</div>
        )}
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {data.label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{data.value}</div>
        {data.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {data.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
