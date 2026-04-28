import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroContent, personalInfo } from '@/constants';

const HERO_SEQUENCE = ['one', 'a hundred thousand', 'one', 'a hundred thousand'];
const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState('');
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

  useEffect(() => {
    const updateTime = () => {
      const value = new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: personalInfo.timezone,
      }).format(new Date());

      setTime(`${value} IST`);
    };

    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

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
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 md:px-8">
        <span className="label-mono">{personalInfo.name} — in Hyderabad</span>
        <span className="label-mono">{time}</span>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
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
              className="font-display text-[3.3rem] leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[4.2rem] md:text-[6rem] lg:text-[8rem]"
            >
              I take products
              <br />
              from zero
              <br />
              to{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={value}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className={struck ? 'line-through decoration-2' : 'accent-text italic'}
                >
                  {value}
                </motion.span>
              </AnimatePresence>
              .
            </MotionH1>

            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-10 max-w-3xl"
            >
              <div className="mb-4 h-px w-16 bg-[hsl(var(--accent))]" />
              <p className="label-mono leading-7 md:leading-8">
                Full-stack engineer · backend-heavy · production AI
                <br />
                Hyderabad · 4+ yrs · open to senior / staff roles
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
                {heroContent.summary}
              </p>
            </MotionDiv>
          </div>

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
