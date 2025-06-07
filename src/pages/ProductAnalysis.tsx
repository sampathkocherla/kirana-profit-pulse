
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, Filter } from "lucide-react";

const productData = [
  { name: "Rice", category: "Grains", unitsSold: 4500, stock: 120, profitPerItem: 15 },
  { name: "Sugar", category: "Sweeteners", unitsSold: 3200, stock: 80, profitPerItem: 22 },
  { name: "Cooking Oil", category: "Oil & Ghee", unitsSold: 2800, stock: 15, profitPerItem: 45 },
  { name: "Wheat Flour", category: "Grains", unitsSold: 2100, stock: 95, profitPerItem: 12 },
  { name: "Toor Dal", category: "Pulses", unitsSold: 1900, stock: 55, profitPerItem: 28 },
  { name: "Tea", category: "Beverages", unitsSold: 1600, stock: 200, profitPerItem: 35 },
  { name: "Salt", category: "Condiments", unitsSold: 1400, stock: 300, profitPerItem: 8 },
  { name: "Turmeric", category: "Spices", unitsSold: 800, stock: 40, profitPerItem: 55 },
];

const performanceData = [
  { month: 'Jan', sales: 28000 },
  { month: 'Feb', sales: 31000 },
  { month: 'Mar', sales: 29000 },
  { month: 'Apr', sales: 35000 },
  { month: 'May', sales: 33000 },
  { month: 'Jun', sales: 38000 },
];

export default function ProductAnalysis() {
  const getStockStatus = (stock: number) => {
    if (stock < 30) return { label: "Low", color: "bg-red-100 text-red-800" };
    if (stock < 60) return { label: "Medium", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Good", color: "bg-green-100 text-green-800" };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Analysis</h1>
        <p className="text-gray-600">Detailed insights into your product performance</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-business-primary" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="spices">Spices</SelectItem>
                <SelectItem value="oil">Oil & Ghee</SelectItem>
                <SelectItem value="pulses">Pulses</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-business-primary" />
            Sales Performance Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, 'Sales']} />
              <Line type="monotone" dataKey="sales" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-business-primary" />
            Product Performance Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Product Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Units Sold</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Stock Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Profit per Item</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, index) => {
                  const stockStatus = getStockStatus(product.stock);
                  return (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="secondary">{product.category}</Badge>
                      </td>
                      <td className="py-4 px-4 text-gray-900">{product.unitsSold.toLocaleString()}</td>
                      <td className="py-4 px-4">
                        <Badge className={stockStatus.color}>
                          {product.stock} - {stockStatus.label}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-gray-900 font-medium">₹{product.profitPerItem}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
