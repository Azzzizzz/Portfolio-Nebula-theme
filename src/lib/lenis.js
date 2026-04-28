import Lenis from 'lenis';

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (value) => Math.min(1, 1.001 - 2 ** (-10 * value)),
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  return lenis;
}
