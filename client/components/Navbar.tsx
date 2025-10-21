import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useActiveLink } from "@/hooks/useActiveLink";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      // Check if any section is currently expanded by looking for the active-section class
      const isSectionExpanded = document.querySelector('.active-section') !== null;
      
      if (isSectionExpanded) {
        // If a section is expanded, keep the navbar hidden
        navRef.current?.classList.add('-translate-y-full');
        return;
      }
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        
        // Scrolling down
        if (isScrollingDown && currentScrollY > 10) {
          navRef.current?.classList.add('-translate-y-full');
        } 
        // Scrolling up
        else if (!isScrollingDown) {
          navRef.current?.classList.remove('-translate-y-full');
        }
      } else {
        setIsScrolled(false);
        navRef.current?.classList.remove('-translate-y-full');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');
  const location = useLocation();
  const { activeLink } = useActiveLink();

  const navLinks = [
    { to: "/", icon: "home.svg", text: "Home", isHome: true },
    { to: "/about", icon: "about.svg", text: "About", isHome: false },
    { to: "/services", icon: "services.svg", text: "Services", isHome: false },
    { to: "/contact", icon: "contact.svg", text: "Contact", isHome: false },
    { to: "/blog", icon: "articles.svg", text: "Blog", isHome: false },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook.svg", url: "https://www.facebook.com/share/1Baj8So5Tq/" },
    { name: "Twitter", icon: "tiktok.png", url: "https://www.tiktok.com/@pohonhukumindonesia?_t=ZS-90Yo6HcAlvN&_r=1" },
    { name: "Instagram", icon: "instagram.svg", url: "https://www.instagram.com/pokum.id" },
    { name: "LinkedIn", icon: "linkedin.svg", url: "https://www.linkedin.com/company/pokum-id" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav 
      ref={navRef}
      className={cn(
        "fixed w-full bg-white z-50 transition-transform duration-300",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="flex w-full px-4 sm:px-8 md:px-16 lg:px-[120px] py-6 md:py-12 justify-between items-center rounded-[20000px]">
        {/* Left section with Logo and Navigation */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg
              className="flex w-[85px] h-[28px]"
              width="85"
              height="28"
              viewBox="0 0 85 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.8823 22.331H73.3034V14.0135C73.3034 13.2237 73.1454 12.5919 72.8295 12.118C72.5136 11.6358 72.0023 11.3948 71.2957 11.3948C70.5891 11.3948 70.0196 11.6151 69.5873 12.0557C69.155 12.4963 68.9388 13.1613 68.9388 14.0509V22.331H65.3599V13.8514C65.3599 13.0034 65.1895 12.384 64.8487 11.9933C64.5078 11.5943 63.9633 11.3948 63.2151 11.3948C62.4669 11.3948 61.9099 11.6192 61.5441 12.0681C61.1783 12.5087 60.9954 13.1697 60.9954 14.0509V22.331H57.4165V8.73863H60.8458V10.7338H60.8957C61.6937 9.17092 63.0073 8.38947 64.8362 8.38947C66.4989 8.38947 67.7293 9.11273 68.5273 10.5593C69.4335 9.11273 70.6431 8.38947 72.1561 8.38947C73.5528 8.38947 74.6875 8.78851 75.5605 9.58659C76.4417 10.3764 76.8823 11.4904 76.8823 12.9286V22.331Z"
                fill="#3971E3"
              />
              <path
                d="M54.9463 22.3309H51.5295V20.4105H51.4796C50.5734 21.9319 49.1934 22.6926 47.3395 22.6926C45.9013 22.6926 44.7707 22.2686 43.9477 21.4206C43.1246 20.5726 42.7131 19.3256 42.7131 17.6796V8.73856H46.292V17.1683C46.292 18.0329 46.4916 18.6689 46.8906 19.0762C47.2896 19.4753 47.8633 19.6748 48.6115 19.6748C49.4179 19.6748 50.0788 19.4088 50.5942 18.8767C51.1096 18.3363 51.3674 17.5715 51.3674 16.5822V8.73856H54.9463V22.3309Z"
                fill="#3971E3"
              />
              <path
                d="M33.0853 22.331H29.5063V4.00003H33.0853V13.9013L37.5745 8.73865H41.9764L37.1754 14.001L42.1011 22.331H37.8114L34.5692 16.5075L33.0853 18.0413V22.331Z"
                fill="#3971E3"
              />
              <path
                d="M24.1682 15.535C24.1682 14.2381 23.898 13.2239 23.3576 12.4923C22.8256 11.7607 22.0192 11.3949 20.9384 11.3949C19.9325 11.3949 19.1428 11.7399 18.5691 12.4299C17.9955 13.1116 17.7087 14.1467 17.7087 15.535C17.7087 16.8984 17.9872 17.9292 18.5442 18.6276C19.1012 19.3259 19.8993 19.6751 20.9384 19.6751C22.0109 19.6751 22.8173 19.3134 23.3576 18.5902C23.898 17.8669 24.1682 16.8485 24.1682 15.535ZM27.8469 15.535C27.8469 17.7547 27.2067 19.5046 25.9265 20.7849C24.6545 22.0568 22.9919 22.6928 20.9384 22.6928C18.9183 22.6928 17.2598 22.061 15.9629 20.7974C14.6743 19.5254 14.03 17.7713 14.03 15.535C14.03 13.2821 14.6743 11.5279 15.9629 10.2726C17.2598 9.01731 18.9183 8.38965 20.9384 8.38965C23.0085 8.38965 24.6753 9.03394 25.9389 10.3225C27.2109 11.6028 27.8469 13.3403 27.8469 15.535Z"
                fill="#3971E3"
              />
              <path
                d="M3.4168 15.8466C3.4168 17.0437 3.69114 17.9956 4.23982 18.7022C4.78851 19.4005 5.56165 19.7497 6.55925 19.7497C7.47373 19.7497 8.19283 19.359 8.71658 18.5775C9.24032 17.7877 9.50219 16.8068 9.50219 15.6346C9.50219 14.2878 9.23201 13.2611 8.69164 12.5545C8.15958 11.8395 7.41553 11.482 6.45949 11.482C5.43695 11.482 4.67212 11.8561 4.165 12.6043C3.6662 13.3442 3.4168 14.425 3.4168 15.8466ZM3.4168 10.7089H3.47915C4.35205 9.16261 5.70298 8.38947 7.53192 8.38947C9.16134 8.38947 10.5081 9.01297 11.5722 10.26C12.6446 11.4987 13.1809 13.2071 13.1809 15.3852C13.1809 17.5217 12.6821 19.2758 11.6845 20.6475C10.6952 22.0109 9.28604 22.6926 7.4571 22.6926C5.66972 22.6926 4.39362 21.9943 3.62879 20.5977H3.57891V28H0V8.73863H3.4168V10.7089Z"
                fill="#3971E3"
              />
              <rect x="80" y="16" width="6" height="6" fill="#3971E3" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group flex h-[52px] ${activeLink === link.to ? 'px-8' : 'px-4 hover:px-8'} py-4 justify-center items-center gap-3 rounded-[2000px] transition-all duration-200 ${
                  activeLink === link.to 
                    ? 'bg-[#EBF1FC]' 
                    : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setHoveredLink(link.to)}
                onMouseLeave={() => setHoveredLink('')}
              >
                <img 
                  src={`/pokum/icons/${link.icon}`} 
                  alt={link.text} 
                  className="w-6 h-6"
                />
                {(activeLink === link.to || hoveredLink === link.to) && (
                  <span className="text-center font-bold text-lg leading-normal font-['Helvetica_World',_sans-serif] text-[#3971E3] transition-opacity duration-200">
                    {link.text}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right section with Social Links and Mobile Menu */}
        <div className="flex items-center gap-5">
          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex w-6 h-6 justify-center items-center rounded-[30000px] transition-opacity hover:opacity-70"
                aria-label={social.name}
              >
                <img
                  src={`/pokum/icons/${social.icon}`}
                  alt={social.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "max-h-[800px] py-8 opacity-100" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-8 pt-4 px-6 pb-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[28px] py-4 px-2 rounded-md hover:bg-gray-50 transition-colors ${
                activeLink === link.to
                  ? "text-[#2556BA] font-bold"
                  : "text-gray-800 font-normal"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
