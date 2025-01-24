import React from 'react';
import { Smartphone, ChartBar, QrCode, Printer, Shield, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Controle total na palma da sua mão"
  },
  {
    icon: ChartBar,
    title: "Relatórios",
    description: "Análises e estatísticas em tempo real"
  },
  {
    icon: QrCode,
    title: "QR Code",
    description: "Validação rápida e segura"
  },
  {
    icon: Printer,
    title: "Impressão",
    description: "Impressão de tickets e comprovantes"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Controle de acesso e permissões"
  },
  {
    icon: RefreshCw,
    title: "Sincronização",
    description: "Dados atualizados em tempo real"
  }
];

const EventosFeatures = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Recursos Principais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/15"
          >
            <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/80 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventosFeatures;