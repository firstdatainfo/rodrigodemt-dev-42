import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const features = [
  {
    category: "Financeiro",
    items: [
      "Agrupamento de Faturas e Renegociações",
      "Baixa em Lote",
      "Boleto Híbrido (Boleto+PIX)",
      "Contas a Pagar",
      "Contas a Receber",
      "Emissão de Boletos",
      "Gerador de Comissão",
      "Importação e Extrato OFX",
      "PIX Agendado",
      "PIX Integrado",
      "PIX em todas operadoras Smart POS",
      "Link de Pagamento",
    ]
  },
  {
    category: "PDV e Vendas",
    items: [
      "PDV (Web/Desk/Mobile)",
      "Cardápio Digital em QR Code",
      "Chama Senha",
      "Delivery (Gestor de Entregas)",
      "Despesas no PDV",
      "Devolução do PDV",
      "Etapas e Montagens (Venda)",
      "Grade",
      "KDS",
      "Lançamento (Garçom)",
      "Mesas/Fichas",
      "Modo Ficha",
      "Pedido Online Delivery VIP",
      "Pedido Online PDV Flow",
      "Preço Tabela por PDV",
      "QR Code na Mesa",
    ]
  },
  {
    category: "Gestão e Controle",
    items: [
      "Módulo de Estoque",
      "Módulo Financeiro",
      "Gestão de Contratos",
      "Matriz e Filial",
      "Permissões",
      "Programa de Fidelidade + Mensageria",
      "Portal do Contador",
    ]
  },
  {
    category: "Integrações",
    items: [
      "Hub E-commerce/Marketplace",
      "Integração com Catraca",
      "Integração com Chopeira via RFID",
      "Integração com iFood",
      "Integração com WhatsApp",
      "Integração de Boletos via API do Pense Bank",
      "Integrações de Boletos via Remessa de Arquivo para todos os Bancos",
      "Conta Digital do Pense Bank",
      "Conciliações para Operadora Stone",
    ]
  },
  {
    category: "Fiscal",
    items: [
      "CT-e",
      "EFD Contribuições e EFD Fiscal",
      "Gestor Tributário iMendes",
      "Manifesto Fiscal",
    ]
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Conheça todas as funcionalidades que podemos oferecer!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((category) => (
            <Card key={category.category} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.category}
                </h3>
                <ScrollArea className="h-[300px] pr-4">
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;