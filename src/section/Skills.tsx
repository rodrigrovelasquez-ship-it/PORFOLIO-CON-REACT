/**
 * Archivo: Skills.tsx
 * Sirve para: mostrar habilidades técnicas o personales.
 * Consejo: agrupa skills por categoría (frontend, backend, herramientas) para que sea más legible.
 */
import SectionTitle from "../components/main/SectionTittle";

export default function Skills() {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Git/GitHub', 'Node.js', 'Diseño responsivo'];

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionTitle title="Skills" />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-600 bg-slate-800/60 px-4 py-2 text-sm text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}