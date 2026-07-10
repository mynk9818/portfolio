export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: 'CricketLineX',
              type: 'Company',
              description: 'Real-time cricket scoring platform with social media integration',
              highlights: ['10M+ Play Store downloads', 'WebSocket real-time updates', 'Pin score overlay', 'Social media video embedding'],
              tags: ['Flutter', 'Dart', 'WebSocket', 'Firebase'],
              link: 'https://play.google.com/store/apps/details?id=com.cricketLineX.CricketLineX&pcampaignid=web_share'
            },
            {
              name: 'Reuz Inspection',
              type: 'Company',
              description: 'Smart Phone Pickup & Verification app for field operations',
              highlights: ['Assigns qualified leads', 'Verifies customers securely', 'Completes secure phone pickups', 'Instant digital receipts'],
              tags: ['Flutter', 'Bloc', 'Firebase', 'Operations'],
              link: 'https://play.google.com/store/apps/details?id=com.reuz.inspectorapp&pcampaignid=web_share'
            },
            {
              name: 'DocShrink',
              type: 'Personal',
              description: 'A productivity-focused document and image utility application',
              highlights: ['Compress PDF and images', 'Document scanning', 'File management', 'Developed for Arumi DevTech'],
              tags: ['Flutter', 'Dart', 'Utility', 'Mobile'],
              link: 'https://play.google.com/store/apps/details?id=com.docshrink'
            },
            {
              name: 'SafeTrade',
              type: 'Company',
              description: 'Platform to Buy or Sell Used Phones Safely And Securely',
              highlights: ['Customer verification', 'IMEI Check', 'Receipt generation', 'Inventory Management'],
              tags: ['React Native', 'JavaScript', 'Mobile', 'E-commerce'],
              link: 'https://play.google.com/store/apps/details?id=com.safetrade&pcampaignid=web_share'
            },
            {
              name: 'Sell Old Phone Online : Reuz',
              type: 'Company',
              description: 'Sell your old mobile phone online and get the best price in India.',
              highlights: ['Guaranteed at least 10% more than other buyers', 'Free doorstep pickup', 'Instant payment via UPI or bank transfer', 'Honest, transparent pricing with no hidden charges'],
              tags: ['React Native', 'Mobile', 'E-commerce', 'Utility'],
              link: 'https://play.google.com/store/apps/details?id=in.reuz.dealer_app.reuz_dealer_app&pcampaignid=web_share'
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">{project.name}</h3>
                <span className={`inline-block text-xs px-2.5 py-1 rounded-sm border whitespace-nowrap ${project.type === 'Personal' ? 'border-primary text-primary' : 'border-border text-muted-foreground'}`}>
                  {project.type} Project
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="mt-6 relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-accent hover:underline flex items-center gap-1"
                  >
                    View on Play Store <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
