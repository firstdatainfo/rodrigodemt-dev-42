const SistemaErp = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sistema ERP</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Gestão Financeira</h2>
            <p className="text-gray-600">
              Controle completo das finanças da sua empresa, incluindo contas a pagar,
              contas a receber, fluxo de caixa e relatórios detalhados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Controle de Estoque</h2>
            <p className="text-gray-600">
              Gestão eficiente de produtos, entrada e saída de mercadorias,
              controle de inventário e alertas de estoque mínimo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recursos Humanos</h2>
            <p className="text-gray-600">
              Administração completa de funcionários, folha de pagamento,
              benefícios e gestão de ponto eletrônico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaErp;