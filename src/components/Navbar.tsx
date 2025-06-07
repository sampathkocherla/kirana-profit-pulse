
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <SidebarTrigger />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-business-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Kirana Dashboard</h1>
              <p className="text-sm text-gray-500">Manage your shop efficiently</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="bg-business-primary/10 text-business-primary">
            Shop Owner
          </Badge>
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
