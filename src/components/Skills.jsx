import { motion, useReducedMotion } from 'framer-motion';
import { skillCategories } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <section id="skills" className="border-b border-white/[0.06] py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <MotionDiv
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: EASE }}
          className="mb-14"
        >
          <span className="label-mono">Skills</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.2rem]">
            The tools are broad.
            <br />
            The center of gravity is not.
          </h2>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <MotionDiv
              key={category.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: reducedMotion ? 0 : 0.5,
                delay: reducedMotion ? 0 : index * 0.06,
                ease: EASE,
              }}
              className="rounded-[1.6rem] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
            >
              <p className="label-mono accent-text">{category.title}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
