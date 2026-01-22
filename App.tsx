
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Newsroom from './components/Newsroom';
import Careers from './components/Careers';
import About from './components/About';
import SignIn from './components/SignIn';

const App: React.FC = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';

  return (
    <div className="min-h-screen flex flex-col">
      {!isSignIn && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      {!isSignIn && <Footer />}
    </div>
  );
};

export default App;
