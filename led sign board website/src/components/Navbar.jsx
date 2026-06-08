import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Layers, Lightbulb, Monitor, PanelTop, RectangleHorizontal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', hasDropdown: true },
    { name: 'Our Work', href: '/our-work', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  const serviceItems = [
    { name: 'Acrylic LED Letters', icon: Sparkles },
    { name: 'Channel Letter Signs', icon: Layers },
    { name: 'Neon Signs', icon: Lightbulb },
    { name: 'Outdoor Signage', icon: PanelTop },
    { name: 'Digital LED Displays', icon: Monitor },
    { name: 'ACP Sign Boards', icon: RectangleHorizontal },
  ];

  const isActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    }
    return false;
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_30px_rgba(0,0,0,0.04)]'
            : 'bg-white'
        }`}
      >
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group relative">
              {/* Logo icon */}
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-md shadow-primary-600/20 group-hover:shadow-lg group-hover:shadow-primary-600/30 transition-all duration-300 group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.3" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                  LUMI
                </span>
                <span className="text-[8px] tracking-[0.25em] text-gray-400 font-semibold mt-0.5 uppercase">
                  LED Signage
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <a
                        href={link.href}
                        className={`relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg group ${
                          isServicesOpen
                            ? 'text-primary-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </a>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100/80 py-2 transition-all duration-300 origin-top ${
                          isServicesOpen
                            ? 'opacity-100 visible scale-100 translate-y-0'
                            : 'opacity-0 invisible scale-95 -translate-y-1'
                        }`}
                      >
                        <div className="px-3 py-2">
                          <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase px-2">
                            Our Services
                          </p>
                        </div>
                        {serviceItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.name}
                              href={isHomePage ? '#services' : '/#services'}
                              className="flex items-center gap-3 mx-2 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50/70 transition-all duration-200 group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-primary-100/60 flex items-center justify-center transition-colors duration-200">
                                <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                              </div>
                              <span className="font-medium">{item.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                        isActive(link)
                          ? 'text-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.name}
                      {/* Active indicator */}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary-600 rounded-full transition-all duration-300 ${
                          isActive(link) ? 'w-5' : 'w-0'
                        }`}
                      />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="relative px-4 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 active:scale-[0.97]"
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-btn"
                className="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 w-5 h-[1.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'top-[9px] rotate-45'
                        : 'top-[4px] rotate-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[9px] w-5 h-[1.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-5 h-[1.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'top-[9px] -rotate-45'
                        : 'top-[14px] rotate-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl lg:hidden transition-transform duration-400 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile menu links */}
        <div className="px-4 py-6 space-y-1 overflow-y-auto h-[calc(100%-68px)]">
          {navLinks.map((link, index) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                  isActive(link)
                    ? 'text-primary-600 bg-primary-50/80'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {isActive(link) && (
                  <span className="w-1 h-1 rounded-full bg-primary-600" />
                )}
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-4 px-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile contact info */}
          <div className="pt-6 mt-4 border-t border-gray-100 px-4 space-y-3">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98765 43210
            </a>
            <a href="mailto:info@lumisignage.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@lumisignage.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
