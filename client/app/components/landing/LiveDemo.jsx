"use client";

import { useEffect, useRef, useState } from "react";
import {
  DEMO_FILE_NAME,
  DEMO_QUESTIONS,
  DEMO_SECTIONS,
} from "./content";

export default function LiveDemo() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(DEMO_QUESTIONS[0].answer.length);
  const [lit, setLit] = useState(false);
  const lastAnimated = useRef(0);

  const current = DEMO_QUESTIONS[active];
  const finished = shown >= current.answer.length;
  const matched = DEMO_SECTIONS.find((s) => s.id === current.source);

  // The highlighter sweeps across the first passage shortly after the page loads.
  useEffect(() => {
    const t = setTimeout(() => setLit(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Write the answer out letter by letter when a new question is picked.
  useEffect(() => {
    const full = DEMO_QUESTIONS[active].answer;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (lastAnimated.current === active || reduce) {
      setShown(full.length);
      return;
    }

    lastAnimated.current = active;
    setShown(0);
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= full.length) {
          clearInterval(id);
          return n;
        }
        return n + 2;
      });
    }, 20);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="grid overflow-hidden rounded-2xl border hairline surface shadow-[0_24px_60px_-30px_rgba(19,28,51,0.35)] lg:grid-cols-[1.05fr_1fr]">
      {/* The document */}
      <div className="border-b hairline p-4 sm:p-6 lg:border-b-0 lg:border-r">
        <div className="mb-4 flex items-center justify-between gap-3 text-sm">
          <span className="font-medium">{DEMO_FILE_NAME}</span>
          <span className="muted">Sample document</span>
        </div>

        <article
          className="doc-font rounded-lg border hairline bg-[#fdfdfb] px-5 py-6 sm:px-8 sm:py-8"
          aria-label="Sample lease agreement"
        >
          <h3 className="mb-5 text-xl font-semibold" style={{ letterSpacing: 0 }}>
            Residential lease agreement
          </h3>
          <div className="space-y-5 text-[0.95rem] leading-[1.75]">
            {DEMO_SECTIONS.map((s) => (
              <section key={s.id}>
                <h4 className="mb-1 font-semibold">
                  {s.number}. {s.title}
                </h4>
                <p>
                  <mark
                    className="passage"
                    data-on={lit && current.source === s.id ? "true" : "false"}
                  >
                    {s.text}
                  </mark>
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>

      {/* The chat */}
      <div className="flex flex-col p-4 sm:p-6">
        <p className="muted mb-4 text-sm">Pick a question to see how the answer is found.</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {DEMO_QUESTIONS.map((q, i) => (
            <button
              key={q.ask}
              type="button"
              className="chip"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {q.ask}
            </button>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-[var(--ink)] px-4 py-3 text-sm text-white">
            {current.ask}
          </div>

          <div className="max-w-[95%] rounded-2xl rounded-bl-md border hairline bg-[var(--paper)] px-4 py-3 text-[0.95rem] leading-relaxed">
            <span aria-hidden="true">
              {current.answer.slice(0, shown)}
              {!finished && <span className="caret" />}
            </span>
            {/* Screen readers get the full answer once, instead of every letter */}
            <span className="sr-only" aria-live="polite">
              {current.answer}
            </span>
          </div>

          <p className="muted text-sm" style={{ minHeight: "1.25rem" }}>
            {finished
              ? matched
                ? `Found in section ${matched.number}, ${matched.title}.`
                : "No passage matched, so there’s nothing to answer from."
              : "Searching the document…"}
          </p>
        </div>
      </div>
    </div>
  );
}
