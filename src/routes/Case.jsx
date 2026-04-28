import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { casePages, caseStudies } from '@/constants';

export default function Case() {
  const { slug } = useParams();
  const page = slug ? casePages[slug] : null;
  const summary = slug ? caseStudies.find((item) => item.id === slug) : null;

  if (!page || !summary) {
    return (
      <main className="min-h-screen bg-[#f2efe8] px-5 py-20 text-[#1a1a1f] md:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </Link>
          <h1 className="mt-8 font-display text-5xl tracking-[-0.04em]">Case not found.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f2efe8] text-[#1a1a1f]">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#ff5c28]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <header className="mt-12 border-b border-black/10 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">{page.kicker}</p>
          <h1 className="mt-4 font-display text-[3.2rem] leading-[0.95] tracking-[-0.05em] md:text-[5.5rem]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a4a52]">{page.intro}</p>
        </header>

        <section className="grid gap-8 border-b border-black/10 py-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">Started from</p>
            <p className="mt-3 text-base leading-7 text-[#4a4a52]">{summary.context.startedFrom}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">Ended at</p>
            <p className="mt-3 text-base leading-7 text-[#4a4a52]">{summary.context.endedAt}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">My role</p>
            <p className="mt-3 text-base leading-7 text-[#4a4a52]">{summary.context.myRole}</p>
          </div>
        </section>

        <section className="grid gap-14 py-14">
          {page.sections.map((section) => (
            <article key={section.heading} className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">
                {section.heading}
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-[#1a1a1f]">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="border-t border-black/10 pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b73]">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {summary.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#1a1a1f]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
