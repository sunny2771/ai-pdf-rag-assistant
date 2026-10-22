export default function WhyRag() {
  return (
    <section id="why" className="border-y hairline surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="max-w-2xl text-3xl sm:text-4xl">
          A chatbot guesses. This one looks it up first.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
          <div className="md:pr-12">
            <h3 className="muted text-lg">A chatbot on its own</h3>
            <p className="muted mt-3 max-w-md leading-relaxed">
              It answers from what it learned during training. It has never
              seen your PDF, so when you ask about it, it can only guess, and
              the guess often sounds confident.
            </p>
          </div>

          <div className="md:border-l md:pl-12 hairline">
            <h3 className="text-lg">With retrieval-augmented generation</h3>
            <p className="mt-3 max-w-md leading-relaxed">
              The app first finds the passages in your PDF that relate to your
              question. Then the model writes its answer from those passages.
              That keeps replies relevant to your document and cuts down on
              made-up answers.
            </p>
            <p className="mt-4 max-w-md leading-relaxed">
              If your document doesn’t cover the question, the right answer is
              that it doesn’t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
