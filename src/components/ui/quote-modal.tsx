
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: string;
}

const QuoteModal = ({ open, onOpenChange, service = "Geral" }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servico: service,
    descricao: "",
    orcamento: "",
    prazo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    const message = `*Solicitação de Orçamento*

*Dados do Cliente:*
👤 Nome: ${formData.nome}
📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}
🏢 Empresa: ${formData.empresa}

*Detalhes do Serviço:*
🔧 Serviço: ${formData.servico}
📝 Descrição: ${formData.descricao}
💰 Orçamento Estimado: ${formData.orcamento}
⏰ Prazo Desejado: ${formData.prazo}

Gostaria de receber um orçamento detalhado para este serviço.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5566992480993?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
    
    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      servico: service,
      descricao: "",
      orcamento: "",
      prazo: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] p-0">
        <div className="flex flex-col h-full">
          <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
            <DialogTitle className="text-2xl font-bold text-center text-gray-900">
              💬 Solicitar Orçamento
            </DialogTitle>
            <p className="text-center text-gray-600 mt-2">
              Preencha os dados abaixo e receba seu orçamento personalizado
            </p>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">📋 Dados Pessoais</h4>
                
                <div>
                  <Label htmlFor="quote-nome" className="text-sm font-medium">Nome Completo *</Label>
                  <Input
                    id="quote-nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="quote-email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="quote-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="quote-telefone" className="text-sm font-medium">Telefone *</Label>
                  <Input
                    id="quote-telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="quote-empresa" className="text-sm font-medium">Empresa</Label>
                  <Input
                    id="quote-empresa"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange('empresa', e.target.value)}
                    placeholder="Nome da sua empresa"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🔧 Detalhes do Serviço</h4>
                
                <div>
                  <Label htmlFor="quote-servico" className="text-sm font-medium">Tipo de Serviço *</Label>
                  <Select value={formData.servico} onValueChange={(value) => handleInputChange('servico', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Automação Residencial">Automação Residencial</SelectItem>
                      <SelectItem value="Automação Industrial">Automação Industrial</SelectItem>
                      <SelectItem value="Automação Predial">Automação Predial</SelectItem>
                      <SelectItem value="Sistema Stone">Sistema Stone</SelectItem>
                      <SelectItem value="Sistema de Eventos">Sistema de Eventos</SelectItem>
                      <SelectItem value="Desenvolvimento Web">Desenvolvimento Web</SelectItem>
                      <SelectItem value="Consultoria TI">Consultoria TI</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="quote-descricao" className="text-sm font-medium">Descrição do Projeto *</Label>
                  <Textarea
                    id="quote-descricao"
                    value={formData.descricao}
                    onChange={(e) => handleInputChange('descricao', e.target.value)}
                    placeholder="Descreva detalhadamente o que você precisa..."
                    className="mt-1 h-20 resize-none"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="quote-orcamento" className="text-sm font-medium">Orçamento Estimado</Label>
                  <Select value={formData.orcamento} onValueChange={(value) => handleInputChange('orcamento', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione a faixa de orçamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Até R$ 5.000">Até R$ 5.000</SelectItem>
                      <SelectItem value="R$ 5.000 - R$ 15.000">R$ 5.000 - R$ 15.000</SelectItem>
                      <SelectItem value="R$ 15.000 - R$ 30.000">R$ 15.000 - R$ 30.000</SelectItem>
                      <SelectItem value="R$ 30.000 - R$ 50.000">R$ 30.000 - R$ 50.000</SelectItem>
                      <SelectItem value="Acima de R$ 50.000">Acima de R$ 50.000</SelectItem>
                      <SelectItem value="A definir">A definir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="quote-prazo" className="text-sm font-medium">Prazo Desejado</Label>
                  <Select value={formData.prazo} onValueChange={(value) => handleInputChange('prazo', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Urgente (até 15 dias)">Urgente (até 15 dias)</SelectItem>
                      <SelectItem value="1 mês">1 mês</SelectItem>
                      <SelectItem value="2-3 meses">2-3 meses</SelectItem>
                      <SelectItem value="3-6 meses">3-6 meses</SelectItem>
                      <SelectItem value="Mais de 6 meses">Mais de 6 meses</SelectItem>
                      <SelectItem value="Flexível">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t bg-gradient-to-r from-gray-50 to-gray-100">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              disabled={!formData.nome || !formData.email || !formData.telefone || !formData.descricao}
            >
              📱 Enviar Solicitação via WhatsApp
            </Button>
            <p className="text-center text-xs text-gray-500 mt-2">
              Seus dados serão enviados via WhatsApp para nosso atendimento
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
