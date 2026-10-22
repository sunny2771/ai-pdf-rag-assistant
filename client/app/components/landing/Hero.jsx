import { PrimaryCta } from "./Cta";
import LiveDemo from "./LiveDemo";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
      <h1 className="max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl">
        Ask your PDF a question. Get an answer from the page.
      </h1>
      <p className="muted mt-5 max-w-xl text-lg leading-relaxed">
        Upload a document and chat with it. Every answer is written from
        passages found in your own file, not from whatever the AI happens to
        remember.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <PrimaryCta>Upload a PDF</PrimaryCta>
        <a href="#how" className="btn btn-quiet">
          See how it works
        </a>
      </div>

      <div className="mt-12 sm:mt-16">
        <LiveDemo />
        <p className="muted mt-3 text-sm">
          An illustration with a made-up document. Your own files work the same
          way.
        </p>
      </div>
    </section>
  );
}
