import { ExternalLink, Github, Home, Gavel, Heart, ShoppingBag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'DrukNest',
      subtitle: "Bhutan's first digital rental marketplace",
      description:
        "Built Bhutan's first dedicated digital rental marketplace — a mobile-responsive web platform connecting landlords and tenants across Thimphu, Paro, and Phuentsholing. Designed to address the absence of verified listings, standardised leases, and secure payment options in the informal rental market.",
      technologies: ['React', 'Node.js'],
      features: [
        "Mobile-responsive platform covering Bhutan's major cities",
        'Verified listings system addressing gaps in the informal rental market',
        'Standardised lease management and secure payment integration',
      ],
      icon: Home,
      color: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/Kanishapradhan13',
      demo: null,
    },
    {
      id: 2,
      title: 'Auction Management Service',
      subtitle: 'Microservices-based auction platform',
      description:
        'A full-stack auction platform for land and vehicle auctions, featuring dedicated bidding rooms with unique codes and real-time participant tracking. Implements a DRAFT → ACTIVE → CLOSED status workflow with search, filter, and a seller dashboard.',
      technologies: ['Microservices', 'React', 'Node.js', 'WebSockets'],
      features: [
        'Dedicated, uniquely coded bidding rooms with real-time participant tracking',
        'DRAFT → ACTIVE → CLOSED auction lifecycle with seller dashboard',
        'Search and filter by keyword and status; microservice architecture for User, Bidding, and Notification services',
      ],
      icon: Gavel,
      color: 'from-blue-500 to-indigo-500',
      github: 'https://github.com/Kanishapradhan13',
      demo: null,
    },
    {
      id: 3,
      title: 'DrukMatch',
      subtitle: 'Bhutanese cultural dating app',
      description:
        'A full-stack mobile dating application built specifically for a Bhutanese cultural context, with JWT authentication, swipe-based matching, and real-time chat with WebSocket support.',
      technologies: ['React Native', 'Expo', 'WebSockets', 'JWT'],
      features: [
        'JWT authentication, profile management (up to 6 photos, bio, interests, preferences)',
        'Swipe-based matching with intelligent discovery; real-time chat with typing indicators and read receipts',
        'Localised with all 20 Dzongkhags, zodiac signs, and bilingual (Dzongkha/English) support',
      ],
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      github: 'https://github.com/Kanishapradhan13',
      demo: null,
    },
    {
      id: 4,
      title: 'CocoCart (now 1MinuteShop)',
      subtitle: 'E-commerce website builder · UI/UX Design',
      description:
        'Designed early UI/UX concepts for an e-commerce website builder that generates individualised storefronts for shop owners. Contributed product management, order management, and sales analytics flows — plus a scratch-voucher reward and loyalty discount system.',
      technologies: ['Figma', 'UI/UX Design'],
      features: [
        'Individualised storefronts with product and order management, and sales analytics',
        'Scratch-voucher reward mechanic and loyalty discount after six orders',
        'Business concept behind the Business Idea Competition win (College Level, 2025)',
      ],
      icon: ShoppingBag,
      color: 'from-amber-500 to-orange-500',
      github: 'https://github.com/Kanishapradhan13',
      demo: null,
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
              Real products I've built — from Bhutan's first rental marketplace to a culturally localised dating app.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="card card-hover group flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Icon Banner */}
                  <div className={`relative h-40 rounded-lg bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-dark-950/40 backdrop-blur-sm group-hover:bg-dark-950/20 transition-all"></div>
                    <Icon className="relative z-10 text-white" size={56} />
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-dark-100 mb-1 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-primary-400 text-sm font-medium mb-3">{project.subtitle}</p>

                    <p className="text-dark-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-sm font-semibold text-dark-200 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-dark-400 text-sm flex items-start">
                            <span className="text-primary-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                            <span>{feature}</span>
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
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors group/link"
                        >
                          <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
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
