'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/publications', label: 'Publications' },
  ];

  const isHomePage = pathname === '/';

  return (
      <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled || !isHomePage
                  ? 'bg-white text-primary shadow-lg'
                  : 'bg-transparent text-white'
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                  src="/images/logo.png"
                  alt="Society Logo"
                  className="h-20 w-20"
              />
              <span className="text-3xl font-bold">FES NSUT</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
}
