'use client';
import HeroContent from "./components/HeroContent";
import { ThemeProvider } from './context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
    <main className=" items-center justify-center" >     
      <HeroContent/>
    </main>
    </ThemeProvider>
  );
}
