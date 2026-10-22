import { ASK_STEPS, UPLOAD_STEPS } from "./content";

function Steps({ title, intro, steps }) {
  return (
    <div>
      <h3 className="text-xl">{title}</h3>
      <p className="muted mt-2 max-w-md">{intro}</p>

      <ol className="mt-8 space-y-0">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Line connecting each step to the next */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[0.85rem] top-8 bottom-0 w-px bg-[var(--line)]"
              />
            )}
            <span className="step-dot" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold leading-snug">{step.title}</p>
              <p className="muted mt-1 max-w-md text-[0.95rem] leading-relaxed">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Pipeline() {
  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 className="max-w-2xl text-3xl sm:text-4xl">
        How your PDF becomes answers
      </h2>
      <p className="muted mt-4 max-w-xl text-lg leading-relaxed">
        Two short journeys: one when you upload a file, one every time you ask
        something.
      </p>

      <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Steps
          title="When you upload"
          intro="This happens once per document."
          steps={UPLOAD_STEPS}
        />
        <Steps
          title="When you ask"
          intro="This happens in seconds, every time."
          steps={ASK_STEPS}
        />
      </div>
    </section>
  );
}
