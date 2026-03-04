/**
 * Archivo: Qsomos.tsx
 * Sirve para: mostrar la sección "Quiénes somos" del sitio.
 * Consejo: revisa nombres y textos (ortografía/ids) porque ayudan mucho a mantener el proyecto claro.
 */

// SobreMi es = arrow funcion ES6
const SobreMi = () => {
  //bloque de la funcion
  return (
    <section id="sobre-mi" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold">Sobre mí</h2>
      <p className="mt-5 max-w-3xl text-slate-300">
        Estudiante de 1° año aprendiendo de todo un para para poder ser un buen desarrolador.
        Me interesa el desarrollo aunque si es cierto que es complicado si no se conoce mucho de programacion.
      </p>

      <img
        src="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/571052605_4038363429760698_5712478845731746988_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=09AE4OM8c5AQ7kNvwHrkNUg&_nc_oc=AdkhpC0Y4bad3TNDaV3p2NDBnoYM-IEWG6mx8o2QCxqWZV3_1o3LliVpKczVc-TT3hI&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=MsRvPSpmrr82oYoKUojr-g&_nc_ss=8&oh=00_Afw_aa5f_0eH8MQmSOIIVqwWVUvFEZ_lfqINHXnaEljHuQ&oe=69AE24D0"
        alt="Foto de perfil"
        className="mt-8 h-48 w-48 rounded-full object-cover"
      />
    </section>
  )
}

export default SobreMi;
