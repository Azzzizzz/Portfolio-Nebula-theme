import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function CaseStudy({
  study,
  sectionTitle,
  intro,
  visual,
  children,
  invert = false,
}) {
  const reducedMotion = useReducedMotion();
  const MotionArticle = motion.article;

  return (
    <MotionArticle
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="border-t border-white/[0.06] pt-10 md:pt-12"
    >
      <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
        <div>
          {sectionTitle ? <span className="label-mono">{sectionTitle}</span> : null}
          <h3 className="mt-4 font-display text-[2.5rem] leading-none tracking-[-0.04em] md:text-[4rem]">
            <span className="label-mono accent-text mr-4 inline-block align-middle">
              {study.num}
            </span>
            {study.title}
          </h3>
        </div>
        <span className="label-mono">{study.period}</span>
      </header>

      <dl className="mb-12 grid gap-6 md:grid-cols-3">
        <div>
          <dt className="label-mono mb-2">Started from</dt>
          <dd className="text-base leading-7 text-ink-muted">{study.context.startedFrom}</dd>
        </div>
        <div>
          <dt className="label-mono mb-2">Ended at</dt>
          <dd className="text-base leading-7 text-ink-muted">{study.context.endedAt}</dd>
        </div>
        <div>
          <dt className="label-mono mb-2">My role</dt>
          <dd className="text-base leading-7 text-ink-muted">{study.context.myRole}</dd>
        </div>
      </dl>

      <div
        className={`mb-12 grid gap-10 md:items-start ${
          invert
            ? 'md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
            : 'md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'
        } md:gap-12`}
      >
        <div className={invert ? 'md:order-2' : ''}>
          <p className="label-mono mb-4">The problem</p>
          <p className="text-lg leading-8 text-ink-muted">{study.problem}</p>
          <p className="label-mono mb-4 mt-8">The move</p>
          <p className="text-lg leading-8 text-ink-muted">{study.move}</p>
          {intro ? <p className="mt-8 text-base leading-7 text-foreground/88">{intro}</p> : null}
        </div>

        <div className={invert ? 'md:order-1' : ''}>
          {visual}
        </div>
      </div>

      {children}

      <div className="mt-8 flex flex-wrap gap-2">
        <span className="label-mono mr-2">Stack</span>
        {study.stack.map((item) => (
          <span key={item} className="tech-chip">
            {item}
          </span>
        ))}
      </div>
    </MotionArticle>
  );
}
