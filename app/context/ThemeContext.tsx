// context/ThemeContext.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    // Verificación del lado del cliente
    if (typeof window !== 'undefined') {
      // Intenta obtener la preferencia guardada del usuario
      const storedTheme = localStorage.getItem('theme');

      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        // Si no hay preferencia guardada, usa la preferencia del navegador
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }

      // Configurar el listener para detectar cambios en el tema del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {  // Solo cambia si no hay preferencia del usuario
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      // Agregar el listener
      mediaQuery.addEventListener('change', handleChange);

      // Limpieza del efecto
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Función para alternar el tema manualmente
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
