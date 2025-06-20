import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoneHero from "@/components/stone/StoneHero";
import StoneServices from "@/components/stone/StoneServices";
import StoneAccountProcess from "@/components/stone/StoneAccountProcess";
import StoneFeatures from "@/components/stone/StoneFeatures";
import StoneTerminals from "@/components/stone/StoneTerminals";
import StoneIntegration from "@/components/stone/StoneIntegration";
import StoneBenefits from "@/components/stone/StoneBenefits";
import StoneContact from "@/components/stone/StoneContact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteModal from "@/components/ui/quote-modal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
const SistemaStone = () => {
  const {
    isOpen,
    openModal,
    closeModal
  } = useQuoteModal();
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          
        </Link>
      </div>

      <main className="pt-20">
        <StoneHero />
        <StoneServices />
        <StoneAccountProcess />
        <StoneFeatures />
        <StoneTerminals />
        <StoneBenefits />
        <StoneContact />
      </main>
      <Footer />
      
      <QuoteModal open={isOpen} onOpenChange={closeModal} service="Sistema Stone" />
    </div>;
};
export default SistemaStone;