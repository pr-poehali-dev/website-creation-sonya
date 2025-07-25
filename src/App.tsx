
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Silence from "./pages/Silence";
import Repentance from "./pages/Repentance";
import Garden from "./pages/Garden";
import Relaxation from "./pages/Relaxation";
import Pleasures from "./pages/Pleasures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/silence" element={<Silence />} />
          <Route path="/repentance" element={<Repentance />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/relaxation" element={<Relaxation />} />
          <Route path="/pleasures" element={<Pleasures />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;