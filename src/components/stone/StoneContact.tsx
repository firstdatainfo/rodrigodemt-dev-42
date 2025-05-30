
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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

const StoneContact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: ""
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const lastErrorTime = useRef<number>(0);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.email || !formData.empresa || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Evita múltiplas tentativas em sequência
    const now = Date.now();
    if (now - lastErrorTime.current < 30000) { // 30 segundos de espera
      toast({
        title: "Aguarde",
        description: "Por favor, aguarde alguns segundos antes de tentar novamente.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // Aqui você pode adicionar o código para enviar por e-mail se necessário
      // Por enquanto, vamos apenas mostrar o diálogo de sucesso
      
      // Mostrar diálogo de sucesso
      setShowSuccessDialog(true);
      
      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        mensagem: ""
      });
      
      // Resetar contador de erros em caso de sucesso
      setErrorCount(0);
      
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua solicitação e entraremos em contato em breve.",
      });
      
    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
      lastErrorTime.current = now;
      setErrorCount(prev => prev + 1);
      
      let errorMessage = "Não foi possível enviar sua mensagem. Por favor, tente novamente.";
      
      if (error?.text?.includes('Yahoo: Invalid login')) {
        errorMessage = "Problema na autenticação do e-mail. Por favor, entre em contato pelo WhatsApp.";
      } else if (errorCount > 2) {
        errorMessage = "Muitas tentativas sem sucesso. Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp.";
      }
      
      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Formata a mensagem para o WhatsApp
    const message = `*Nova solicitação de integração Stone*%0A%0A` +
                   `*Nome:* ${formData.nome}%0A` +
                   `*E-mail:* ${formData.email}%0A` +
                   `*Empresa:* ${formData.empresa}%0A` +
                   `*Mensagem:* ${formData.mensagem}`;
    
    const phoneNumber = '5566992480993';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Não limpa o formulário para permitir que o usuário envie por e-mail depois se quiser
    
    toast({
      title: "WhatsApp aberto!",
      description: "Por favor, envie sua mensagem pelo WhatsApp.",
    });
    
    // Incrementa o contador de erros para o WhatsApp também
    setErrorCount(prev => prev + 1);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 via-primary to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
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
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-white/90 mb-2">Nome Completo</Label>
                    <Input 
                      id="nome"
                      type="text" 
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder:text-white/50"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white/90 mb-2">E-mail</Label>
                    <Input 
                      id="email"
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
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
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
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
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      className="w-full bg-black/40 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors resize-none placeholder:text-white/50"
                      placeholder="Conte-nos sobre seu projeto e necessidades..."
                      required
                    />
                  </div>
                  
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
        </div>
      </section>

      {/* Diálogo de Sucesso */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-black/90 backdrop-blur-sm border border-white/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-center text-2xl">
              ✅ Email Enviado com Sucesso!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/80 text-center text-lg">
              Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato em breve para apresentar as melhores soluções Stone para seu negócio.
              <br /><br />
              <strong>Obrigado pelo interesse!</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="justify-center">
            <AlertDialogAction 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-2 rounded-lg font-semibold"
            >
              Entendi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default StoneContact;
