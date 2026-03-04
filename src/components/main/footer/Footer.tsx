/**
 * Archivo: Footer.tsx
 * Sirve para: mostrar el pie de página común con información final del sitio.
 * Consejo: pon aquí datos estables (año, autor, links) y evita lógica compleja.
 */


import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import RcFooter from 'rc-footer';

function Footer() {
  return (
    <RcFooter
      columns={[
        {
          icon: (
            <img className='w-16 h-7' alt='Tracker Valorant'
            src="https://www.tncstore.vn/media/lib/20-03-2025/valorant-tracker-la-gi-cach-su-dung4.jpg" />
          ),
          title: 'Tracker.gg',
          items: [
            {
              title: 'Mis Redes Sociales', className: 'text-gray-600 hover:text-blue-800 text-lg',
              url: 'https://tracker.gg/valorant/profile/riot/RodrigoSensei%23AKIO/matches?platform=pc&playlist=competitive&season=4c4b8cff-43eb-13d3-8f14-96b783c90cd2',
              description: '<--- Haz click ',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Redes Sociales',
          items: [
            {
              title: 'GitHub',
              url: 'https://github.com/rodrigrovelasquez-ship-it',
              description: 'Tu repositorio de código',
              openExternal: true,
            },
            {
              title: 'Facebook',
              url: 'https://www.facebook.com/RodrigoMatiasOchoaVelasquez',
              description: 'Perfil personal',
              openExternal: true,
            },
            {
              title: 'Instagram',
              url: 'https://www.instagram.com/rodrigomov20/',
              description: 'Perfil personal',
              openExternal: true,
            },
          ],
        },
      ]}
    bottom="Rodrigo Ochoa Velasquez ©2026 Creado en React" 
    />
  );
}

export default Footer;