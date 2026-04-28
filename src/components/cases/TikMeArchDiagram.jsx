import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

const nodes = [
  { id: 'gateway', label: 'Apollo Federation Gateway', x: 270, y: 48, width: 220, height: 56, tone: 'accent' },
  { id: 'auth', label: 'Auth', x: 60, y: 160, width: 150, height: 52 },
  { id: 'chat', label: 'Chat', x: 240, y: 160, width: 150, height: 52 },
  { id: 'media', label: 'Media', x: 420, y: 160, width: 150, height: 52 },
  { id: 'realtime', label: 'Real-Time', x: 600, y: 160, width: 150, height: 52 },
  { id: 'eval', label: 'Evaluation', x: 330, y: 250, width: 170, height: 52 },
  { id: 'kafka', label: 'Kafka Event Bus', x: 150, y: 352, width: 520, height: 44, tone: 'accent' },
  { id: 'redis', label: 'Redis', x: 190, y: 450, width: 170, height: 52 },
  { id: 'postgres', label: 'PostgreSQL', x: 460, y: 450, width: 170, height: 52 },
];

const paths = [
  'M380 104 L135 160',
  'M380 104 L315 160',
  'M380 104 L495 160',
  'M380 104 L675 160',
  'M135 212 L410 250',
  'M315 212 L410 250',
  'M495 212 L410 250',
  'M675 212 L410 250',
  'M135 212 L135 374',
  'M315 212 L315 374',
  'M495 212 L495 374',
  'M675 212 L675 374',
  'M410 302 L410 352',
  'M275 396 L275 450',
  'M545 396 L545 450',
];

export default function TikMeArchDiagram() {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });
  const [progress, setProgress] = useState(reducedMotion ? 1 : 0);
  const MotionPath = motion.path;
  const MotionGroup = motion.g;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reducedMotion) {
      return;
    }

    const normalized = Math.max(0, Math.min(1, (latest - 0.06) / 0.72));
    setProgress((current) => Math.max(current, normalized));
  });

  return (
    <div ref={ref} className="rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-4 md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="label-mono">Architecture diagram</span>
        <span className="label-mono">TikMe / platform view</span>
      </div>

      <svg
        viewBox="0 0 820 540"
        className="w-full"
        role="img"
        aria-label="TikMe system architecture showing gateway, services, Kafka, Redis, and PostgreSQL"
      >
        {paths.map((path) => (
          <MotionPath
            key={path}
            d={path}
            fill="none"
            stroke="rgba(245,244,240,0.22)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: reducedMotion ? 1 : progress }}
          />
        ))}

        {nodes.map((node, index) => {
          const showNode = reducedMotion || progress >= Math.min(1, 0.12 + index * 0.08);
          return (
            <MotionGroup
              key={node.id}
              initial={false}
              animate={{
                opacity: showNode ? 1 : 0.18,
                scale: showNode ? 1 : 0.96,
              }}
              transition={{ duration: reducedMotion ? 0 : 0.35 }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.height}
                rx="18"
                fill={node.tone === 'accent' ? 'rgba(255,92,40,0.12)' : 'rgba(255,255,255,0.03)'}
                stroke={node.tone === 'accent' ? 'rgba(255,92,40,0.45)' : 'rgba(255,255,255,0.12)'}
              />
              <text
                x={node.x + node.width / 2}
                y={node.y + node.height / 2 + 5}
                textAnchor="middle"
                fill="#F5F4F0"
                fontSize="15"
                fontFamily="JetBrains Mono, monospace"
              >
                {node.label}
              </text>
            </MotionGroup>
          );
        })}
      </svg>
    </div>
  );
}
