import {
  Box,
  DollarSign,
  ClipboardCheck,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";

const modules = [
    {
      icon: <Box className="w-6 h-6 text-blue-500" />,
      title: "Gestão de Estoque",
      description: "Controle completo de produtos, entradas, saídas e inventário"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Financeiro",
      description: "Contas a pagar, receber, fluxo de caixa e conciliação bancária"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      title: "Vendas",
      description: "PDV, orçamentos, pedidos e acompanhamento de vendas"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Recursos Humanos",
      description: "Gestão de funcionários, folha de pagamento e ponto eletrônico"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-500" />,
      title: "Fiscal",
      description: "Emissão de NF-e, NFC-e, controle de impostos e obrigações"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: "Relatórios",
      description: "Dashboards e relatórios personalizados para tomada de decisão"
    }
];

const ModulesGrid = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Módulos Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors">
                {module.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
