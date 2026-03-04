/**
 * Archivo: Header.tsx
 * Sirve para: mostrar la barra de navegación principal y los enlaces de secciones del portfolio.
 * Consejo: centraliza aquí el array del menú para mantener navegación y etiquetas en un solo lugar.
 */
import './Header.css'

const menu = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  return (
    <header className="portfolio-header sticky top-0 z-50 border-b border-slate-700/60 bg-slate-900/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-lg font-bold tracking-wide text-white">
            Rodrigo.React
        </a>

        <ul className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-slate-300 sm:gap-5">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-indigo-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
