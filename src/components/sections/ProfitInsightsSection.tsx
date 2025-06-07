
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, Award } from "lucide-react";

const highProfitProducts = [
  { name: "Turmeric Powder", profitMargin: 55, revenue: 12000, suggestion: "Promote more" },
  { name: "Cooking Oil", profitMargin: 45, revenue: 28000, suggestion: "Best seller" },
  { name: "Premium Tea", profitMargin: 40, revenue: 8500, suggestion: "Increase visibility" },
  { name: "Cardamom", profitMargin: 38, revenue: 6200, suggestion: "Bundle offer" },
];

const bestSellingProducts = [
  { name: "Rice", sales: 4500, profit: 67500, trend: "up" },
  { name: "Sugar", sales: 3200, profit: 70400, trend: "up" },
  { name: "Wheat Flour", sales: 2100, profit: 25200, trend: "down" },
];

const hiddenGems = [
  { name: "Organic Honey", profitMargin: 60, sales: 45, potential: "High" },
  { name: "Cashew Nuts", profitMargin: 50, sales: 120, potential: "Medium" },
  { name: "Saffron", profitMargin: 75, sales: 15, potential: "High" },
];

export function ProfitInsightsSection() {
  return (
    <section id="profits" className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Profit Insights</h2>
          <p className="text-xl text-gray-600">Maximize your profits with data-driven recommendations</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Average Profit Margin</p>
                  <p className="text-3xl font-bold">32%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Top Profit Product</p>
                  <p className="text-xl font-bold">Saffron (75%)</p>
                </div>
                <Award className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Monthly Profit</p>
                  <p className="text-3xl font-bold">₹8,750</p>
                </div>
                <DollarSign className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* High Profit Products */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              High Profit Margin Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {highProfitProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-600">Monthly Revenue: ₹{product.revenue.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800">
                      {product.profitMargin}% margin
                    </Badge>
                    <Badge variant="outline">{product.suggestion}</Badge>
                    <Button size="sm" variant="outline">Promote</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Selling vs Hidden Gems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Best Selling Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {bestSellingProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} units</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{product.profit.toLocaleString()}</p>
                      <span className={`text-sm ${product.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {product.trend === 'up' ? '↗' : '↘'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Hidden Profit Gems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hiddenGems.map((product, index) => (
                  <div key={index} className="p-3 border rounded-lg bg-amber-50 border-amber-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} units sold</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-amber-100 text-amber-800">
                          {product.profitMargin}% margin
                        </Badge>
                        <p className="text-sm text-amber-700 mt-1">{product.potential} potential</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
