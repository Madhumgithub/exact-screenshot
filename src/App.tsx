import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import CompanySkills from "./pages/CompanySkills";
import CompanyHiring from "./pages/CompanyHiring";
import CompanyInnovx from "./pages/CompanyInnovx";
import SkillComparison from "./pages/SkillComparison";
import HiringEntry from "./pages/HiringEntry";
import InnovxEntry from "./pages/InnovxEntry";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/companies/:id/skills" element={<CompanySkills />} />
            <Route path="/companies/:id/hiring" element={<CompanyHiring />} />
            <Route path="/companies/:id/innovx" element={<CompanyInnovx />} />
            <Route path="/skills" element={<SkillComparison />} />
            <Route path="/hiring" element={<HiringEntry />} />
            <Route path="/innovx" element={<InnovxEntry />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
