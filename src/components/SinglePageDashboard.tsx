
import { useState, useEffect } from "react";
import { StickyNavbar } from "@/components/StickyNavbar";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { ProductAnalysisSection } from "@/components/sections/ProductAnalysisSection";
import { ProfitInsightsSection } from "@/components/sections/ProfitInsightsSection";
import { StockSuggestionsSection } from "@/components/sections/StockSuggestionsSection";

export function SinglePageDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["dashboard", "products", "profits", "stock"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StickyNavbar 
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      
      <main className="pt-16">
        <DashboardSection />
        <ProductAnalysisSection />
        <ProfitInsightsSection />
        <StockSuggestionsSection />
      </main>
    </div>
  );
}
