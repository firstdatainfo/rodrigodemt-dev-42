import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Nossos Planos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`hover:shadow-lg transition-shadow duration-300 animate-fade-up ${
                plan.popular ? "border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {plan.title}
                  {plan.popular && (
                    <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                      Mais Popular
                    </span>
                  )}
                </CardTitle>
                <div className="text-3xl font-bold flex items-baseline">
                  {plan.price.startsWith("R$") ? plan.price : `R$ ${plan.price}`}
                  <span className="text-sm font-normal text-textGray ml-1">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;