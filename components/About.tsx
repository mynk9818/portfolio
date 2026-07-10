export default function About() {
  return (
    <section id="about" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight">About</h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a full-stack developer passionate about building beautiful, performant applications
              across platforms. From Flutter apps serving 1M+ users to modern web applications in Next and Nuxt,
              I specialize in creating seamless digital experiences. My expertise spans mobile-first development,
              responsive web design, and real-time feature implementation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I excel at implementing robust state management solutions (GetX, Bloc, Pinia), integrating RESTful APIs and GraphQL,
              and leveraging WebSockets for real-time features. Whether building native mobile apps with Flutter/React Native
              or modern web applications with Next.js/Nuxt, I focus on clean code, thoughtful design, and exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical expertise, I believe in collaborative development, continuous learning,
              and translating complex requirements into elegant solutions. I&apos;m always exploring
              new technologies and best practices in mobile development.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300">
              <p className="text-xs tracking-widest text-accent uppercase font-medium mb-6">Education</p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-sm text-muted-foreground mt-1">Computer Science</p>
                  <p className="text-sm text-accent mt-2">Dronacharya College of Engineering</p>
                  <p className="text-xs text-muted-foreground mt-1">2020 - 2023</p>
                </div>
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-lg">Diploma in CS</h4>
                  <p className="text-sm text-muted-foreground mt-1">Computer Science</p>
                  <p className="text-sm text-accent mt-2">Government Polytechnic Manesar</p>
                  <p className="text-xs text-muted-foreground mt-1">2017 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
