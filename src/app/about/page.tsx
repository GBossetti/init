import type { Metadata } from 'next';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Gonzalo Bossetti Marín - software developer, interests, and experience.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
        About Me
      </h1>

      <div className="prose prose-invert max-w-none">
        <div className="space-y-6 text-foreground-muted">
          <p className="text-lg leading-relaxed">
            Hi! I&apos;m <span className="text-foreground">Gonzalo Bossetti Marín</span>,
            a software developer based in [Your Location]. I enjoy building things
            that live on the internet and sharing what I learn along the way.
          </p>

          <p className="leading-relaxed">
            My interest in software development started back in [Year] when I
            [Your Story Here]. Since then, I&apos;ve had the privilege of working
            on various projects that have helped me grow as a developer.
          </p>

          <p className="leading-relaxed">
            Today, my main focus is on building accessible, inclusive products
            and digital experiences. I&apos;m passionate about writing clean,
            maintainable code and continuously learning new technologies.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              'JavaScript (ES6+)',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Tailwind CSS',
              'Git',
              'HTML & CSS',
              'SQL',
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 text-foreground-muted"
              >
                <span className="text-accent">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <h3 className="font-semibold text-foreground">
                Software Developer
              </h3>
              <p className="font-mono text-sm text-accent">[Company Name]</p>
              <p className="mt-1 font-mono text-sm text-foreground-muted">
                [Start Date] - Present
              </p>
              <p className="mt-3 text-foreground-muted">
                [Brief description of your role and responsibilities]
              </p>
            </div>

            {/* Add more experience entries as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="mb-6 text-foreground-muted">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              Email me
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
