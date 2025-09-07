import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Mail, X, Menu } from 'lucide-react';
import { useActiveLink } from '@/hooks/useActiveLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { activeLink } = useActiveLink();

  const navLinks = [
    { to: "/", icon: <Home className="h-5 w-5" />, text: "Home" },
    { to: "/about", icon: <User className="h-5 w-5" />, text: "About" },
    { to: "/services", icon: <Briefcase className="h-5 w-5" />, text: "Services" },
    { to: "/contact", icon: <Mail className="h-5 w-5" />, text: "Contact" },
    { to: "/blog", icon: <FileText className="h-5 w-5" />, text: "Blog" },
  ];

  const isActive = (path: string) => {
    return activeLink === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook.svg', url: '#' },
    { name: 'Twitter', icon: 'twitter.svg', url: '#' },
    { name: 'Instagram', icon: 'instagram.svg', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin.svg', url: '#' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/pokum/icons/pokum.svg" 
              alt="Pokum" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
className={`flex items-center space-x-2 transition-colors ${isActive(link.to)}`}
              >
                {link.icon}
                <span className="font-medium">{link.text}</span>
              </Link>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label={social.name}
              >
                <img 
                  src={`/pokum/icons/${social.icon}`} 
                  alt={social.name} 
                  className="h-5 w-5"
                />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors ${isActive(link.to)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span className="font-medium">{link.text}</span>
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-500 hover:text-blue-600 p-2"
                  aria-label={social.name}
                >
                  <img 
                    src={`/pokum/icons/${social.icon}`} 
                    alt={social.name} 
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
