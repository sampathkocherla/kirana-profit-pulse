
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, AlertTriangle, TrendingUp, RefreshCw } from "lucide-react";

const lowStockItems = [
  { name: "Cooking Oil", currentStock: 15, recommended: 80, urgency: "Critical", daysLeft: 3 },
  { name: "Sugar", currentStock: 25, recommended: 100, urgency: "High", daysLeft: 7 },
  { name: "Tea Bags", currentStock: 30, recommended: 150, urgency: "Medium", daysLeft: 12 },
  { name: "Turmeric", currentStock: 40, recommended: 80, urgency: "Low", daysLeft: 18 },
];

const restockSuggestions = [
  { name: "Wheat Flour", demandTrend: "High", suggestedQuantity: 200, cost: 15000, expectedProfit: 4500 },
  { name: "Toor Dal", demandTrend: "Rising", suggestedQuantity: 100, cost: 12000, expectedProfit: 3600 },
  { name: "Mustard Oil", demandTrend: "Seasonal", suggestedQuantity: 50, cost: 8000, expectedProfit: 2800 },
];

const restockTrendData = [
  { month: 'Jan', restocks: 12 },
  { month: 'Feb', restocks: 15 },
  { month: 'Mar', restocks: 18 },
  { month: 'Apr', restocks: 14 },
  { month: 'May', restocks: 20 },
  { month: 'Jun', restocks: 16 },
];

export function StockSuggestionsSection() {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="stock" className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stock Suggestions</h2>
          <p className="text-xl text-gray-600">Smart inventory management recommendations</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Critical Stock</p>
                  <p className="text-3xl font-bold">2</p>
                  <p className="text-sm text-red-100">Items need immediate restock</p>
                </div>
                <AlertTriangle className="w-12 h-12 text-red-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Low Stock</p>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm text-orange-100">Items running low</p>
                </div>
                <Package className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Optimal Stock</p>
                  <p className="text-3xl font-bold">23</p>
                  <p className="text-sm text-green-100">Items well stocked</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Low Stock Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <Badge className={getUrgencyColor(item.urgency)}>
                        {item.urgency}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>Current: <span className="font-medium">{item.currentStock} units</span></div>
                      <div>Recommended: <span className="font-medium">{item.recommended} units</span></div>
                      <div>Days left: <span className="font-medium">{item.daysLeft} days</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Reorder Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Restock Suggestions and Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-green-600" />
                Smart Restock Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {restockSuggestions.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <Badge className="bg-blue-100 text-blue-800">
                        {item.demandTrend}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Suggested Quantity:</span>
                        <span className="font-medium">{item.suggestedQuantity} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Investment Cost:</span>
                        <span className="font-medium">₹{item.cost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Profit:</span>
                        <span className="font-medium text-green-600">₹{item.expectedProfit.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3" variant="outline">
                      Add to Restock List
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Restock Trends (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={restockTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Restocks']} />
                  <Line type="monotone" dataKey="restocks" stroke="#16a34a" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
