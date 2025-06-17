import { Phone, Mail, MapPin, Instagram, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import InputMask from 'react-input-mask';

// Configuração do Formspree
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xgvywzlj'; // Endpoint do Formspree

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cnpj: '',
    cpf: '',
    whatsapp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsLoading(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '', cnpj: '', cpf: '', whatsapp: '' });
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
    
    if (!formData.name || !formData.email || !formData.message) {
      console.log('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    
    const message = `*Nome:* ${formData.name}%0A` +
                   `*Email:* ${formData.email}%0A` +
                   `*Mensagem:* ${formData.message}`;
    
    window.open(`https://wa.me/5566992480993?text=${message}`, '_blank');
  };

  return (
    <>
      <section id="contato" className="py-12 bg-gradient-to-r from-blue-900 via-primary to-red-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
          <img 
            src="/uploads/5949be6f-6616-4b08-977b-903de24aa9f2.png" 
            alt="Stone Logo" 
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
          <img 
            src="/uploads/27467abd-8fc5-4d5f-bee4-d00db5bb9312.png" 
            alt="PagarMe Logo" 
            className="h-16 sm:h-20 md:h-24 sm:ml-4 md:ml-8 mt-2 sm:mt-0"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-white/30 p-6 rounded-xl hover:bg-black/40 transition-all duration-300 relative z-30">
            <h3 className="text-2xl font-semibold mb-6 text-white">Vamos conversar sobre seu projeto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <a href="https://instagram.com/first_developer_mt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                  first_developer_mt
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+5566992480993" className="text-white hover:text-green-300 transition-colors">
                  (66) 99248-0993
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:rodrigodev@yahoo.com" className="text-white hover:text-green-300 transition-colors">
                  rodrigodev@yahoo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">Mato Grosso</span>
              </div>
            </div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-white/30 p-6 rounded-xl hover:bg-black/40 transition-all duration-300 relative z-30">
            <form 
              onSubmit={handleSubmit} 
              action={FORMSPREE_ENDPOINT} 
              method="POST" 
              className="space-y-4"
              name="contato"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)'
                  }}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)'
                  }}
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="cnpj" className="block text-sm font-medium text-white">
                  CNPJ
                </label>
                <InputMask
                  mask="99.999.999/9999-99"
                  value={formData.cnpj}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="cnpj"
                      name="cnpj"
                      className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)'
                      }}
                      placeholder="00.000.000/0000-00"
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-white">
                  CPF
                </label>
                <InputMask
                  mask="999.999.999-99"
                  value={formData.cpf}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="cpf"
                      name="cpf"
                      className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)'
                      }}
                      placeholder="000.000.000-00"
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-white">
                  WhatsApp
                </label>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="whatsapp"
                      name="whatsapp"
                      className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)'
                      }}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 w-full bg-transparent border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)'
                  }}
                  placeholder="Como posso te ajudar?"
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
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  {isLoading ? 'Enviando...' : 'Enviar E-mail'}
                </Button>
                <Button 
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.498 14.382l-.001-.001-.003.002c-.323.242-.529.623-.529 1.06 0 .334.117.655.329.9l.006.007.004.009c.2.25.49.401.8.401h.006c.138 0 .274-.028.4-.083l.01-.004.018-.01.027-.018.02-.017.01-.01 2.72-2.22c.3-.245.48-.61.48-1.009v-7.5a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v10a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-1.5z" />
                    <path d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
