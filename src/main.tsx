/**
 * main.tsx
 * Punto de entrada de la aplicación.
 * Aquí React "arranca" y renderiza tu componente principal dentro de #root.
 */

// 1) Importa herramientas base de React.
import { StrictMode } from 'react';

// 2) Importa la API moderna para montar React en el DOM.
import { createRoot } from 'react-dom/client';

// 3) Importa estilos globales (tipografías, reset, variables, etc.).
import './index.css';

// 4) Importa el componente principal de tu app.
import App from './App';

// 5) Busca el contenedor raíz que viene del index.html: <div id="root"></div>
const rootElement = document.getElementById('root');

// 6) Si no existe, detenemos la ejecución con un error claro.
if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html');
}

// 7) Crea la raíz de React y renderiza la app.
createRoot(rootElement).render(
  // StrictMode ayuda a detectar malas prácticas en desarrollo.
  <StrictMode>
    {/* App es tu componente principal (la "página" base). */}
    <App />
  </StrictMode>,
);
