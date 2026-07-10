export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">Skills & Expertise</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            {
              category: 'Mobile Development',
              skills: ['Flutter', 'React Native', 'Dart', 'JavaScript', 'TypeScript'],
            },
            {
              category: 'Web Development',
              skills: ['Next', 'Nuxt', 'React', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'GraphQL'],
            },
            {
              category: 'State Management',
              skills: ['GetX', 'Bloc', 'Context API', 'Provider', 'Redux'],
            },
            {
              category: 'Tools & Services',
              skills: ['Firebase', 'WebSocket', 'Git & GitHub', 'VS Code', 'Android Studio', 'Figma', 'Play Store'],
            },
          ].map((group, idx) => (
            <div key={idx} className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 tracking-wide">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-secondary rounded-sm hover:border hover:border-accent transition-all duration-300"
                  >
                    <span className="text-sm">{skill}</span>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
