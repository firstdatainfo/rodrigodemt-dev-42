import { Monitor, ShoppingCart, Users, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "ERP Empresarial",
    description: "Gestão completa para sua empresa",
    icon: Monitor,
  },
  {
    title: "PDV",
    description: "Controle total das suas vendas",
    icon: ShoppingCart,
  },
  {
    title: "Gestão de Pessoas",
    description: "Administre sua equipe",
    icon: Users,
  },
  {
    title: "Business Intelligence",
    description: "Análise de dados inteligente",
    icon: BarChart,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.title}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-textGray">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;