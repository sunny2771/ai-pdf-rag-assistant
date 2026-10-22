import { APP_NAME, AUTHOR, GITHUB_URL } from "./content";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm sm:px-6">
        <p className="muted">
          {APP_NAME}, built by {AUTHOR}.
        </p>
        {GITHUB_URL ? (
          <a href={GITHUB_URL} className="link-plain" target="_blank" rel="noreferrer">
            View the code on GitHub
          </a>
        ) : null}
      </div>
    </footer>
  );
}
