import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { defaultNowEntry, indexEntries } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Index() {
  const reducedMotion = useReducedMotion();
  const MotionItem = motion.li;
  const [nowEntry, setNowEntry] = useState(defaultNowEntry);

  useEffect(() => {
    let active = true;

    fetch('/now.json')
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (!active || !payload?.title) {
          return;
        }

        setNowEntry({
          title: payload.title,
          url: payload.url || '#now',
          updated: payload.updated || defaultNowEntry.updated,
        });
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const entries = indexEntries.map((entry) =>
    entry.num === '01'
      ? {
          ...entry,
          title: nowEntry.title,
          sub: `updated ${nowEntry.updated}`,
          href: nowEntry.url || '#now',
        }
      : entry
  );

  return (
    <section id="index" className="border-y border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-center md:justify-between">
          <span className="label-mono">Issue 01 / 2026</span>
          <div className="flex flex-wrap items-center gap-5">
            <span className="label-mono">Edition: Hiring</span>
            <a
              href="/Syed_Abdul_Aziz_Software_Engineer.pdf"
              className="label-mono inline-flex items-center gap-2 text-foreground transition-colors hover:text-[hsl(var(--accent))] focus-ring rounded-sm"
            >
              Resume PDF <ArrowDownRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <ol className="border-b border-white/[0.06]">
          {entries.map((entry, index) => (
            <MotionItem
              key={entry.num}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                delay: reducedMotion ? 0 : index * 0.08,
                ease: EASE,
              }}
              className="border-t border-white/[0.06]"
            >
              <a
                href={entry.href}
                className="group grid gap-3 py-5 transition-colors focus-ring rounded-sm md:grid-cols-[64px_180px_minmax(0,1fr)_220px] md:items-baseline md:gap-6 md:py-6"
              >
                <span className="label-mono">{entry.num}</span>
                <span className="label-mono accent-text">{entry.label}</span>
                <span className="font-display text-[1.9rem] leading-tight tracking-[-0.03em] transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-[2.25rem]">
                  {entry.title}
                </span>
                <span className="label-mono text-left opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:text-right">
                  {entry.sub}
                </span>
              </a>
            </MotionItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
