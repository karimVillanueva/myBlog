// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import FoxIcon from './FoxIcon';
import Footer from './Footer';
import animations from './styles/animations.module.css'; // Importa el módulo CSS de animaciones

const HeroContent: React.FC = () => {
  const { theme } = useTheme();

  // Estado para controlar cuándo mostrar el párrafo con el efecto
  const [showParagraph, setShowParagraph] = useState(false);
  // Estado para controlar cuándo mostrar el footer
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Retrasar la aparición del párrafo después de 2.5 segundos
    const paragraphTimer = setTimeout(() => {
      setShowParagraph(true);
    }, 2500); // 2500 ms = 2.5 segundos

    // Retrasar la aparición del footer después de 6 segundos
    const footerTimer = setTimeout(() => {
      setShowFooter(true);
    }, 6000); // 6000 ms = 6 segundos

    // Limpiar los temporizadores cuando el componente se desmonte
    return () => {
      clearTimeout(paragraphTimer);
      clearTimeout(footerTimer);
    };
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-[#eeebd4] text-black'}`}
    >
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <FoxIcon />
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono inline-block max-w-max mt-4 ${animations.typing}`}>
          AI art in web design.
        </h1>
        {showParagraph && (
          <p className={`mt-4 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl ${animations["fade-in"]}`}>
            Creating a website that showcases an art style can be complicated, especially when we consider that art is a creation of the human mind and is unique.
          </p>
        )}
        {showFooter && (
          <footer className={`mt-8 p-4 ${animations["zoom-in"]}`}>
            <Footer />
          </footer>
        )}
      </main>
    </div>
  );
};

export default HeroContent;
