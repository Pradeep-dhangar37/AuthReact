// src/pages/Profile.jsx
import React, { useContext } from 'react';
// import Header from '../components/Header';
import Header from '../../components/Header';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const containerClass = theme === 'dark'
    ? 'min-h-screen bg-gray-900 text-white'
    : 'min-h-screen bg-white text-black';

  return (
    <div className={containerClass}>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <p className="mt-2">Username: johndoe</p>
        <p>Email: john@example.com</p>
      </div>
    </div>
  );
}
