import { AnimationChildren } from "../animation";

export default function Projects() {
  return (
    <section className="flex flex-col h-[calc(100vh-120px)] sm:h-[calc(100vh-64px)] w-full items-center mt-12">
      <div className="flex justify-center w-full max-w-[1200px] items-center flex-col gap-2">
        <div className="flex items-center justify-center">
          <AnimationChildren>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-title tracking-tight bg-gradient-primary bg-clip-text text-transparent leading-normal'>Projetos</h1>
          </AnimationChildren>
        </div>
        <div className="flex items-center justify-center w-full">
          <AnimationChildren>
            <p className="font-light text-center">Página em desenvolvimento, em breve os projetos estarão disponíveis.</p>
          </AnimationChildren>
        </div>
      </div>
    </section>
  )
}