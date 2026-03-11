import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import CarSales from "@/pages/CarSales";
import AboutPage from "@/pages/AboutPage";
import AccidentRepair from "@/pages/AccidentRepair";
import ScratchRepair from "@/pages/ScratchRepair";
import EngineDiagnostic from "@/pages/EngineDiagnostic";
import Services from "./components/Services";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          {/* WhatsApp button appears on ALL pages */}
          <WhatsAppFloat />

          <Routes>

            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/car_sales" element={<CarSales />} />

            {/* Service Details */}
            <Route path="/services/accident-repairs" element={<AccidentRepair />} />
            <Route path="/services/scratch-repairs" element={<ScratchRepair />} />
            <Route path="/services/engine-diagnostics" element={<EngineDiagnostic />} />

            {/* Always last */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;