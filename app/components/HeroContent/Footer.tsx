// components/Footer.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import styles from './Footer.module.css'; // Importa el módulo CSS si usas módulos

const Footer: React.FC = () => {
  const { theme } = useTheme();

  // Define el estilo basado en el tema
  const footerClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';

  return (
    <div className={`p-2 ${footerClass} flex justify-center items-center ${styles.zoomInBlurOut}`}>
      <Link href="/explanation" passHref className={`flex items-center space-x-2 text-lg hover:underline ${styles.glowText}`}>
          <span>Explanation</span>
          <AiOutlineQuestionCircle className="text-2xl" />
      </Link>
    </div>
  );
};

export default Footer;
