import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroContent, personalInfo } from '@/constants';

const HERO_SEQUENCE = ['one', 'a hundred thousand', 'one', 'a hundred thousand'];
const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || step >= HERO_SEQUENCE.length - 1) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setStep((current) => current + 1);
    }, step === 0 ? 2200 : 2400);

    return () => window.clearTimeout(timeout);
  }, [reducedMotion, step]);



  const value = reducedMotion
    ? HERO_SEQUENCE[HERO_SEQUENCE.length - 1]
    : HERO_SEQUENCE[Math.min(step, HERO_SEQUENCE.length - 1)];
  const struck = value === 'one';
  const MotionH1 = motion.h1;
  const MotionDiv = motion.div;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col border-b border-white/[0.06]"
    >


      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 md:px-8">
        <div className="mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6"
          >
            <span className="label-mono accent-text">{heroContent.eyebrow}</span>
          </MotionDiv>

          <MotionH1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: EASE }}
            className="font-display text-[2.2rem] leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
          >
            I take products from zero
            <br />
            to{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={value}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: EASE }}
                className={`inline-block ${struck ? 'line-through decoration-2 opacity-50' : 'accent-text'}`}
              >
                {value}
              </motion.span>
            </AnimatePresence>
            .
          </MotionH1>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="max-w-3xl"
          >
            <div className="mb-4 h-px w-16 bg-[hsl(var(--accent))]" />
            <p className="label-mono leading-7 md:leading-8">
              Production AI · 4+ years shipping · Open to senior / staff roles
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
              {heroContent.summary}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: EASE }}
            className="grid gap-px border border-white/[0.08] bg-white/[0.06]"
          >
            {heroContent.proof.map((item) => (
              <div key={item.label} className="bg-background px-6 py-6">
                <p className="font-display text-[2.4rem] leading-none text-[hsl(var(--accent))] md:text-[3rem]">
                  {item.value}
                </p>
                <p className="label-mono mt-3">{item.label}</p>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      <div className="px-5 pb-8 md:px-8">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="label-mono">{personalInfo.availability}</span>
        </span>
      </div>
    </section>
  );
}
