import { PrimaryCta } from "./Cta";

export default function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <div className="rounded-2xl bg-[var(--ink)] px-6 py-14 text-white sm:px-12 sm:py-16">
        <h2 className="max-w-xl text-3xl sm:text-4xl">
          Stop scrolling through long PDFs.
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-[#c9d0e4]">
          Upload one and ask it what you actually need to know.
        </p>
        <div className="mt-8">
          <PrimaryCta>Upload a PDF</PrimaryCta>
        </div>
      </div>
    </section>
  );
}
