
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { 
  Badge, 
  BarChart3, 
  TrendingUp, 
  Package 
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Product Analysis",
    url: "/products",
    icon: Badge,
  },
  {
    title: "Profit Insights",
    url: "/profits",
    icon: TrendingUp,
  },
  {
    title: "Stock Suggestions",
    url: "/stock",
    icon: Package,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-business-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Kirana Shop</h2>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`w-full ${
                      location.pathname === item.url 
                        ? 'bg-business-primary text-white hover:bg-business-primary/90' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
