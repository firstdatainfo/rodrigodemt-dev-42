import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Vamos conversar sobre seu projeto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-accent-foreground" />
                <span className="text-white">first_developer_mt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-foreground" />
                <span className="text-white">(66) 99248-0993</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-foreground" />
                <span className="text-white">rodrigodev@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-foreground" />
                <span className="text-white">Mato Grosso</span>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-accent-foreground focus:ring-accent-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-accent-foreground focus:ring-accent-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-accent-foreground focus:ring-accent-foreground"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-accent-foreground hover:bg-accent-foreground/90 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;