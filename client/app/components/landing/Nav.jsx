import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { APP_NAME, APP_HREF } from "./content";
import { PrimaryCta } from "./Cta";

function Logo() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
      <rect x="4" y="2" width="18" height="22" rx="3" fill="#fff" stroke="#131c33" strokeWidth="1.6" />
      <rect x="8" y="8" width="10" height="4" rx="1" fill="#ffe45c" />
      <rect x="8" y="15" width="7" height="1.8" rx="0.9" fill="#131c33" />
      <rect x="8" y="19" width="9" height="1.8" rx="0.9" fill="#131c33" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b hairline bg-[rgba(246,247,251,0.88)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo />
          <span>{APP_NAME}</span>
        </Link>

        <nav aria-label="Page sections" className="hidden items-center gap-7 text-sm md:flex">
          <a href="#why" className="link-plain">Why it’s different</a>
          <a href="#how" className="link-plain">How it works</a>
          <a href="#stack" className="link-plain">Built with</a>
        </nav>

        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button type="button" className="btn btn-quiet hidden sm:inline-flex">
                Sign in
              </button>
            </SignInButton>
            <PrimaryCta>Get started</PrimaryCta>
          </SignedOut>
          <SignedIn>
            <Link href={APP_HREF} className="btn btn-primary">
              Open the app
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
