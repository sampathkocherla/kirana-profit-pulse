
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge, TrendingUp, Package, AlertTriangle } from "lucide-react";

const topProductsData = [
  { name: 'Rice', sales: 4500 },
  { name: 'Sugar', sales: 3200 },
  { name: 'Oil', sales: 2800 },
  { name: 'Wheat', sales: 2100 },
  { name: 'Dal', sales: 1900 },
];

const profitDistributionData = [
  { name: 'Grains', value: 35, color: '#22C55E' },
  { name: 'Spices', value: 25, color: '#2563EB' },
  { name: 'Oil & Ghee', value: 20, color: '#FACC15' },
  { name: 'Pulses', value: 15, color: '#EF4444' },
  { name: 'Others', value: 5, color: '#6B7280' },
];

export function DashboardSection() {
  return (
    <section id="dashboard" className="min-h-screen bg-business-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-business-textPrimary mb-4">Welcome, Rajesh Kumar!</h2>
          <p className="text-xl text-business-textSecondary">Here's your shop performance overview for today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Total Sales"
            value="₹35,000"
            subtitle="This month"
            icon={Badge}
            trend={{ value: "12% from last month", isPositive: true }}
          />
          <StatCard
            title="Top-Selling Product"
            value="Rice"
            subtitle="4,500 units sold"
            icon={TrendingUp}
          />
          <StatCard
            title="Monthly Profit"
            value="₹8,750"
            subtitle="25% profit margin"
            icon={TrendingUp}
            trend={{ value: "8% from last month", isPositive: true }}
          />
          <StatCard
            title="Low Stock Items"
            value="7"
            subtitle="Need restocking"
            icon={AlertTriangle}
            trend={{ value: "3 critical items", isPositive: false }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Top Products Bar Chart */}
          <Card className="shadow-lg border-business-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-business-textPrimary">
                <TrendingUp className="w-5 h-5 text-business-primary" />
                Top 5 Products by Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProductsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
                  <YAxis tick={{ fill: '#6B7280' }} />
                  <Tooltip formatter={(value) => [`₹${value}`, 'Sales']} />
                  <Bar dataKey="sales" fill="#2563EB" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Profit Distribution Pie Chart */}
          <Card className="shadow-lg border-business-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-business-textPrimary">
                <Package className="w-5 h-5 text-business-primary" />
                Profit Distribution by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={profitDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {profitDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Profit Share']} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Business Insights */}
        <Card className="shadow-lg border-business-border">
          <CardHeader>
            <CardTitle className="text-business-textPrimary">Today's Business Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-business-accent/30 rounded-lg p-4">
                <h4 className="font-semibold text-business-accent mb-2">💡 Profit Opportunity</h4>
                <p className="text-green-700">Sugar is your most profitable product this week with 45% margin</p>
              </div>
              <div className="bg-yellow-50 border border-business-warning/30 rounded-lg p-4">
                <h4 className="font-semibold text-business-warning mb-2">⚠️ Stock Alert</h4>
                <p className="text-yellow-700">Oil stock is low – consider reordering before weekend rush</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
