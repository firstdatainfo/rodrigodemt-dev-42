
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O tempo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 1-2 semanas, enquanto sistemas mais complexos podem levar de 1-3 meses. Sempre fornecemos um cronograma detalhado após a análise inicial."
  },
  {
    question: "Vocês oferecem suporte pós-entrega?",
    answer: "Sim! Oferecemos suporte técnico completo por 3 meses após a entrega, incluindo correções de bugs, pequenos ajustes e treinamento da equipe. Também temos planos de manutenção contínua."
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos com tecnologias modernas como React, Flutter, Node.js, Python, Firebase, Supabase, ESP32 para IoT, e muito mais. Sempre escolhemos a melhor tecnologia para cada projeto específico."
  },
  {
    question: "Vocês trabalham com automação industrial?",
    answer: "Sim! Temos experiência em automação industrial, residencial e comercial. Desenvolvemos sistemas de controle, monitoramento IoT, integração com equipamentos e dashboards em tempo real."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo inclui: 1) Análise e levantamento de requisitos, 2) Prototipagem e design, 3) Desenvolvimento iterativo, 4) Testes rigorosos, 5) Entrega e treinamento, 6) Suporte pós-entrega."
  },
  {
    question: "Vocês fazem projetos para pequenas empresas?",
    answer: "Absolutamente! Atendemos desde pequenas empresas até grandes corporações. Temos soluções escaláveis e personalizadas para cada tamanho de negócio e orçamento."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-white/20 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-up">
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            💬 Fale Conosco no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
