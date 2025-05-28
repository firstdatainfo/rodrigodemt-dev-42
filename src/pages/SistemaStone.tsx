
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoneHero from "@/components/stone/StoneHero";
import StoneFeatures from "@/components/stone/StoneFeatures";
import StoneTerminals from "@/components/stone/StoneTerminals";
import StoneIntegration from "@/components/stone/StoneIntegration";
import StoneBenefits from "@/components/stone/StoneBenefits";
import StoneContact from "@/components/stone/StoneContact";

const SistemaStone = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <StoneHero />
        <StoneFeatures />
        <StoneTerminals />
        <StoneIntegration />
        <StoneBenefits />
        <StoneContact />
      </main>
      <Footer />
    </div>
  );
};

export default SistemaStone;
