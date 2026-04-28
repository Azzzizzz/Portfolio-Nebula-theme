import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import CaseStudy from './CaseStudy';
import { aiLayerCase } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

function useTypewriter(text, active, reducedMotion) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    if (!active) {
      return undefined;
    }

    if (visibleCount >= text.length) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, 28);

    return () => window.clearTimeout(timeout);
  }, [active, reducedMotion, text, visibleCount]);

  if (reducedMotion) {
    return text;
  }

  return text.slice(0, visibleCount);
}

function PromptVisual() {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const typed = useTypewriter(aiLayerCase.answer, isInView, reducedMotion);
  const MotionDiv = motion.div;
  const metrics = useMemo(() => aiLayerCase.evalMetrics, []);

  return (
    <div ref={ref} className="grid gap-6">
      <div className="rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="label-mono">Rubric template</span>
          <span className="label-mono accent-text">Evaluation engine</span>
        </div>
        <pre className="overflow-x-auto text-sm leading-7 text-foreground/90">
          <code>{aiLayerCase.promptSnippet.join('\n')}</code>
        </pre>
      </div>

      <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
        {metrics.map((item, index) => (
          <MotionDiv
            key={item.label}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
            className="bg-background p-5"
          >
            <div className="label-mono">{item.label}</div>
            <div className="mt-3 font-display text-[2rem] leading-none text-[hsl(var(--accent))]">
              {item.value}
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="label-mono">RAG answer stream</span>
          <span className="label-mono">Grounded output</span>
        </div>
        <div className="space-y-3">
          {aiLayerCase.ragFlow.map((step) => (
            <div key={step} className="label-mono text-foreground/80">
              {step}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-background px-5 py-4 text-base leading-7 text-ink-muted">
          {typed}
          <span className="ml-0.5 inline-block h-5 w-px bg-[hsl(var(--accent))] align-middle" />
        </div>
      </div>
    </div>
  );
}

export default function AILayer() {
  return (
    <CaseStudy
      study={aiLayerCase}
      visual={<PromptVisual />}
      intro="The point of this layer was not to add AI. It was to make the AI editable, observable, and grounded enough to survive production."
    >
      <div className="grid grid-cols-2 gap-px border border-white/[0.06] bg-white/[0.06]">
        {aiLayerCase.numbers.map((item) => (
          <div key={item.label} className="bg-background p-6 md:p-8">
            <div className="font-display text-[2.2rem] leading-none text-[hsl(var(--accent))] md:text-[3rem]">
              {item.value}
            </div>
            <div className="label-mono mt-3">{item.label}</div>
          </div>
        ))}
      </div>
    </CaseStudy>
  );
}
