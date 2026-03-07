
const formacionData = [
  {
    id: 1,
    title: 'OpenWebinars',
    href: '#',
    description: 'Curso basico crear tu propia APP en Android Studio.  (Terminado)',
    date: '09-02-2026',
    datetime: '09-02-2026',
    category: { title: 'Desarrollo', href: '#' },
    author: {
      name: 'Manuel Agudo',
      role: 'CO de OpenWebinars',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'Fundamentos de Python 1',
    href: '#',
    description: 'Aprender conceptos fundamentales de programacion inormatica y desarrollar habilidades de codificaion con ele lenguaje Python.(En curso)',
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
    },
  },
  {
    id: 3,
    title: 'Conceptos basicos de Flex y Grid',
    href: '#',
    description: 'Conocer las diferencias y conceptos basicos para usar Flex y Grid en CSS. (Terminado)',
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
    },
  },
]

const Formacion = () => {
    return (
        <section id="formacion" className="mx-auto w-full max-w-6xl px-6 py-24">
            <h2 className="text-3xl font-bold">Formación</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formacionData.map((item) => (
                <article key={item.id} className="rounded-xl border border-slate-700 bg-slate-800/40 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
        </section>
    )
}

export default Formacion;