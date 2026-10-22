import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { APP_HREF } from "./content";

// One button that does the right thing for both states:
// signed out -> opens Clerk's sign-up modal, signed in -> goes to the app.
export function PrimaryCta({ children = "Upload a PDF" }) {
  return (
    <>
      <SignedOut>
        <SignUpButton mode="modal">
          <button type="button" className="btn btn-primary">
            {children}
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Link href={APP_HREF} className="btn btn-primary">
          Open the app
        </Link>
      </SignedIn>
    </>
  );
}
