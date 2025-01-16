import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Sistema de Eventos",
    price: "299",
    period: "/mês",
    features: [
      "Gestão de Ingressos",
      "Controle de Entrada",
      "Relatórios Detalhados",
      "QR Code Individual",
      "Suporte 24/7",
    ],
  },
  {
    title: "Básico",
    price: "990",
    period: "/projeto",
    features: [
      "Site Institucional",
      "Design Responsivo",
      "5 Páginas",
      "Formulário de Contato",
      "Otimização SEO Básica",
    ],
  },
  {
    title: "Profissional",
    price: "2.490",
    period: "/projeto",
    popular: true,
    features: [
      "E-commerce Completo",
      "Painel Administrativo",
      "Páginas Ilimitadas",
      "Integração com PIX",
      "Suporte 30 dias",
    ],
  },
  {
    title: "Automação",
    price: "3.990",
    period: "/projeto",
    features: [
      "Automação Industrial",
      "Desenvolvimento IoT",
      "Interface de Controle",
      "Monitoramento Real-time",
      "Suporte 90 dias",
    ],
  },
  {
    title: "Enterprise",
    price: "Personalizado",
    features: [
      "Projetos Complexos",
      "Design de PCB",
      "Gerber de Placas",
      "Soluções Customizadas",
      "Suporte Premium",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Planos
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-primary shadow-lg scale-105 z-10"
                  : "border border-gray-200"
              } animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold mb-2">
                  {plan.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-bold text-primary">
                    {plan.price.startsWith("R$") ? plan.price : `R$ ${plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;