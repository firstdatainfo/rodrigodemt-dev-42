
import { FileText, CheckCircle, CreditCard, Zap } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const processSteps = [
  {
    icon: FileText,
    title: "1. Documentação",
    description: "Enviamos a lista de documentos necessários e ajudamos no preenchimento correto.",
    details: ["CNPJ da Empresa", "Documentos dos Sócios", "Comprovante de Endereço", "Faturamento Mensal"]
  },
  {
    icon: CheckCircle,
    title: "2. Análise Stone",
    description: "A Stone analisa sua documentação em até 2 dias úteis com nosso acompanhamento.",
    details: ["Análise de Crédito", "Verificação de Dados", "Aprovação Comercial", "Definição de Taxas"]
  },
  {
    icon: CreditCard,
    title: "3. Solicitação de Terminal",
    description: "Após aprovação, solicitamos seu terminal com configuração personalizada.",
    details: ["Escolha do Terminal", "Configuração Prévia", "Programação de Apps", "Personalização"]
  },
  {
    icon: Zap,
    title: "4. Entrega e Ativação",
    description: "Entregamos o terminal configurado e fazemos a ativação com treinamento completo.",
    details: ["Entrega Rápida", "Ativação Imediata", "Treinamento da Equipe", "Suporte Contínuo"]
  }
];

const StoneAccountProcess = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cnpj: "",
    contratoSocial: "",
    rgCpf: "",
    comprovante: "",
    extrato: "",
    faturamento: ""
  });

  const [open, setOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    const message = `*Solicitação de Abertura de Conta Stone*

*Dados Pessoais:*
📝 Nome: ${formData.nome}
📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}

*Documentos da Empresa:*
🏢 CNPJ atualizado da empresa: ${formData.cnpj}
📄 Contrato Social ou MEI: ${formData.contratoSocial}
🆔 RG e CPF dos sócios: ${formData.rgCpf}
📍 Comprovante de endereço da empresa: ${formData.comprovante}
💰 Extrato bancário (3 meses): ${formData.extrato}
📊 Comprovante de faturamento: ${formData.faturamento}

Gostaria de iniciar o processo de abertura da conta Stone.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5566992480993?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como Abrir sua <span className="text-green-600">Conta Stone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simplificado e acompanhamento completo para abertura da sua conta Stone 
              e solicitação de terminais com nossa consultoria especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="flex items-center gap-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏆 Vantagens de Abrir com Nossa Consultoria
              </h3>
              <div className="space-y-3">
                {[
                  "Acompanhamento personalizado em todo processo",
                  "Documentação revisada antes do envio",
                  "Negociação das melhores taxas disponíveis",
                  "Configuração completa dos terminais",
                  "Treinamento da equipe incluso",
                  "Suporte técnico permanente"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Documentos Necessários
              </h3>
              <div className="space-y-3">
                {[
                  "CNPJ atualizado da empresa",
                  "Contrato Social ou MEI",
                  "RG e CPF dos sócios",
                  "Comprovante de endereço da empresa",
                  "Extrato bancário (3 meses)",
                  "Comprovante de faturamento"
                ].map((document, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    💬 Iniciar Processo Agora
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-4">
                      Abertura de Conta Stone
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          placeholder="Digite seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Documentos da Empresa</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cnpj">CNPJ atualizado da empresa *</Label>
                          <Textarea
                            id="cnpj"
                            value={formData.cnpj}
                            onChange={(e) => handleInputChange('cnpj', e.target.value)}
                            placeholder="Descreva o status do CNPJ da empresa"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="contratoSocial">Contrato Social ou MEI *</Label>
                          <Textarea
                            id="contratoSocial"
                            value={formData.contratoSocial}
                            onChange={(e) => handleInputChange('contratoSocial', e.target.value)}
                            placeholder="Informações sobre o contrato social ou MEI"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="rgCpf">RG e CPF dos sócios *</Label>
                          <Textarea
                            id="rgCpf"
                            value={formData.rgCpf}
                            onChange={(e) => handleInputChange('rgCpf', e.target.value)}
                            placeholder="Documentos dos sócios disponíveis"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="comprovante">Comprovante de endereço da empresa *</Label>
                          <Textarea
                            id="comprovante"
                            value={formData.comprovante}
                            onChange={(e) => handleInputChange('comprovante', e.target.value)}
                            placeholder="Tipo de comprovante de endereço disponível"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="extrato">Extrato bancário (3 meses) *</Label>
                          <Textarea
                            id="extrato"
                            value={formData.extrato}
                            onChange={(e) => handleInputChange('extrato', e.target.value)}
                            placeholder="Disponibilidade dos extratos bancários"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="faturamento">Comprovante de faturamento *</Label>
                          <Textarea
                            id="faturamento"
                            value={formData.faturamento}
                            onChange={(e) => handleInputChange('faturamento', e.target.value)}
                            placeholder="Informações sobre o faturamento da empresa"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                    >
                      📱 Enviar para WhatsApp
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneAccountProcess;
