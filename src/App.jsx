// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import ThemeProvider from './context/ThemeContext';
import ThemeProvider from '../context/ThemeContext';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
