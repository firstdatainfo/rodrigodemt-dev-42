
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Code, Heart, Users, Award, MapPin, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const skills = [
    "Flutter & FlutterFlow",
    "React & TypeScript",
    "Node.js & Python",
    "Automação Industrial",
    "IoT & Sensores",
    "Inteligência Artificial",
    "Cloud Computing",
    "Banco de Dados"
  ];

  const achievements = [
    { icon: Award, title: "5+ Anos", description: "Experiência em desenvolvimento" },
    { icon: Users, title: "100+", description: "Projetos entregues" },
    { icon: Heart, title: "50+", description: "Clientes satisfeitos" },
    { icon: Code, title: "10+", description: "Tecnologias dominadas" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            size="sm"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </Link>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Sobre
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Rodrigo Dev MT
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Desenvolvedor apaixonado por tecnologia, especializado em criar soluções inovadoras 
                    que transformam negócios e melhoram a vida das pessoas.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={handleContactClick}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      💬 Vamos Conversar
                    </Button>
                    <Button 
                      onClick={() => handleSocialRedirect('github')}
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                    RD
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Minha <span className="text-blue-600">História</span>
              </h2>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  Olá! Sou Rodrigo Oliveira, desenvolvedor de 39 anos, natural de Mato Grosso. 
                  Minha jornada na tecnologia começou há mais de 5 anos, movida pela paixão em 
                  criar soluções que realmente fazem a diferença na vida das pessoas.
                </p>
                
                <p>
                  Especializo-me em desenvolvimento mobile com Flutter, criação de sistemas web 
                  modernos e soluções de automação industrial. Acredito que a tecnologia deve 
                  ser acessível e resolver problemas reais, sempre priorizando a experiência 
                  do usuário e a eficiência dos processos.
                </p>
                
                <p>
                  Além do desenvolvimento, sou apaixonado por automação residencial, IoT e 
                  inteligência artificial. Sempre busco estar atualizado com as últimas 
                  tendências tecnológicas para oferecer as melhores soluções aos meus clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conquistas */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Minhas <span className="text-blue-600">Conquistas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                Minhas <span className="text-blue-600">Especialidades</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg text-blue-800 font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Estou sempre aberto a novos desafios e projetos interessantes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Mato Grosso, Brasil</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
                  <Mail className="w-5 h-5" />
                  <span>rodrigodev@yahoo.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
                  <Phone className="w-5 h-5" />
                  <span>(66) 99248-0993</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleContactClick}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  💬 WhatsApp
                </Button>
                <Button 
                  onClick={() => handleSocialRedirect('github')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                  onClick={() => handleSocialRedirect('instagram')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
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
