import { Briefcase, GraduationCap, Calendar, Trophy, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const timeline = [
    {
      id: 1,
      type: 'work',
      icon: Users,
      title: 'Software Engineering Mentor',
      organization: 'College of Science and Technology',
      location: 'Phuentsholing, Bhutan',
      period: '2026',
      date: '2026',
      description:
        'Mentored first-year software engineering students, delivering instruction across core tools and practices used throughout the degree.',
      achievements: [
        'Taught programming fundamentals in Python and C to incoming SE students',
        'Delivered hands-on sessions on Git/GitHub workflows and collaborative development',
        'Introduced Figma for UI/UX design and wireframing',
        'Covered project management practices and the Software Development Life Cycle (SDLC)',
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 2,
      type: 'work',
      icon: Briefcase,
      title: 'Software Engineering Intern',
      organization: 'DHI Innotech (Drive)',
      location: 'Thimphu, Bhutan',
      period: 'One Semester',
      date: '2nd Year',
      description:
        'Completed a full-semester internship contributing to live software development work — the second internship of the candidate\'s academic career.',
      achievements: [
        'Contributed to live software delivery alongside professional development teams',
        'Gained hands-on exposure to industry development practices and workflows',
        'Applied academic knowledge to real-world, production-grade software challenges',
        'Developed skills in team-based software delivery and agile collaboration',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Engineering in Software Engineering',
      organization: 'College of Science and Technology, Royal University of Bhutan',
      location: 'Phuentsholing, Bhutan',
      period: '4th Year',
      date: '2023 – Present',
      description:
        'Pursuing a comprehensive software engineering degree covering full-stack development, systems design, cybersecurity, and project management.',
      achievements: [
        'Core subjects: algorithms, data structures, software architecture, and systems programming',
        'Practical work in web development, mobile applications, and microservices',
        'Prior education at Pelkhil School (Class XII)',
        'Participated in GovTech Hackathon 2025 at GCIT',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const achievements = [
    {
      emoji: '🏆',
      title: 'Business Idea Competition — Winner',
      issuer: 'College Level · Competitor at Gedu College',
      year: '2025',
      description: 'Won the college-level round with the "1MinuteShop" concept and advanced to the inter-college competition.',
    },
    {
      emoji: '⚙️',
      title: 'GovTech Hackathon 2025',
      issuer: 'GCIT',
      year: '2025',
      description: 'Participated in the national government technology hackathon organised by GCIT.',
    },
    {
      emoji: '✍️',
      title: 'Tech Blog — blogbykanu',
      issuer: 'blogbykanu.vercel.app',
      year: 'Ongoing',
      description: 'Publishing articles on software development, tooling, and lessons from building real products.',
    },
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

          {/* Achievements Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-100">
              Achievements & <span className="gradient-text">Recognition</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="card card-hover text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h4 className="text-lg font-semibold text-dark-100 mb-1">{item.title}</h4>
                  <p className="text-dark-400 text-sm mb-1">{item.issuer}</p>
                  <p className="text-primary-400 text-sm font-medium mb-2">{item.year}</p>
                  <p className="text-dark-500 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
