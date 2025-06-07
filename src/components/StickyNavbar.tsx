
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StickyNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Product Analysis" },
  { id: "profits", label: "Profit Insights" },
  { id: "stock", label: "Stock Suggestions" },
];

export function StickyNavbar({ activeSection, onNavigate }: StickyNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-business-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-business-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-business-textPrimary">Kirana Dashboard</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={activeSection === item.id 
                  ? "bg-business-primary hover:bg-business-primary/90 text-white" 
                  : "text-business-textSecondary hover:text-business-textPrimary hover:bg-gray-100"
                }
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-business-accent/10 text-business-accent border-business-accent/20">
              Shop Owner
            </Badge>
            <Button variant="outline" size="sm" className="border-business-border hover:bg-gray-50">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
