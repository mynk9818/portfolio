export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">Experience</h2>
        <div className="space-y-12">
          {[
            {
              role: 'React Native Developer',
              company: 'Quidpro Recraft Solutions',
              period: 'June 2025 – Present',
              description: [
                'Developed SafeTrade, a secure trading platform for buying and selling used phones',
                'Built the Reuz app, an e-commerce platform for seamlessly selling and recycling used mobile devices',
                'Engineered cross-platform mobile experiences with React Native, focusing on performance and user engagement',
              ],
            },
            {
              role: 'Flutter Developer',
              company: 'Quidpro Recraft Solutions',
              period: 'June 2025 – Present',
              description: [
                'Built mobile inspection app with IMEI scanning and device detail capture capabilities',
                'Implemented dealer management system and inspection record tracking',
                'Integrated APIs for secure data storage and real-time synchronization',
              ],
            },
            {
              role: 'Flutter Developer',
              company: 'Whiteapps',
              period: 'Jan 2025 – May 2025',
              description: [
                'Enhanced UI of applications to modern design standards',
                'Performed code optimization and refactoring for improved performance',
                'Ensured codebase adhered to best practices and performance requirements',
              ],
            },
            {
              role: 'Flutter Developer',
              company: 'Entity Digital Sports',
              period: 'Mar 2024 – Sep 2024',
              description: [
                'Collaborated on CricketLineX with 10M+ users on Play Store',
                'Implemented WebSocket for real-time data updates and live scoring',
                'Developed pin score overlay feature and embedded social media video integration',
              ],
            },
          ].map((exp, idx) => (
            <div key={idx} className="pb-12 border-b border-border last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-accent font-medium mt-2">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <ul className="space-y-3 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
