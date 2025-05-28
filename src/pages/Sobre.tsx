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
    title: "50+",
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
    name: "Bio Rodrigo Dev MT",
    href: "/sistema-erp"
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
  return <div className="min-h-screen bg-gradient-to-br from-blue-900 via-primary to-red-900 relative overflow-hidden">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </Link>
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section com logo */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={handleContactClick} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                      💬 Vamos Conversar
                    </Button>
                    <Button onClick={() => handleSocialRedirect('github')} variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova seção com foto pessoal */}
        <section className="py-16 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Conheça o <span className="text-green-400">Desenvolvedor</span>
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Rodrigo Oliveira, 39 anos, natural de Mato Grosso. Um profissional dedicado 
                    que combina experiência técnica com paixão pela inovação tecnológica.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Sempre em busca de novos desafios e oportunidades para aplicar a tecnologia 
                    de forma criativa e eficiente, focando em soluções que realmente fazem a diferença.
                  </p>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-400/20">
                      <img src="/lovable-uploads/55b966e4-bb87-4ffa-9a1c-be681f439d2f.png" alt="Rodrigo Dev MT - Desenvolvedor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                      👨‍💻 Desenvolvedor
                    </div>
                  </div>
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
                {quickLinks.map((link, index) => link.href.startsWith('#') ? <a key={index} href={link.href} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg text-white hover:text-green-300 font-semibold transition-all duration-300 hover:scale-105 border border-white/20">
                      {link.name}
                    </a> : <Link key={index} to={link.href} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg text-white hover:text-green-300 font-semibold transition-all duration-300 hover:scale-105 border border-white/20">
                      {link.name}
                    </Link>)}
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
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
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
              {achievements.map((achievement, index) => <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-white/80">{achievement.description}</p>
                  </CardContent>
                </Card>)}
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
                {skills.map((skill, index) => <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-green-300 font-semibold hover:scale-105 hover:bg-white/20 transition-all duration-300">
                    {skill}
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Estou sempre aberto a novos desafios e projetos interessantes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <MapPin className="w-5 h-5" />
                  <span>Mato Grosso, Brasil</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <Mail className="w-5 h-5" />
                  <span>rodrigodev@yahoo.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <Phone className="w-5 h-5" />
                  <span>(66) 99248-0993</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button onClick={handleContactClick} className="bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-green-700">
                  💬 WhatsApp
                </Button>
                <Button onClick={() => handleSocialRedirect('github')} variant="outline" className="border-2 border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-zinc-50 text-green-700">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button onClick={() => handleSocialRedirect('instagram')} variant="outline" className="border-2 border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-emerald-50 text-green-700">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Sobre;