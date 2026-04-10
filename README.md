# Voxmind — Chat with Your Books

> Upload a PDF book and have an interactive AI voice conversation with its content.

Voxmind lets you turn any book into a voice-powered AI assistant. Upload a PDF, choose a voice persona, and start talking with your book — the AI answers questions and discusses ideas grounded in the actual text.

## Features

- **PDF Upload & Parsing** — Client-side PDF text extraction and automatic cover image generation using `pdfjs-dist`
- **AI Voice Chat** — VAPI voice assistant with ElevenLabs TTS voices (5 personas: Rachel, George, Aria, Eric, Sarah)
- **Smart Text Segmentation** — Text is chunked into ~500-word overlapping segments for accurate RAG-based retrieval
- **Full-text Search** — MongoDB text index search with regex fallback for book content retrieval
- **Authentication** — Clerk-powered sign-in/sign-up with modal UI
- **Cloud File Storage** — PDF and cover images stored on Vercel Blob

## Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Framework    | Next.js 16.2.1 (App Router)          |
| Language     | TypeScript 5                         |
| Styling      | Tailwind CSS v4, shadcn/ui, Radix UI |
| Forms        | React Hook Form + Zod v4             |
| Auth         | Clerk (`@clerk/nextjs` v7)           |
| Database     | MongoDB via Mongoose v9              |
| File Storage | Vercel Blob                          |
| PDF Parsing  | `pdfjs-dist` v5 (client-side)        |
| Voice AI     | VAPI + ElevenLabs                    |

## Project Structure

```
voxmind/
├── app/
│   ├── layout.tsx                # Root layout with ClerkProvider, Navbar, Toaster
│   └── (root)/
│       ├── page.tsx              # / → Library home page
│       └── books/new/page.tsx    # /books/new → Upload new book
├── components/
│   ├── NavBar.tsx                # Fixed header with auth UI
│   ├── UploadForm.tsx            # Book upload pipeline orchestrator
│   ├── FileUploader.tsx          # Reusable file-drop zone
│   ├── VoiceSelector.tsx         # ElevenLabs voice picker
│   ├── LoadingOverlay.tsx        # Processing spinner overlay
│   ├── BookCard.tsx              # Book grid card
│   ├── LibraryHero.tsx           # Hero banner with CTA
│   └── ui/                       # shadcn/ui primitives
├── database/models/
│   ├── book.model.ts             # Book MongoDB model
│   └── book-segment.model.ts     # Text chunk MongoDB model
├── lib/
│   ├── constants.ts              # Voices, file limits, VAPI config
│   ├── utils.ts                  # PDF parsing, text segmentation, helpers
│   ├── zod.ts                    # Form validation schema
│   └── actions/book.actions.ts   # Next.js Server Actions
├── types.d.ts                    # Shared TypeScript interfaces
└── proxy.ts                      # Clerk middleware
```

## Environment Variables

Create a `.env.local` file at the project root:

```env
# Clerk Authentication — https://dashboard.clerk.com/last-active?path=api-keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Redirects
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>

# VAPI Voice Assistant
NEXT_PUBLIC_ASSISTANT_ID=your-vapi-assistant-id

# Vercel Blob (auto-injected on Vercel deployments)
BLOB_READ_WRITE_TOKEN=your-blob-token
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
