/**
 * Archivo: App.tsx
 * Sirve para: actuar como componente raíz que monta el layout principal del portfolio.
 * Consejo: mantén App simple y delega el contenido grande a layouts/secciones.
 */
import './App.css';
import { MainLayout } from './layout/MainLayout';

function App() {
  return <MainLayout />;
}

export default App;
