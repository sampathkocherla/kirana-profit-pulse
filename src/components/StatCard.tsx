
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export function StatCard({ title, value, subtitle, icon: Icon, trend }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <Icon className="h-5 w-5 text-business-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className={`flex items-center text-sm mt-2 ${
            trend.isPositive ? 'text-business-success' : 'text-business-danger'
          }`}>
            <span>{trend.isPositive ? '↗' : '↘'} {trend.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
