
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  CreditCard, 
  Smartphone, 
  QrCode, 
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Clock,
  MapPin,
  Ticket,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SistemaEventosNovo = () => {
  const features = [
    {
      icon: Calendar,
      title: "Gestão Completa de Eventos",
      description: "Organize eventos de qualquer tamanho com ferramentas profissionais de planejamento e controle.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Controle de Participantes",
      description: "Gerencie inscrições, check-ins e dados dos participantes em tempo real.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Pagamentos Integrados",
      description: "Aceite pagamentos via Stone, PagSeguro, Mercado Pago e outros meios de pagamento.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: QrCode,
      title: "Check-in com QR Code",
      description: "Validação rápida e segura de ingressos através de códigos QR personalizados.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Aplicativo móvel para organizadores e participantes com funcionalidades completas.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Analytics detalhados sobre vendas, participação e performance do evento.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const solutions = [
    {
      title: "Shows e Festivais",
      description: "Sistema completo para eventos musicais",
      icon: "🎵",
      features: ["Controle de acesso por setores", "Vendas online", "Check-in mobile"]
    },
    {
      title: "Conferências",
      description: "Gestão profissional de eventos corporativos",
      icon: "💼",
      features: ["Credenciamento", "Networking", "Certificados digitais"]
    },
    {
      title: "Esportes",
      description: "Organização de competições esportivas",
      icon: "🏆",
      features: ["Cronometragem", "Classificações", "Transmissão ao vivo"]
    },
    {
      title: "Casamentos",
      description: "Planejamento personalizado de casamentos",
      icon: "💒",
      features: ["Lista de convidados", "Confirmação de presença", "Menu personalizado"]
    }
  ];

  const stats = [
    { number: "50K+", label: "Eventos Organizados" },
    { number: "2M+", label: "Ingressos Vendidos" },
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-lg">
              <Ticket className="w-5 h-5 mr-2" />
              Sistema de Eventos Premium
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transforme Seus
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eventos em Sucesso
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Plataforma completa para organização de eventos com tecnologia de ponta, 
              pagamentos integrados e experiência excepcional para organizadores e participantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                <Play className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300"
                onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Funcionalidades <span className="text-purple-400">Avançadas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tudo que você precisa para organizar eventos memoráveis e lucrativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluções para <span className="text-purple-400">Cada Tipo de Evento</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-4 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{solution.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Revolucionar Seus Eventos?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de organizadores que já confiam na nossa plataforma
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
            >
              Solicitar Demonstração
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="flex items-center text-white/80 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Implementação em 24h
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SistemaEventosNovo;
