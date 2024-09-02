'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const FoxIcon: React.FC = (props) => {
  const { toggleTheme } = useTheme();
  return (
    <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    onClick={toggleTheme} 
   
    >
    <path
      d="M30,60 Q10,40 30,30 Q50,10 70,30 Q90,40 70,60 Q50,80 30,60"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />

    <path
      d="M30,30 L25,10 Q30,5 35,10 L30,30"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />
    <path
      d="M70,30 L75,10 Q70,5 65,10 L70,30"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />

    <path
      d="M40,50 Q45,45 50,50"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />
    <path
      d="M60,50 Q55,45 50,50"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />

    <path
      d="M45,60 Q50,65 55,60"
      fill="none"
      stroke="#e25822"
      strokeWidth="2"
    />
    <circle cx="50" cy="55" r="1" fill="#e25822" />
  
    </svg>
);
  
 
};

export default FoxIcon;
