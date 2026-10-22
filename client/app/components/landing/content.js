// All copy and links for the home page live here, so you can edit text without touching layout code.

export const APP_NAME = "PDF RAG Assistant";
export const AUTHOR = "Sunny";

// Where signed-in users go from the "Open the app" button. Change to your real route.
export const APP_HREF = "/chat";

// Leave empty to hide the link in the footer.
export const GITHUB_URL = "";

// ---------------------------------------------------------------------------
// Live demo: a made-up lease agreement and four sample questions.
// ---------------------------------------------------------------------------

export const DEMO_FILE_NAME = "sample-lease-agreement.pdf";

export const DEMO_SECTIONS = [
  {
    id: "rent",
    number: "3",
    title: "Rent",
    text: "Rent is due on the first day of each month. A late fee of $50 applies to any payment received after the fifth day of the month.",
  },
  {
    id: "deposit",
    number: "5",
    title: "Security deposit",
    text: "The security deposit of $1,200 will be returned within 30 days after the tenant vacates, less any deductions for damage beyond normal wear and tear.",
  },
  {
    id: "pets",
    number: "8",
    title: "Pets",
    text: "Cats and dogs under 25 pounds are permitted with a one-time pet fee of $300. No other animals may be kept on the premises without written consent.",
  },
  {
    id: "termination",
    number: "11",
    title: "Termination",
    text: "Either party may end the lease at the end of the term by giving at least 60 days’ written notice.",
  },
];

export const DEMO_QUESTIONS = [
  {
    ask: "How much notice do I need to give before moving out?",
    answer:
      "You need to give at least 60 days’ written notice before the end of the lease term.",
    source: "termination",
  },
  {
    ask: "When do I get my deposit back?",
    answer:
      "Your $1,200 deposit is returned within 30 days after you move out, minus deductions for damage beyond normal wear and tear.",
    source: "deposit",
  },
  {
    ask: "Can I have a dog?",
    answer:
      "Yes, if it’s under 25 pounds. There’s a one-time pet fee of $300. Any other animal needs written consent.",
    source: "pets",
  },
  {
    ask: "Is parking included?",
    answer:
      "I couldn’t find anything about parking in this document, so I can’t answer that from it.",
    source: null,
  },
];

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const UPLOAD_STEPS = [
  {
    title: "You upload a PDF",
    detail: "The file goes to an Express API.",
  },
  {
    title: "Processing starts in the background",
    detail:
      "The job is added to a BullMQ queue backed by Redis, so the upload returns right away.",
  },
  {
    title: "The text is split into chunks",
    detail: "Small, meaningful pieces of the document, ready to be searched.",
  },
  {
    title: "Each chunk becomes a vector",
    detail:
      "Gemini embeddings turn the meaning of each chunk into numbers a computer can compare.",
  },
  {
    title: "Vectors are stored",
    detail: "They’re saved in Qdrant Cloud, a vector database.",
  },
];

export const ASK_STEPS = [
  {
    title: "You ask a question",
    detail: "Your question is turned into a vector with the same Gemini embeddings.",
  },
  {
    title: "The closest chunks are found",
    detail:
      "Qdrant runs a similarity search and returns the passages most related to your question.",
  },
  {
    title: "Those passages become the context",
    detail: "Only the relevant parts of your PDF are handed to the model.",
  },
  {
    title: "Gemini writes the answer",
    detail: "The reply is based on your document, not on general training data.",
  },
];

// ---------------------------------------------------------------------------
// What you can do
// ---------------------------------------------------------------------------

export const FEATURES = [
  {
    title: "Ask questions about any PDF",
    body: "Contracts, papers, manuals, reports. Upload the file and ask in plain language.",
  },
  {
    title: "Get answers grounded in your document",
    body: "Retrieval finds the relevant passages first, so the model answers from your file instead of guessing.",
  },
  {
    title: "Generate structured PDF reports",
    body: "Turn what’s in a document into a clean, organized report you can download.",
  },
  {
    title: "Keep working while it processes",
    body: "Uploads are handled by a background queue, so the app stays responsive.",
  },
  {
    title: "Sign in securely",
    body: "Authentication is handled by Clerk.",
  },
];

// ---------------------------------------------------------------------------
// Tech stack
// ---------------------------------------------------------------------------

export const STACK = [
  { role: "Frontend", tools: "Next.js, React, Tailwind CSS" },
  { role: "Authentication", tools: "Clerk" },
  { role: "Backend", tools: "Node.js, Express" },
  { role: "Job queue", tools: "BullMQ with Redis (Upstash)" },
  { role: "RAG pipeline", tools: "LangChain, semantic chunking" },
  { role: "Embeddings", tools: "Google Gemini" },
  { role: "Vector database", tools: "Qdrant Cloud" },
  { role: "Language model", tools: "Google Gemini" },
  { role: "Hosting", tools: "Render" },
];
