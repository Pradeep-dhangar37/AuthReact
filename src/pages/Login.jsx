import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [inputType, setInputType] = useState(null);
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const detectInputType = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (phoneRegex.test(value)) return 'phone';
    if (emailRegex.test(value)) return 'emailOrUsername';
    if (value.length >= 4) return 'emailOrUsername';
    return null;
  };

  const handleIdentifierChange = (e) => {
    const value = e.target.value.trim();
    setIdentifier(value);
    setInputType(detectInputType(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputType === 'phone'
      ? { phone: identifier, otp }
      : { identifier, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Login</h2>

        <input
          type="text"
          placeholder="Enter Email, Username, or Phone"
          value={identifier}
          onChange={handleIdentifierChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          required
        />

        {inputType === 'phone' && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            required
          />
        )}

        {inputType === 'emailOrUsername' && (
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            required
          />
        )}

        <button
          type="submit"
          disabled={!inputType}
          className={`w-full py-2 rounded-md text-white transition ${inputType
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
            }`}
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
