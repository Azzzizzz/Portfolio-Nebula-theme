import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/constants';

const EASE = [0.16, 1, 0.3, 1];

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const [formState, setFormState] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'send failed');
      }

      setStatus('sent');
      setFormState(INITIAL_FORM);
    } catch (submitError) {
      setStatus('error');
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Unable to send right now.'
      );
    }
  };

  const emailLink = personalInfo.social.find((item) => item.name === 'Email')?.url;
  const MotionDiv = motion.div;
  const MotionForm = motion.form;

  return (
    <section id="contact" className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:px-8">
        <div>
          <span className="label-mono">05 / Contact</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.6rem]">
            If the work maps
            <br />
            to what you need,
            <br />
            write.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            I reply fast, I like concrete problems, and I would rather talk through
            systems than rehearse portfolio adjectives.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={emailLink}
              className="flex items-start gap-4 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition-colors hover:bg-white/[0.05] focus-ring"
            >
              <Mail className="mt-1 h-5 w-5 text-[hsl(var(--accent))]" />
              <div>
                <p className="label-mono mb-1">Email</p>
                <p className="text-base text-foreground">{personalInfo.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5">
              <MapPin className="mt-1 h-5 w-5 text-[hsl(var(--accent))]" />
              <div>
                <p className="label-mono mb-1">Location</p>
                <p className="text-base text-foreground">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <MotionDiv
                key="sent"
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, ease: EASE }}
                className="rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
              >
                <p className="label-mono accent-text">Message received</p>
                <h3 className="mt-4 font-display text-[2.6rem] leading-none tracking-[-0.04em] md:text-[3.5rem]">
                  Got it.
                </h3>
                <p className="mt-5 max-w-lg text-lg leading-8 text-ink-muted">
                  I reply within 24 hours. If the brief is concrete, even better.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="label-mono mt-8 rounded-sm text-foreground transition-colors hover:text-[hsl(var(--accent))] focus-ring"
                >
                  Send another note
                </button>
              </MotionDiv>
            ) : (
              <MotionForm
                key="form"
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, ease: EASE }}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
              >
                <div>
                  <label htmlFor="name" className="label-mono mb-3 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/[0.08] bg-background px-5 py-4 text-base text-foreground placeholder:text-ink-faint focus-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label-mono mb-3 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/[0.08] bg-background px-5 py-4 text-base text-foreground placeholder:text-ink-faint focus-ring"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-mono mb-3 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-background px-5 py-4 text-base text-foreground placeholder:text-ink-faint focus-ring"
                    placeholder="Role, problem, timeline, or the specific kind of systems work you need."
                  />
                </div>

                {status === 'error' ? (
                  <p className="label-mono text-[hsl(var(--accent))]">
                    Unable to send: {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-4 text-sm font-medium text-[hsl(var(--accent-ink))] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </MotionForm>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
