import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SistemaEventos from "./pages/SistemaEventos";
import SistemaEventosNovo from "./pages/SistemaEventosNovo";
import SistemaStone from "./pages/SistemaStone";
import SistemaAutomacoes from "./pages/SistemaAutomacoes";
import Sobre from "./pages/Sobre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sistema-eventos" element={<SistemaEventos />} />
          <Route path="/sistema-eventos-novo" element={<SistemaEventosNovo />} />
          <Route path="/sistema-stone" element={<SistemaStone />} />
          <Route path="/sistema-automacoes" element={<SistemaAutomacoes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
