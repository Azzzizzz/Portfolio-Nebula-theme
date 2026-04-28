import { motion } from 'framer-motion';
import { featuredCase } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Projects() {
  const c = featuredCase;
  const MotionDiv = motion.div;

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <span className="label-mono">02 / Selected Work</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.6rem]">
            Three systems.
            <br />
            Three 0→1 stories.
          </h2>
        </MotionDiv>

        <article className="border-t border-white/[0.06] pt-10 md:pt-12">
          <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-display text-[2.5rem] leading-none tracking-[-0.04em] md:text-[4rem]">
              <span className="label-mono accent-text mr-4 inline-block align-middle">
                {c.num}
              </span>
              {c.title}
            </h3>
            <span className="label-mono">{c.period}</span>
          </header>

          <dl className="mb-12 grid gap-6 md:grid-cols-3">
            <div>
              <dt className="label-mono mb-2">Started from</dt>
              <dd className="text-base leading-7 text-ink-muted">{c.context.startedFrom}</dd>
            </div>
            <div>
              <dt className="label-mono mb-2">Ended at</dt>
              <dd className="text-base leading-7 text-ink-muted">{c.context.endedAt}</dd>
            </div>
            <div>
              <dt className="label-mono mb-2">My role</dt>
              <dd className="text-base leading-7 text-ink-muted">{c.context.myRole}</dd>
            </div>
          </dl>

          <div className="mb-12 grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-12">
            <div>
              <p className="label-mono mb-4">The problem</p>
              <p className="text-lg leading-8 text-ink-muted">{c.problem}</p>
              <p className="label-mono mb-4 mt-8">The move</p>
              <p className="text-lg leading-8 text-ink-muted">{c.move}</p>
            </div>

            <div className="grid grid-cols-2 gap-px border border-white/[0.06] bg-white/[0.06] self-start">
              {c.numbers.map((item) => (
                <div key={item.label} className="bg-background p-6 md:p-8">
                  <div className="font-display text-[2.4rem] leading-none text-[hsl(var(--accent))] md:text-[3.2rem]">
                    {item.value}
                  </div>
                  <div className="label-mono mt-3">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="label-mono mr-2">Stack</span>
            {c.stack.map((item) => (
              <span key={item} className="tech-chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
