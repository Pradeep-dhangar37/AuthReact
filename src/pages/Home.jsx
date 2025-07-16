
import React, { useContext } from 'react';
import Header from '../components/Header';
import { ThemeContext } from '../../context/ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const containerClass = theme === 'dark'
    ? 'min-h-screen bg-gray-900 text-white'
    : 'min-h-screen bg-white text-black';

  return (
    <div className={containerClass}>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-2">This is the home screen content.</p>
      </div>
    </div>
  );
}
