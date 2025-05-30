
 import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";

// ID do formulário no Formspree
const FORMSPREE_FORM_ID = 'xrgwqyop';  // Substitua pelo ID do seu novo formulário

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nova mensagem de ${formData.name}`,
          _format: 'plain',
          _language: 'pt',
          _template: 'table',
          _next: window.location.href
        }),
      });
      
      if (response.ok) {
        // Sucesso
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setIsSuccess(true);
        
        toast({
          title: "Mensagem enviada!",
          description: "Retornarei o mais breve possível.",
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
      toast({
        title: "Erro ao enviar mensagem",
        description: "Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const message = `Olá, meu nome é ${formData.name}. ${formData.message}`.substring(0, 140);
    const phone = '5566992480993';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    const whatsappMessage = `*Nova mensagem do site*%0A%0A` +
                         `*Nome:* ${formData.name}%0A` +
                         `*E-mail:* ${formData.email}%0A` +
                         `*Mensagem:* ${formData.message}`;
    
    const phoneNumber = '5566992480993';
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Não limpa o formulário para permitir que o usuário envie por e-mail depois se quiser
    
    toast({
      title: "WhatsApp aberto!",
      description: "Por favor, envie sua mensagem pelo WhatsApp.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600">Estou pronto para ajudar no seu próximo projeto!</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-primary p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <a href="tel:+5566992480993" className="hover:underline">(66) 99248-0993</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <a href="mailto:contato@rodrigodevmt.com" className="hover:underline">contato@rodrigodevmt.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Localização</h4>
                    <p>Mato Grosso, Brasil</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/rodrigodevmt/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Mensagem enviada!</h4>
                  <p className="text-gray-600">Entrarei em contato o mais breve possível.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-primary hover:underline font-medium"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Como posso te ajudar?"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 py-3 px-6 rounded-lg font-medium transition-colors"
                      onClick={handleWhatsAppClick}
                      disabled={isLoading}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
