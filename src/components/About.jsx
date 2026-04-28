import { motion, useReducedMotion } from 'framer-motion';
import { aboutContent, aboutHighlights } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function About() {
  const reducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <section id="about" className="border-b border-white/[0.06] py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-8">
        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: EASE }}
        >
          <span className="label-mono">About</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.2rem]">
            Built from product work,
            <br />
            not portfolio poses.
          </h2>
        </MotionDiv>

        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.08, ease: EASE }}
          className="grid gap-8"
        >
          <div className="grid gap-6">
            <p className="max-w-2xl text-lg leading-8 text-ink-muted">
              {aboutContent.lead}
            </p>
            <p className="max-w-2xl text-base leading-8 text-foreground/88">
              {aboutContent.support}
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.06] bg-white/[0.06]">
            {aboutHighlights.map((item) => (
              <div key={item.label} className="bg-background px-6 py-6 md:px-8">
                <p className="label-mono accent-text">{item.label}</p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/88">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
