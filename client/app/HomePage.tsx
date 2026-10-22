import "./globals.css";
import { uiFont, docFont } from "./components/landing/fonts";
import Nav from "./components/landing/Nav";
import Hero from "./components/landing/Hero";
import WhyRag from "./components/landing/WhyRag";
import Pipeline from "./components/landing/Pipeline";
import Features from "./components/landing/Features";
import Stack from "./components/landing/Stack";
import FinalCta from "./components/landing/FinalCta";
import Footer from "./components/landing/Footer";

export const metadata = {
  title: "PDF RAG Assistant: ask your PDF anything",
  description:
    "Upload a PDF and ask questions about it. Answers are written from passages found in your own document using retrieval-augmented generation.",
};

export default function Home() {
  return (
    <div className={`landing ${uiFont.variable} ${docFont.variable}`}>
      <Nav />
      <main>
        <Hero />
        <WhyRag />
        <Pipeline />
        <Features />
        <Stack />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
