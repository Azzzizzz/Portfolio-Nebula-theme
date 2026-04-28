import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/constants';

export default function Blog() {
  return (
    <section id="notes" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mb-16">
          <span className="label-mono">04 / Field Notes</span>
          <h2 className="mt-4 font-display text-[3rem] leading-[0.98] tracking-[-0.04em] md:text-[4.6rem]">
            Currently writing about
          </h2>
        </div>

        <div className="border-y border-white/[0.06]">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="grid gap-5 border-b border-white/[0.06] py-8 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)_160px]"
            >
              <div>
                <div className="label-mono">{post.category}</div>
                <div className="label-mono mt-2 opacity-70">{post.meta}</div>
              </div>
              <div>
                <h3 className="font-display text-[2rem] leading-tight tracking-[-0.03em]">
                  {post.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                <span className="label-mono accent-text">[{post.status}]</span>
                <span className="label-mono inline-flex items-center gap-2 text-foreground/80">
                  Read when ready <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
