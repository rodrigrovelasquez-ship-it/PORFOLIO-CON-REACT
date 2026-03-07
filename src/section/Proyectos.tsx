/*Sirve para: renderizar la sección de proyectos destacados.*/

import SectionTitle from "../components/main/SectionTittle";

export default function Proyectos () {
  const projects = [
    {
      title: 'Barberia Milca Barber Shop',
      description: 'Este pequeño proyecto es algo basico ya que es para un amigo que corta cabello y le propuse hacer una pagina para que sus clientes puedan contactarlo y ver sus trabajos.',
      url: 'https://rodrigrovelasquez-ship-it.github.io/Milca-Barber-Studio/',
      external: true,   
    },

    { 
      title: 'Portafolio personal',
      description: 'Esta pagina es mi portafolio personal donde muestro mis proyectos y habilidades.',
    },

    {
      title: 'Trabajo realizado en clase',
      description: 'Lo que vamos aprendiendo en cada clase lo voy aplicando en proyectos pequeños para practicar y entender mejor cada concepto. Es una forma de afianzar lo visto y tener ejemplos concretos de cada tema.',
    },

  ];

  return (
    <section id="Proyectos" className=" mx-auto w-full max-w-6xl px-6 py-24">
      <SectionTitle title="Proyectos" />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3  ">
        {projects.map((project) => (
          <article key={project.title} className=" rounded-xl border border-slate-700 bg-slate-800/40 p-5">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}