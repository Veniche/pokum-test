import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveLink = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const path = location.pathname;
    
    // Set active link based on current path
    if (path === '/') {
      setActiveLink('/');
    } else if (path.startsWith('/about')) {
      setActiveLink('/about');
    } else if (path.startsWith('/services')) {
      setActiveLink('/services');
    } else if (path.startsWith('/blog') || path.startsWith('/article')) {
      setActiveLink('/blog');
    } else if (path.startsWith('/contact')) {
      setActiveLink('/contact');
    }
  }, [location]);

  return { activeLink };
};
