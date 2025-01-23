import React from 'react';

const ModulesGrid = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Sobre Mim</h2>
          <p className="text-white/80 mb-8">
            Rodrigo Oliveira é um desenvolvedor de 39 anos, apaixonado por sistemas e tecnologia. Com uma
            sólida formação em desenvolvimento de software, ele tem se destacado na criação de soluções
            inovadoras que otimizam processos e melhoram a experiência do usuário.
          </p>

          <h2 className="text-2xl font-bold text-white mb-8">Experiência Profissional</h2>
          <p className="text-white/80 mb-8">
            Rodrigo acumulou experiência em diversas áreas da tecnologia, incluindo desenvolvimento web,
            aplicativos móveis e sistemas de gestão. Ele já trabalhou em projetos desafiadores que exigiram
            habilidades em linguagens de programação como Java, Python e JavaScript, além de ter experiência
            com bancos de dados e metodologias ágeis.
          </p>

          <h2 className="text-2xl font-bold text-white mb-8">Interesses e Hobbies</h2>
          <p className="text-white/80">
            Além da programação, Rodrigo é entusiasta de novas tecnologias e está sempre em busca de
            aprendizado contínuo. Seu interesse por inovação o mantém atualizado com as últimas tendências
            do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;