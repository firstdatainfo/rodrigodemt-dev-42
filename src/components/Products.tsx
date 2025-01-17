import { Monitor, ShoppingCart, Users, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "ERP Empresarial",
    description: "Sistema completo de gestão empresarial integrada",
    icon: Monitor,
    features: ["Gestão Financeira", "Controle de Estoque", "Recursos Humanos", "Relatórios Gerenciais"],
  },
  {
    title: "PDV Inteligente",
    description: "Sistema de ponto de venda com recursos avançados",
    icon: ShoppingCart,
    features: ["Controle de Vendas", "Gestão de Caixa", "Controle de Estoque", "Relatórios de Vendas"],
    images: [
      "/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png",
      "/lovable-uploads/b0db2735-0ba8-4c37-bbc2-0cec9837d6b5.png"
    ]
  },
  {
    title: "Gestão de Pessoas",
    description: "Sistema completo para gestão de recursos humanos",
    icon: Users,
    features: ["Folha de Pagamento", "Ponto Eletrônico", "Benefícios", "Avaliações"],
  },
  {
    title: "Business Intelligence",
    description: "Análise avançada de dados para tomada de decisões",
    icon: BarChart,
    features: ["Dashboards", "Relatórios", "Indicadores", "Previsões"],
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600">
            Soluções completas para todas as necessidades do seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.title}
              className="hover:shadow-xl transition-all duration-300 group animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {product.images && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {product.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${product.title} - Imagem ${idx + 1}`}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;