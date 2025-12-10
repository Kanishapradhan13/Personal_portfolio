import { Award, BookOpen, Briefcase, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: Briefcase,
      title: 'DHI Innotech Intern',
      description: 'Gained hands-on experience in software development and project implementation',
    },
    {
      icon: BookOpen,
      title: 'Software Engineering Student',
      description: 'Currently pursuing degree at College of Science and Technology (Class of 2027)',
    },
    {
      icon: Target,
      title: 'Full Stack Development',
      description: 'Experienced in building end-to-end web applications with modern technologies',
    },
    {
      icon: Award,
      title: 'Security Focused',
      description: 'Specialized in cybersecurity and DevSecOps practices',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-900/30">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Placeholder for profile photo */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 aspect-square flex items-center justify-center border-2 border-dark-800 group-hover:border-primary-500/50 transition-all duration-300">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-6xl font-bold text-white">
                      K
                    </div>
                    <p className="text-dark-400 text-sm">
                      <img
                        src="/profile.jpg"
                        alt="Kanisha Pradhan"
                        className="w-full h-full object-cover rounded-2xl"
                      /><br />
                      Recommended size: 800x800px
                    </p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-lg -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/20 rounded-lg -z-10 group-hover:scale-110 transition-transform"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-dark-100">
                Passionate About Building <span className="gradient-text">Innovative Solutions</span>
              </h3>

              <p className="text-dark-300 text-lg leading-relaxed">
                I'm a software engineering student with a strong passion for creating impactful digital experiences.
                With 4 years of hands-on experience, I've developed a diverse skill set spanning full-stack development,
                UI/UX design, cybersecurity, and project management.
              </p>

              <p className="text-dark-300 text-lg leading-relaxed">
                Currently pursuing my degree at the College of Science and Technology (graduating 2027), I combine
                academic knowledge with practical experience gained from my internship at DHI Innotech. I'm particularly
                interested in DevSecOps practices and building secure, scalable applications.
              </p>

              <p className="text-dark-300 text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                staying updated with the latest trends in software development and cybersecurity.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-dark-100 mb-4">Current Status</h4>
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card card-hover group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                    <Icon className="text-primary-400" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-dark-100 mb-2">{item.title}</h4>
                  <p className="text-dark-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
