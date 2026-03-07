/**
 * Archivo: MainLayout.tsx
 * Sirve para: construir la estructura principal de la web (header, secciones y footer).
 * Consejo: piensa el layout como "esqueleto"; primero ordena bloques y luego ajusta estilos.
 */
import Footer from '../components/main/footer/Footer';
import Header from '../components/main/header/Header';
import SobreMi from '../section/SobreMi';
import Formacion from '../section/Formacion';
import Skills from '../section/Skills';
import Proyectos from '../section/Proyectos';
import Contact from '../section/Contact';

export const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
        <Header />
        <main>
          <section id="inicio" className="mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center px-6 py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.20em] text-indigo-400">Portafolio</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Hola, soy Rodrigo y por aqui dejo mis trabajos y habilidades en React y Html 5.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Desarrollador enfocado en frontend con React. Aquí puedes ver quién soy, mi formación, habilidades,
              proyectos y un formulario para ponerte en contacto. 00000000000000
            </p>
            {/* <div className="mt-8">
              <a
                href="#proyectos"
                className="inline-flex rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
              >
                Ver proyectos
              </a>
            </div> */}
          </section>

          <SobreMi />
          <Formacion />
          <Skills />
          <Proyectos />
          <Contact />
        </main>
        <Footer />
    </div>
  )
}