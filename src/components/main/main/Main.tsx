/**
 * Archivo: Main.tsx
 * Sirve para: mostrar el contenido principal de la página.
 * Consejo: aquí puedes ir agregando secciones (about, proyectos, contacto) por bloques.
 */

import About from '../../../section/About';
import Projects from '../../../section/Proyectos';
import Contact from '../../../section/Contact';

export default function Main() {
  return (
    <main>
      {/* Bloque de bienvenida */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Deja tu perfil </h1>
        <p className="mt-3 text-base text-gray-600">
          En la seccion de abajo tendran que llenar un formulario con su nombre, correo y mensaje, para que puedan mandarme sus perfiles y poner dejarlos esta pagina
        </p>
      </section>

      {/* Sección "Sobre mí" */}
      <About />

      {/* Sección de proyectos */}
      <Projects />

      {/* Sección de contacto */}
      <Contact />
    </main>
  );
}
