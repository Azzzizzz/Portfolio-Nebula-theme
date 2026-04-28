import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Design tokens ───────────────────────────── */
        surface: {
          0: 'hsl(var(--surface-0))',
          1: 'hsl(var(--surface-1))',
          2: 'hsl(var(--surface-2))',
        },
        ink: {
          DEFAULT: 'hsl(var(--ink))',
          muted:   'hsl(var(--ink-muted))',
          faint:   'hsl(var(--ink-faint))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          ink:     'hsl(var(--accent-ink))',
        },

        /* ── shadcn/ui compat ────────────────────────── */
        border:     'hsl(var(--edge))',
        input:      'hsl(var(--surface-2))',
        ring:       'hsl(var(--accent))',
        background: 'hsl(var(--surface-0))',
        foreground: 'hsl(var(--ink))',
        primary: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-ink))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--surface-2))',
          foreground: 'hsl(var(--ink))',
        },
        destructive: {
          DEFAULT:    'hsl(0 62.8% 30.6%)',
          foreground: 'hsl(0 0% 98%)',
        },
        muted: {
          DEFAULT:    'hsl(var(--surface-2))',
          foreground: 'hsl(var(--ink-muted))',
        },
        popover: {
          DEFAULT:    'hsl(var(--surface-1))',
          foreground: 'hsl(var(--ink))',
        },
        card: {
          DEFAULT:    'hsl(var(--surface-1))',
          foreground: 'hsl(var(--ink))',
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      fontFamily: {
        sans:    ["'Geist'", "'Geist Sans'", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "Georgia", "serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },

      fontSize: {
        'display': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1',    letterSpacing: '-0.03em' }],
        '8xl': ['6rem',   { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        '9xl': ['8rem',   { lineHeight: '0.9',  letterSpacing: '-0.05em' }],
      },

      spacing: {
        section:    '8rem',
        'section-sm': '5rem',
      },

      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      boxShadow: {
        'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
    }
  },
  plugins: [tailwindcssAnimate],
}
