import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import InputMask from 'react-input-mask';

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (66) 99248-0993",
    action: () => window.open('https://wa.me/5566992480993', '_blank')
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@rodrigodevmt.com",
    action: () => window.open('mailto:contato@rodrigodevmt.com', '_blank')
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Mato Grosso, Brasil",
    action: () => {}
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg-Sex: 8h às 18h",
    action: () => {}
  }
];

const FORMCARRY_ENDPOINT = import.meta.env.VITE_FORMCARRY_ENDPOINT || 'https://formcarry.com/s/0g-FRjNAasi'; // Endpoint do Formcarry

const StoneContact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
    cnpj: "",
    cpf: "",
    whatsapp: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(FORMCARRY_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          empresa: formData.empresa,
          mensagem: formData.mensagem,
          cnpj: formData.cnpj,
          cpf: formData.cpf,
          whatsapp: formData.whatsapp,
          _subject: 'Nova mensagem do site - Integração Stone',
          _language: 'pt-br',
          _template: 'table',
          _format: 'plain'
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          mensagem: "",
          cnpj: "",
          cpf: "",
          whatsapp: ""
        });
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000); // Esconde a mensagem após 5 segundos
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      console.log('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    
    const message = `*Nova solicitação de integração Stone*%0A%0A` +
                   `*Nome:* ${formData.nome}%0A` +
                   `*E-mail:* ${formData.email}%0A` +
                   `*Empresa:* ${formData.empresa}%0A` +
                   `*CNPJ:* ${formData.cnpj}%0A` +
                   `*CPF:* ${formData.cpf}%0A` +
                   `*WhatsApp:* ${formData.whatsapp}%0A` +
                   `*Mensagem:* ${formData.mensagem}`;
    
    window.open(`https://wa.me/5566992480993?text=${message}`, '_blank');
  };

  return (
    <>


      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 via-primary to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <img 
                  src="/uploads/27467abd-8fc5-4d5f-bee4-d00db5bb9312.png" 
                  alt="PagarMe Logo" 
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vamos Conversar sobre sua
                <span className="block text-green-400">Integração Stone</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar 
                seu sistema de pagamentos com nossa solução Stone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Informações de Contato
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={index}
                        className="bg-black/30 backdrop-blur-sm border border-white/30 hover:bg-black/40 transition-colors cursor-pointer"
                        onClick={info.action}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <info.icon className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{info.title}</h4>
                              <p className="text-white/80 text-sm">{info.value}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">
                    🚀 Consultoria Gratuita
                  </h4>
                  <p className="text-white/80 mb-6">
                    Agende uma conversa gratuita para entender suas necessidades 
                    e apresentar a melhor solução Stone para seu negócio.
                  </p>
                  <button 
                    onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    💬 Agendar Consultoria
                  </button>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Solicite um Orçamento
                </h3>
                <form 
                  onSubmit={handleEmailSubmit}
                  className="space-y-6"
                  name="stone-contact"
                >
                  <div>
                    <Label htmlFor="nome" className="text-white/90 mb-2">Nome Completo</Label>
                    <Input 
                      id="nome"
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cnpj" className="text-white/90 mb-2">CNPJ</Label>
                    <InputMask
                      mask="99.999.999/9999-99"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="cnpj"
                          className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                          placeholder="00.000.000/0000-00"
                        />
                      )}
                    </InputMask>
                  </div>

                  <div>
                    <Label htmlFor="cpf" className="text-white/90 mb-2">CPF</Label>
                    <InputMask
                      mask="999.999.999-99"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="cpf"
                          className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                          placeholder="000.000.000-00"
                        />
                      )}
                    </InputMask>
                  </div>

                  <div>
                    <Label htmlFor="whatsapp" className="text-white/90 mb-2">WhatsApp</Label>
                    <InputMask
                      mask="(99) 99999-9999"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="whatsapp"
                          className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                          placeholder="(00) 00000-0000"
                        />
                      )}
                    </InputMask>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white/90 mb-2">E-mail</Label>
                    <Input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="empresa" className="text-white/90 mb-2">Empresa</Label>
                    <Input 
                      id="empresa"
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem" className="text-white/90 mb-2">Mensagem</Label>
                    <Textarea 
                      id="mensagem"
                      rows={4}
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors resize-none placeholder:text-white/50"
                      placeholder="Conte-nos sobre seu projeto e necessidades..."
                      required
                    />
                  </div>
                  
                  {showSuccessMessage && (
                    <div className="bg-green-600/20 border border-green-500/50 rounded-lg p-4 mb-4 text-white flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mensagem enviada com sucesso!
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Enviando...' : 'Enviar E-mail'}
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default StoneContact;
