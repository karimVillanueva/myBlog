// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import FoxIcon from './FoxIcon';

const HeroContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Estado para controlar cuándo mostrar el párrafo con el efecto
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    // Retrasar la aparición del párrafo después de n segundos (por ejemplo, 2 segundos)
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 2000); // 2000 ms = 2 segundos

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center h-screen w-screen px-4 ${
        theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-[#eeebd4] text-black'
      }`}
    >
      <FoxIcon />
      <h1 className="typing text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono inline-block max-w-max mt-4">
        AI art in web design.
      </h1>
      {showParagraph && ( // Renderizar el párrafo solo cuando showParagraph sea true
        <p className="mt-4 max-w-xl fade-in text-sm sm:text-base md:text-lg lg:text-xl">
          Creating a website that showcases an art style can be complicated, especially when we consider that art is a creation of the human mind and is unique.
        </p>
      )}
    </div>
  );
};

export default HeroContent;
  