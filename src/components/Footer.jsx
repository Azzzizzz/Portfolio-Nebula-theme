import { personalInfo } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="label-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite, and a
          much lower tolerance for portfolio clichés.
        </p>
        <div className="flex items-center gap-3">
          {personalInfo.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === 'Email' ? undefined : '_blank'}
              rel={social.name === 'Email' ? undefined : 'noreferrer'}
              aria-label={social.name}
              className="rounded-full border border-white/[0.08] p-2.5 text-foreground/75 transition-colors hover:text-[hsl(var(--accent))] focus-ring"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
