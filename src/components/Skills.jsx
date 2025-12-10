import { Code2, Database, Layout, Lock, Server, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Linux', level: 85 },
      ],
    },
    {
      category: 'Security & Testing',
      icon: Lock,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Cybersecurity', level: 85 },
        { name: 'DevSecOps', level: 80 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'OWASP', level: 75 },
        { name: 'Penetration Testing', level: 70 },
      ],
    },
    {
      category: 'Other Skills',
      icon: Code2,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-900/30">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills I've mastered throughout my journey as a developer.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="card card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-100">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-dark-300 font-medium text-sm">{skill.name}</span>
                          <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-100">
              Additional <span className="gradient-text">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript', 'React Native', 'Vue.js', 'Angular', 'Webpack', 'Vite',
                'Sass/SCSS', 'Material-UI', 'Bootstrap', 'Redux', 'Socket.io', 'JWT',
                'OAuth', 'Postman', 'Figma', 'Adobe XD', 'Jira', 'Confluence',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-sm font-medium text-dark-300 hover:border-primary-500/50 hover:text-primary-400 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
