import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xzbnbwzk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato, retornaremos em breve.",
        });

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Falha ao enviar mensagem');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-12 bg-gradient-to-b from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 relative z-30">
            <h3 className="text-2xl font-semibold mb-6 text-white">Vamos conversar sobre seu projeto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <a href="https://instagram.com/first_developer_mt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                  first_developer_mt
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+5566992480993" className="text-white hover:text-blue-300 transition-colors">
                  (66) 99248-0993
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:rodrigodev@yahoo.com" className="text-white hover:text-blue-300 transition-colors">
                  rodrigodev@yahoo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">Mato Grosso</span>
              </div>
            </div>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 relative z-30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary to-accent-foreground hover:from-secondary/90 hover:to-accent-foreground/90 text-white"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;