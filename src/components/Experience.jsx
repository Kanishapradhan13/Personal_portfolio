import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const timeline = [
    {
      id: 1,
      type: 'work',
      icon: Briefcase,
      title: 'Software Development Intern',
      organization: 'DHI Innotech',
      location: 'Thimphu, Bhutan',
      period: '3 Months',
      date: '2024', // UPDATE: Add specific dates
      description: 'Gained hands-on experience in software development, working on real-world projects and collaborating with experienced developers.',
      achievements: [
        'Contributed to the development of web applications using modern technologies',
        'Participated in code reviews and implemented best practices',
        'Learned agile methodologies and team collaboration tools',
        'Worked on debugging and optimizing existing codebases',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor in Software Engineering',
      organization: 'College of Science and Technology',
      location: 'Phuentsholing, Bhutan',
      period: 'Expected 2027',
      date: '2023 - 2027',
      description: 'Pursuing comprehensive education in software engineering, covering fundamental and advanced topics in computer science and software development.',
      achievements: [
        'Studying advanced algorithms, data structures, and software architecture',
        'Hands-on projects in web development, mobile apps, and system design',
        'Learning cybersecurity principles and secure coding practices',
        'Participating in hackathons and coding competitions',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    // UPDATE: Add more experiences, internships, or certifications as needed
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              My professional journey and educational background that shaped my skills and expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card card-hover group">
                        {/* Header */}
                        <div className={`flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row items-start gap-4 mb-4`}>
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className="text-white" size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-dark-100 mb-1">{item.title}</h3>
                            <p className="text-primary-400 font-semibold mb-1">{item.organization}</p>
                            <p className="text-dark-400 text-sm mb-2">{item.location}</p>
                            <div className="flex items-center space-x-2 text-dark-500 text-sm">
                              <Calendar size={14} />
                              <span>{item.period}</span>
                              <span>•</span>
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-dark-300 mb-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className={`space-y-2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          <h4 className="text-sm font-semibold text-dark-200 mb-2">Key Highlights:</h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className={`text-dark-400 text-sm flex ${isEven ? 'md:flex-row-reverse' : 'flex-row'} items-start gap-2`}>
                                <span className="text-primary-400 mt-1">•</span>
                                <span className="flex-1">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-dark-950 z-10"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section (Optional - Update as needed) */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-100">
              Certifications & <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Full Stack Development',
                  issuer: 'Online Course Platform',
                  year: '2024',
                },
                {
                  title: 'Cybersecurity Fundamentals',
                  issuer: 'Security Training Platform',
                  year: '2023',
                },
                {
                  title: 'React Advanced Patterns',
                  issuer: 'Frontend Masters',
                  year: '2024',
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="card card-hover text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="text-lg font-semibold text-dark-100 mb-2">{cert.title}</h4>
                  <p className="text-dark-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-primary-400 text-sm font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-dark-500 text-sm mt-6">
              [PLACEHOLDER: Update with your actual certifications and achievements]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
