import { motion, useReducedMotion } from 'framer-motion';
import CaseStudy from './cases/CaseStudy';
import TikMe from './cases/TikMe';
import AILayer from './cases/AILayer';
import { featuredCase } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Projects() {
  const c = featuredCase;
  const reducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: EASE }}
          className="mb-16"
        >
          <span className="label-mono">02 / Selected Work</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.6rem]">
            Three systems.
            <br />
            Three 0→1 stories.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            NativeX is the scale story. TikMe is the architecture story. The AI layer is
            the proof that the systems work now extend beyond CRUD into production
            intelligence.
          </p>
        </MotionDiv>

        <CaseStudy
          study={c}
          sectionTitle="Scale story"
          visual={
            <div className="grid grid-cols-1 gap-px border border-white/[0.06] bg-white/[0.06] self-start sm:grid-cols-2">
              {c.numbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.45,
                    delay: reducedMotion ? 0 : index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-background p-6 md:p-8"
                >
                  <div className="font-display text-[2.4rem] leading-none text-[hsl(var(--accent))] md:text-[3.2rem]">
                    {item.value}
                  </div>
                  <div className="label-mono mt-3">{item.label}</div>
                </motion.div>
              ))}
            </div>
          }
          intro="This is the one that proves I can stay with a product after launch, not just help it ship."
        />
        <TikMe />
        <AILayer />
      </div>
    </section>
  );
}
