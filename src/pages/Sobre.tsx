
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Code, Heart, Users, Award, MapPin, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RodrigoDevLogo from "@/components/RodrigoDevLogo";

const Sobre = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:rodrigodev@yahoo.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5566992480993', '_blank');
  };
  
  const handleSocialRedirect = (platform: string) => {
    const links = {
      github: 'https://github.com/RodrigoDevMT',
      instagram: 'https://instagram.com/first_developer_mt',
      linkedin: 'https://linkedin.com/in/rodrigodevmt'
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };
  
  const skills = ["Flutter & FlutterFlow", "React & TypeScript", "Node.js & Python", "Automação Industrial", "IoT & Sensores", "Inteligência Artificial", "Cloud Computing", "Banco de Dados"];
  
  const achievements = [{
    icon: Award,
    title: "5+ Anos",
    description: "Experiência em desenvolvimento"
  }, {
    icon: Users,
    title: "100+",
    description: "Projetos entregues"
  }, {
    icon: Heart,
    iconColor: "text-red-500",
    title: "80+",
    description: "Clientes satisfeitos"
  }, {
    icon: Code,
    title: "10+",
    description: "Tecnologias dominadas"
  }];
  
  const quickLinks = [{
    name: "Início",
    href: "/"
  }, {
    name: "Sistema de Eventos",
    href: "/sistema-eventos"
  }, {
    name: "Integração Stone",
    href: "/sistema-stone"
  }, {
    name: "Sistema de Automações",
    href: "/sistema-automacoes"
  }, {
    name: "Contato",
    href: "#contato"
  }];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-primary to-red-900 relative overflow-hidden">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          
        </Link>
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section com logo */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Sobre
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Rodrigo Dev MT
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Desenvolvedor apaixonado por tecnologia, especializado em criar soluções inovadoras 
                  que transformam negócios e melhoram a vida das pessoas.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handleContactClick} 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    💬 Vamos Conversar
                  </Button>
                  <Button 
                    onClick={() => handleSocialRedirect('github')} 
                    variant="outline" 
                    className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Links Rápidos */}
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Links <span className="text-green-400">Rápidos</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link, index) => 
                  link.href.startsWith('#') ? 
                    <button 
                      key={index} 
                      onClick={scrollToContact}
                      className="bg-black/30 hover:bg-black/40 backdrop-blur-sm p-4 rounded-lg text-white hover:text-green-300 font-semibold transition-all duration-300 hover:scale-105 border border-white/30"
                    >
                      {link.name}
                    </button> : 
                    <Link key={index} to={link.href} className="bg-black/30 hover:bg-black/40 backdrop-blur-sm p-4 rounded-lg text-white hover:text-green-300 font-semibold transition-all duration-300 hover:scale-105 border border-white/30">
                      {link.name}
                    </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                Minha <span className="text-green-400">História</span>
              </h2>
              
              <div className="bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12">
                <div className="space-y-8 text-lg text-white/90 leading-relaxed">
                  <p>
                    Olá! Sou o <strong>Rodrigo Dev MT</strong>, desenvolvedor full stack natural de <strong>Mato Grosso</strong>. 
                    Minha jornada na tecnologia começou há mais de cinco anos, guiada pela paixão por 
                    criar soluções inovadoras que realmente façam diferença na vida das pessoas.
                  </p>
                  
                  <p>
                    Minha expertise está no desenvolvimento de <strong>aplicativos móveis com Flutter</strong>, na criação de 
                    <strong> sistemas web modernos e escaláveis</strong>, na implementação de <strong>soluções em automação industrial</strong> e 
                    em <strong>integrações com meios de pagamento digitais</strong>, como <strong>Stone, Mercado Pago, PagSeguro, 
                    Elgin, Sipag, Getnet</strong> e outros. Acredito que a tecnologia deve ser intuitiva, acessível e 
                    voltada para resolver problemas reais — sempre priorizando a experiência do usuário e a 
                    eficiência operacional.
                  </p>
                  
                  <p>
                    Além do desenvolvimento, sou entusiasta de <strong>automação residencial</strong>, <strong>Internet das Coisas (IoT)</strong> e 
                    <strong> inteligência artificial</strong>. Constantemente busco me atualizar sobre as tendências e inovações 
                    do mundo tech, para entregar soluções cada vez mais inteligentes, robustas e alinhadas às 
                    necessidades dos meus clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conquistas */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Minhas <span className="text-green-400">Conquistas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/30 text-center p-6 hover:bg-black/40 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center">
                      {achievement.icon === RodrigoDevLogo ? (
                        <div className="w-12 h-12 flex items-center justify-center">
                          <RodrigoDevLogo className="w-8 h-8" />
                        </div>
                      ) : (
                        <achievement.icon className={`w-8 h-8 ${achievement.iconColor || 'text-green-400'}`} />
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-white/80">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Minhas <span className="text-green-400">Especialidades</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/30 p-4 rounded-lg text-green-300 font-semibold hover:scale-105 hover:bg-black/40 transition-all duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Estou sempre aberto a novos desafios e projetos interessantes.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                      <MapPin className="w-5 h-5" />
                      <span>Mato Grosso, Brasil</span>
                    </div>
                    <button 
                      onClick={handleEmailClick}
                      className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/30 hover:bg-black/40 transition-all duration-300 cursor-pointer"
                    >
                      <Mail className="w-5 h-5" />
                      <span>rodrigodev@yahoo.com</span>
                    </button>
                    <button 
                      onClick={handlePhoneClick}
                      className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/30 hover:bg-black/40 transition-all duration-300 cursor-pointer"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(66) 99248-0993</span>
                    </button>
                    <Button 
                      onClick={handleContactClick} 
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.498 14.382v3.3a4.16 4.16 0 0 1-4.157 4.156H6.09a4.16 4.16 0 0 1-4.158-4.156V6.09a4.16 4.16 0 0 1 4.158-4.158h7.252a4.16 4.16 0 0 1 4.157 4.158v1.2l3.3-1.8v9.582l-3.3-1.8z"/>
                      </svg>
                      <span>Enviar mensagem</span>
                    </Button>
                  </div>
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Button 
                      onClick={() => handleSocialRedirect('github')} 
                      variant="outline" 
                      className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white p-3 rounded-lg font-semibold transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button 
                      onClick={() => handleSocialRedirect('linkedin')} 
                      variant="outline" 
                      className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-3 rounded-lg font-semibold transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button 
                      onClick={() => handleSocialRedirect('instagram')} 
                      variant="outline" 
                      className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white p-3 rounded-lg font-semibold transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative h-full flex flex-col gap-6">
                  {/* Imagem de perfil */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl h-64">
                    <img 
                      src="https://id-preview--6dee4a4d-9690-4924-96dc-a80269ce4cc1.lovable.app/lovable-uploads/55b966e4-bb87-4ffa-9a1c-be681f439d2f.png" 
                      alt="Rodrigo Dev MT" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Rodrigo Dev MT</h3>
                        <p className="text-green-300 font-medium">Desenvolvedor Full Stack</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Code */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">Fale pelo WhatsApp</h3>
                    <div className="flex justify-center">
                      <div className="bg-white p-2 rounded-lg">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5566992480993?text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento..." 
                          alt="QR Code para WhatsApp" 
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-300">Escaneie para iniciar uma conversa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
