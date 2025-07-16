// src/components/Header.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const headerClass = theme === 'dark'
    ? 'p-4 bg-gray-800 flex justify-between items-center'
    : 'p-4 bg-gray-200 flex justify-between items-center';
  const linkClass = theme === 'dark'
    ? 'text-sm font-medium text-white'
    : 'text-sm font-medium text-black';

  return (
    <header className={headerClass}>
      <div className="space-x-4">
        <Link to="/home" className={linkClass}>Home</Link>
        <Link to="/profile" className={linkClass}>Profile</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}
