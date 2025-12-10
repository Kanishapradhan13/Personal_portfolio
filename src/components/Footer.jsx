import { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Kanishapradhan13',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#', // UPDATE: Add LinkedIn profile URL
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:kanisapradhan@gmail.com',
    },
  ];

  return (
    <footer className="bg-dark-900/50 border-t border-dark-800 relative">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">&lt;Kanisha /&gt;</h3>
            <p className="text-dark-400 mb-4">
              Full Stack Developer passionate about creating innovative solutions and exceptional user experiences.
            </p>
            <p className="text-dark-500 text-sm">
              Based in Thimphu, Bhutan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-dark-400 text-sm mb-2">
              <a
                href="mailto:kanisapradhan@gmail.com"
                className="hover:text-primary-400 transition-colors"
              >
                kanisapradhan@gmail.com
              </a>
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-500 text-sm text-center md:text-left">
              © {currentYear} Kanisha. All rights reserved.
            </p>
            <p className="text-dark-500 text-sm flex items-center space-x-2">
              <span>Built with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
