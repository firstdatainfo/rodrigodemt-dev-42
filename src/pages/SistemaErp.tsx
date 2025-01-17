import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SistemaErp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Sistema ERP First Sistemas</h1>
          <p className="text-textGray text-lg max-w-2xl mx-auto">
            Soluções completas para gestão empresarial, desenvolvidas para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Gestão Financeira</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• Controle de contas a pagar e receber</li>
                <li>• Fluxo de caixa detalhado</li>
                <li>• Conciliação bancária</li>
                <li>• Relatórios gerenciais</li>
                <li>• DRE e balanços</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Controle de Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• Gestão completa de produtos</li>
                <li>• Controle de entrada e saída</li>
                <li>• Inventário em tempo real</li>
                <li>• Gestão de fornecedores</li>
                <li>• Alertas de estoque mínimo</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Faturamento</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• Emissão de NF-e</li>
                <li>• Controle de vendas</li>
                <li>• Gestão de clientes</li>
                <li>• Relatórios de vendas</li>
                <li>• Comissionamento</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Recursos Humanos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• Folha de pagamento</li>
                <li>• Controle de ponto</li>
                <li>• Gestão de férias</li>
                <li>• Benefícios</li>
                <li>• eSocial integrado</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Fiscal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• SPED Fiscal</li>
                <li>• SPED Contribuições</li>
                <li>• SINTEGRA</li>
                <li>• Obrigações acessórias</li>
                <li>• Relatórios fiscais</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Produção</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textGray">
                <li>• Ordem de produção</li>
                <li>• Controle de custos</li>
                <li>• Planejamento de produção</li>
                <li>• Gestão de qualidade</li>
                <li>• Rastreabilidade</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Por que escolher o ERP First Sistemas?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Suporte Especializado</h3>
              <p className="text-textGray">Equipe técnica disponível para auxiliar em todas as etapas</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Personalização</h3>
              <p className="text-textGray">Sistema adaptável às necessidades específicas da sua empresa</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Tecnologia Avançada</h3>
              <p className="text-textGray">Sempre atualizado com as últimas inovações do mercado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaErp;