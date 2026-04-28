import { motion, useReducedMotion } from 'framer-motion';
import { nowCard } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Now() {
  const reducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <section id="now" className="py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:px-8">
        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: EASE }}
        >
          <p className="label-mono">{nowCard.eyebrow}</p>
          <h2 className="mt-4 max-w-xl font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.4rem]">
            {nowCard.headline}
          </h2>
        </MotionDiv>

        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            delay: reducedMotion ? 0 : 0.08,
            ease: EASE,
          }}
          className="grid gap-8"
        >
          <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 md:p-10">
            {nowCard.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-6 text-lg leading-8 text-ink-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-px border border-white/[0.06] bg-white/[0.06]">
            {nowCard.bullets.map((bullet) => (
              <div key={bullet} className="bg-background px-6 py-5">
                <span className="label-mono text-foreground">{bullet}</span>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
