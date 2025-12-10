import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Full Stack Developer', 'Software Engineer', 'UI/UX Enthusiast', 'DevSecOps Advocate'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-500/5 via-accent-500/5 to-primary-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-full px-4 py-2 mb-6 animate-fade-down">
            <MapPin size={16} className="text-primary-400" />
            <span className="text-dark-300 text-sm">Thimphu, Bhutan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up">
            Hi, I'm <span className="gradient-text">Kanisha</span>
          </h1>

          {/* Animated Role */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-dark-300 mb-6 h-12 md:h-14 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-dark-400 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            A passionate software engineering student at College of Science and Technology with 4 years of experience
            crafting innovative solutions. Specializing in full-stack development, cybersecurity, and creating
            exceptional user experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <div className="text-sm text-dark-400">Years Experience</div>
            </div>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-dark-400">Projects Completed</div>
            </div>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-dark-400">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary flex items-center space-x-2"
            >
              <span>View My Work</span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            <a
              href="#" // UPDATE: Add resume PDF link
              download
              className="btn-secondary flex items-center space-x-2"
              title="Download Resume"
            >
              <Download size={20} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/Kanishapradhan13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#" // UPDATE: Add LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kanisapradhan@gmail.com"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('#about')}
      >
        <ArrowDown size={32} className="text-primary-400" />
      </div>
    </section>
  );
};

export default Hero;
