import { motion } from 'framer-motion';
import { stackDepth, stackTimeline } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Stack() {
  const MotionDiv = motion.div;

  return (
    <section id="stack" className="border-y border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mb-16">
          <span className="label-mono">03 / The Stack</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.6rem]">
            Broad enough to ship
            <br />
            deep enough to keep it standing.
          </h2>
        </div>

        <div className="mb-16 grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
          {stackTimeline.map((item, index) => (
            <MotionDiv
              key={item.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
              className="bg-background p-6 md:p-8"
            >
              <p className="label-mono mb-3">{item.period}</p>
              <h3 className="font-display text-[2rem] tracking-[-0.03em]">{item.company}</h3>
              <p className="mt-4 text-base leading-7 text-ink-muted">{item.focus}</p>
            </MotionDiv>
          ))}
        </div>

        <div className="space-y-8">
          {stackDepth.map((item, index) => (
            <MotionDiv
              key={item.layer}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
              className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)_300px] md:items-center"
            >
              <div className="label-mono">{item.layer}</div>
              <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.depth * 100}%` }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.05, ease: EASE }}
                  className="h-full rounded-full bg-[hsl(var(--accent))]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="label-mono text-foreground/90">
                    {tech}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        <p className="mt-16 max-w-3xl text-lg leading-8 text-ink-muted">
          The shape is deliberate: frontend enough to ship the surface, backend deep
          enough to own the systems underneath, and increasingly comfortable with AI
          when it has to survive real users, budgets, and operational scrutiny.
        </p>
      </div>
    </section>
  );
}
