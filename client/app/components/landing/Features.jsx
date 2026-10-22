import { FEATURES } from "./content";

export default function Features() {
  return (
    <section className="border-y hairline surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <h2 className="text-3xl sm:text-4xl">What you can do with it</h2>
          <p className="muted mt-4 max-w-sm text-lg leading-relaxed">
            Built for getting answers out of long documents quickly.
          </p>
        </div>

        <ul>
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className={`py-6 ${i === 0 ? "pt-0" : "border-t hairline"}`}
            >
              <h3 className="text-lg">{f.title}</h3>
              <p className="muted mt-1.5 max-w-lg leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
