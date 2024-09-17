// components/Portfolio.js
'use client';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import awsLogo from '../../public/aws-logo.png';
import reactLogo from '../../public/react-logo.png';
import zohoLogo from '../../public/zoho-logo.png';
import nextLogo from '../../public/next-logo.png';
import tsLogo from '../../public/ts-logo.png';

const Portfolio = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Portafolio de Desarrollador Frontend</h1>
          <p className="text-lg">Especialista en React.js, Next.js, y tecnologías AWS</p>
        </header>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Sobre Mí</h2>
            <p>
              Soy un desarrollador frontend con experiencia en React.js, Next.js y TypeScript. He trabajado en startups administrando ERP con CRM de Real Estate y tengo conocimientos avanzados en AWS.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <Image src={awsLogo} alt="AWS Logo" width={50} height={50} />
                <span className="ml-2">AWS (Cognito, Gateway API, Step Functions, S3, EC2, ECS, DynamoDB)</span>
              </div>
              <div className="flex items-center">
                <Image src={reactLogo} alt="React Logo" width={50} height={50} />
                <span className="ml-2">React.js</span>
              </div>
              <div className="flex items-center">
                <Image src={zohoLogo} alt="Zoho Logo" width={50} height={50} />
                <span className="ml-2">Zoho</span>
              </div>
              <div className="flex items-center">
                <Image src={nextLogo} alt="Next.js Logo" width={50} height={50} />
                <span className="ml-2">Next.js</span>
              </div>
              <div className="flex items-center">
                <Image src={tsLogo} alt="TypeScript Logo" width={50} height={50} />
                <span className="ml-2">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12">
          <p>© 2024 Desarrollador Frontend</p>
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;
