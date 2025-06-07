
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 bg-business-light">
            <div className="lg:hidden mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
