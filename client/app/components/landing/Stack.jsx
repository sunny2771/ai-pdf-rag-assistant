import { STACK } from "./content";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 className="max-w-2xl text-3xl sm:text-4xl">Built with</h2>
      <p className="muted mt-4 max-w-xl text-lg leading-relaxed">
        A Next.js frontend, an Express API, a job queue for the heavy work, and
        Gemini plus Qdrant for the AI.
      </p>

      <dl className="mt-12 border-t hairline">
        {STACK.map((row) => (
          <div
            key={row.role}
            className="grid gap-1 border-b hairline py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
          >
            <dt className="muted">{row.role}</dt>
            <dd className="font-medium">{row.tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
