import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
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
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.empresa || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulação de envio de email - aqui você pode integrar com EmailJS ou outro serviço
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Dados do formulário enviados:", formData);
      
      // Mostrar diálogo de sucesso
      setShowSuccessDialog(true);
      
      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        mensagem: ""
      });
      
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vamos Conversar sobre sua
                <span className="block text-green-400">Integração Stone</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                        className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                        onClick={info.action}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <info.icon className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{info.title}</h4>
                              <p className="text-gray-300 text-sm">{info.value}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h4 className="text-xl font-bold text-white mb-4">
                    🚀 Consultoria Gratuita
                  </h4>
                  <p className="text-gray-300 mb-6">
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

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Solicite um Orçamento
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-gray-300 mb-2">Nome Completo</Label>
                    <Input 
                      id="nome"
                      type="text" 
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2">E-mail</Label>
                    <Input 
                      id="email"
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="empresa" className="text-gray-300 mb-2">Empresa</Label>
                    <Input 
                      id="empresa"
                      type="text" 
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem" className="text-gray-300 mb-2">Mensagem</Label>
                    <Textarea 
                      id="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto e necessidades..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Enviando..." : "📧 Enviar Solicitação"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diálogo de Sucesso */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-gray-800 border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-center text-2xl">
              ✅ Email Enviado com Sucesso!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300 text-center text-lg">
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
