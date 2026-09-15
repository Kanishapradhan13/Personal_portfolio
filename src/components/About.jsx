import { Award, BookOpen, Briefcase, Target, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: Briefcase,
      title: 'DHI Innotech Intern',
      description: 'Full-semester internship contributing to live software development at Drive, DHI Innotech',
    },
    {
      icon: BookOpen,
      title: '4th Year SE Student',
      description: 'Pursuing Bachelor of Engineering in Software Engineering at CST, Royal University of Bhutan',
    },
    {
      icon: Target,
      title: 'Full-Stack Builder',
      description: 'Built real-world products including Bhutan\'s first digital rental marketplace, DrukNest',
    },
    {
      icon: Users,
      title: 'SE Mentor (2026)',
      description: 'Mentored first-year students on Python, C, Git, Figma, and the Software Development Life Cycle',
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
                <div className="relative overflow-hidden rounded-2xl border-2 border-dark-800 group-hover:border-primary-500/50 transition-all duration-300 aspect-square">
                  <img
                    src="/profile.jpg"
                    alt="Kanisha Pradhan"
                    className="w-full h-full object-cover"
                  />
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
                I'm a 4th-year Software Engineering student at the College of Science and Technology, Royal University
                of Bhutan. I build full-stack products that solve real problems — from <strong className="text-dark-200">DrukNest</strong>, Bhutan's first
                dedicated digital rental marketplace, to <strong className="text-dark-200">DrukMatch</strong>, a culturally localised dating app with
                real-time chat.
              </p>

              <p className="text-dark-300 text-lg leading-relaxed">
                I completed a full-semester internship at DHI Innotech (Drive), where I contributed to live software
                delivery. In 2026 I mentored first-year SE students on programming fundamentals, Git, Figma, and the
                SDLC — and competed in (and won at college level) the <strong className="text-dark-200">1MinuteShop</strong> Business Idea Competition.
              </p>

              <p className="text-dark-300 text-lg leading-relaxed">
                Outside of code I write about tech on my <a href="https://blogbykanu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">blog</a> and
                stay curious about microservices architecture, DevOps tooling, and building products that genuinely
                matter to the people who use them.
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
