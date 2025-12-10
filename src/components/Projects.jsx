import { ExternalLink, Github, Gavel, ShoppingBag, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // UPDATE: Add your actual projects here
  const projects = [
    {
      id: 1,
      title: 'Online Auction Platform',
      description: 'A comprehensive auction platform featuring real-time bidding, secure payment integration, and user authentication. Built with modern web technologies to provide a seamless auction experience.',
      technologies: ['React', 'Node.js', 'Supabase', 'Socket.io', 'clerk', 'JWT'],
      features: [
        'Real-time bidding system with WebSocket',
        'Advanced search and filtering',
      ],
      icon: Gavel,
      color: 'from-blue-500 to-cyan-500',
      github: '#', // UPDATE: Add GitHub repository link
      demo: '#', // UPDATE: Add live demo link
      image: 'auction-platform.jpg', // UPDATE: Add project screenshot
    },
    {
      id: 2,
      title: 'E-Commerce Store',
      description: 'Full-featured e-commerce platform with product management, shopping cart, order tracking, and admin dashboard. Implements modern UI/UX patterns for optimal user experience.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Redux', 'Tailwind CSS'],
      features: [
        'Product catalog with advanced filtering',
        'Shopping cart and checkout flow',
        'Admin dashboard for inventory management',
      ],
      icon: ShoppingBag,
      color: 'from-purple-500 to-pink-500',
      github: '#', // UPDATE: Add GitHub repository link
      demo: '#', // UPDATE: Add live demo link
      image: 'ecommerce-store.jpg', // UPDATE: Add project screenshot
    },
    {
      id: 3,
      title: 'Security Monitoring Dashboard',
      description: 'A comprehensive security monitoring solution with real-time threat detection, vulnerability scanning, and compliance reporting. Designed for DevSecOps workflows.',
      technologies: ['React', 'Python', 'FastAPI', 'Docker', 'PostgreSQL'],
      features: [
        'Real-time security alerts and notifications',
        'Vulnerability assessment and reporting',
        'Integration with CI/CD pipelines',
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      github: '#', // UPDATE: Add GitHub repository link
      demo: '#', // UPDATE: Add live demo link
      image: 'security-dashboard.jpg', // UPDATE: Add project screenshot
    },
    {
      id: 4,
      title: 'Performance Analytics Tool',
      description: 'Web performance monitoring and analytics platform that tracks key metrics, identifies bottlenecks, and provides actionable insights for optimization.',
      technologies: ['React', 'TypeScript', 'Node.js', 'InfluxDB', 'Chart.js'],
      features: [
        'Real-time performance metrics tracking',
        'Custom alerts and notifications',
        'Detailed analytics and reporting',
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      github: '#', // UPDATE: Add GitHub repository link
      demo: '#', // UPDATE: Add live demo link
      image: 'analytics-tool.jpg', // UPDATE: Add project screenshot
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development, security, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="card card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Icon/Image Placeholder */}
                  <div className={`relative h-48 rounded-lg bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-dark-950/50 backdrop-blur-sm group-hover:bg-dark-950/30 transition-all"></div>
                    <Icon className="relative z-10 text-white" size={64} />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <p className="text-white/70 text-xs">
                        [PLACEHOLDER: Add project screenshot]
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <h3 className="text-2xl font-bold text-dark-100 mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-dark-400 text-sm flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-800/50 border border-dark-700 rounded-full text-xs font-medium text-primary-400 group-hover:border-primary-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors group/link"
                    >
                      <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors group/link"
                    >
                      <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Kanishapradhan13"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
