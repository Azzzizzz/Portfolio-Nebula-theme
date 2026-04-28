import CaseStudy from './CaseStudy';
import TikMeArchDiagram from './TikMeArchDiagram';
import { tikmeCase } from '@/constants';

export default function TikMe() {
  return (
    <CaseStudy
      study={tikmeCase}
      visual={<TikMeArchDiagram />}
      intro="This is the hardest system on the page because it had to be architecture work, not just feature work."
      invert
    >
      <div className="grid grid-cols-1 gap-px border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
        {tikmeCase.numbers.map((item) => (
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
