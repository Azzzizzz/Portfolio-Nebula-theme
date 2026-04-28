import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, personalInfo } from '@/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <nav
          className={cn(
            'pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6',
            isScrolled
              ? 'border-white/[0.08] bg-[rgba(10,10,11,0.8)] shadow-lg shadow-black/20 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          )}
        >
          <a href="#top" className="focus-ring rounded-sm">
            <span className="label-mono text-foreground">{personalInfo.name}</span>
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="label-mono rounded-sm text-foreground/85 transition-colors hover:text-[hsl(var(--accent))] focus-ring"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {personalInfo.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === 'Email' ? undefined : '_blank'}
                rel={social.name === 'Email' ? undefined : 'noreferrer'}
                aria-label={social.name}
                className="rounded-full border border-white/[0.08] p-2.5 text-foreground/80 transition-colors hover:text-[hsl(var(--accent))] focus-ring"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full border border-white/[0.08] p-2.5 text-foreground md:hidden focus-ring"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-[rgba(10,10,11,0.96)] px-5 pt-28 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-[2.2rem] leading-none tracking-[-0.03em] text-foreground focus-ring rounded-sm"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 flex gap-4">
              {personalInfo.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name === 'Email' ? undefined : '_blank'}
                  rel={social.name === 'Email' ? undefined : 'noreferrer'}
                  aria-label={social.name}
                  className="rounded-full border border-white/[0.08] p-3 text-foreground/80 focus-ring"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
