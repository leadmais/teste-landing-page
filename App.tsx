import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import ThankYou from './components/ThankYou';
import { cars } from './config';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 1. Thank You Page
  if (currentPath === '/obrigado') {
    return <ThankYou />;
  }

  // 2. Extract Slug (e.g., "/kona" -> "kona")
  // Remove trailing slashes and the leading slash
  const slug = currentPath.replace(/^\/+|\/+$/g, '');

  // 3. Home Page (Root)
  if (!slug) {
    document.title = "Hyundai Auto | Escolha seu Carro";
    return <HomePage />;
  }

  // 4. Dynamic Car Pages
  const carData = cars[slug];

  if (carData) {
    return <LandingPage car={carData} />;
  }

  // 5. 404 / Fallback (Redirect to Home logic or simple 404 view)
  // For now, let's just show the Home page if the car isn't found
  return <HomePage />;
};

export default App;