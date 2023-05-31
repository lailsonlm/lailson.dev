export default function About() {
  return (
    <section className="flex flex-col h-[calc(100vh-90px)] sm:h-[calc(100vh-64px)] w-full items-center mt-2 sm:mt-12">
      <div className="flex justify-center w-full max-w-[1200px] items-center flex-col gap-2 px-4">
        <div className="flex items-center justify-center">
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-title tracking-tight bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap'>Sobre Mim</h1>
        </div>
        <div className="flex items-center justify-center w-full max-w-4xl">
          <p className="font-light text-center text-xs sm:text-base">Desenvolvedor Full Stack, movido por desafios e solução de problemas. Formado em Administração de Empresas, cursando Graduação em Tecnologia em Análise e Desenvolvimento de Sistemas. Atualmente trabalho como freelancer com foco na construção de interfaces de alta performance utilizando as melhores stacks da atualizada. Também, produzo conteúdo para ajudar no crescimento da comunidade.</p>
        </div>
      </div>

      <div className="flex w-full justify-center overflow-y-scroll my-12 mb-12 px-4 z-20">
        <div className="grid grid-cols-2 max-w-[1200px] h-full w-full">
          <div className="flex items-center justify-end px-4 sm:px-12 py-4 sm:py-8 border-r border-white/10">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Certified SAFe 5 Product Owner/Product Manager - Scaled Agile Framework (SAFe) – 2023.</p>
          </div>
          <div className="flex items-center justify-start gap-2 py-4 sm:py-8 before:h-px before:w-5 before:bg-cyan-500">
            <p className="text-sm sm:text-base">2023</p>
          </div>

          <div className="flex items-center justify-end gap-2 py-4 sm:py-8 border-r border-white/10 after:h-px after:w-5 after:bg-cyan-500">
            <p className="text-sm sm:text-base">2022</p>
          </div>
          <div className="flex items-start px-4 sm:px-12 py-4 sm:py-8">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Certified SAFe 5 Agilist- Scaled Agile Framework (SAFe) – 2022.</p>
          </div>
          
          <div className="flex items-center justify-end px-4 sm:px-12 py-4 sm:py-8 border-r border-white/10">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Certificado Ignite (ReactJS) - Rocketseat.</p>
          </div>
          <div className="flex items-center justify-start gap-2 py-4 sm:py-8 before:h-px before:w-5 before:bg-cyan-500">
            <p className="text-sm sm:text-base">2022</p>
          </div>
          
          <div className="flex items-center justify-end gap-2 py-4 sm:py-8 border-r border-white/10 after:h-px after:w-5 after:bg-cyan-500">
            <p className="text-sm sm:text-base">2021</p>
          </div>
          <div className="flex items-start px-4 sm:px-12 py-4 sm:py-8">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Início dos estudos em frameworks e bibliotecas JavaScript voltadas para frontend, como React e Next.js e desenvolvimento dos primeiros projetos freelancer.</p>
          </div>
          
          <div className="flex items-center justify-end px-4 sm:px-12 py-4 sm:py-8 border-r border-white/10">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Depois de alguns anos atuando como Product Owner, Key User e gestão de projetos, decidi retomar os estudos em programação mais voltados para desenvolvimento web. Reforcei minha base em HTML, CSS e JavaScript.</p>
          </div>
          <div className="flex items-center justify-start gap-2 py-4 sm:py-8 before:h-px before:w-5 before:bg-cyan-500">
            <p className="">2020</p>
          </div>
          
          <div className="flex items-center justify-end gap-2 py-4 sm:py-8 border-r border-white/10 after:h-px after:w-5 after:bg-cyan-500">
            <p className="text-sm sm:text-base">2019</p>
          </div>
          <div className="flex items-start px-4 sm:px-12 py-4 sm:py-8">
            <p className="p-4 bg-white/10 border border-transparent rounded-md hover:border-cyan-500 transition-colors text-sm sm:text-base">Certified SAFe 4 Practitioner - Scaled Agile Framework (SAFe).</p>
          </div>
        </div>
      </div>
    </section>
  )
}