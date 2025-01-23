const AboutMe = () => {
  return (
    <div className="w-full max-w-[90%] md:max-w-4xl mx-auto mt-16 mb-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Sobre Mim</h2>
      <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 shadow-xl">
        <div className="space-y-6">
          <p className="text-lg text-white/90 leading-relaxed">
            Rodrigo Oliveira é um desenvolvedor de 39 anos, apaixonado por sistemas e tecnologia. Com uma sólida formação em desenvolvimento de software, ele tem se destacado na criação de soluções inovadoras que otimizam processos e melhoram a experiência do usuário.
          </p>
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Experiência Profissional</h4>
            <p className="text-lg text-white/80 leading-relaxed">
              Rodrigo acumulou experiência em diversas áreas da tecnologia, incluindo desenvolvimento web, aplicativos móveis e sistemas de gestão. Ele já trabalhou em projetos desafiadores que exigiram habilidades em linguagens de programação como Java, Python e JavaScript, além de ter experiência com bancos de dados e metodologias ágeis.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Interesses e Hobbies</h4>
            <p className="text-lg text-white/80 leading-relaxed">
              Fora do ambiente profissional, Rodrigo é um entusiasta da tecnologia e adora acompanhar as últimas tendências do setor. Ele também se dedica a projetos pessoais, como desenvolver aplicativos que ajudam a resolver problemas do dia a dia. Além disso, é fã de jogos eletrônicos e frequentemente participa de comunidades online para compartilhar suas experiências e aprender com outros desenvolvedores.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Objetivos Futuros</h4>
            <p className="text-lg text-white/80 leading-relaxed">
              Rodrigo busca constantemente aprimorar suas habilidades e expandir seu conhecimento em áreas como inteligência artificial e aprendizado de máquina. Ele está sempre em busca de novos desafios que possam contribuir para seu crescimento profissional e pessoal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;