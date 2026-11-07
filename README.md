# TruGrade Legacy v2 - Phase 1

A modern grading and assessment platform designed to provide transparent, fair, and actionable feedback for students and educators.

## Vision

TruGrade reimagines how academic work is evaluated by combining:
- **Transparent rubrics** — Students see exactly how they'll be graded before submission
- **Detailed feedback** — Every score comes with specific, actionable comments
- **Progress tracking** — Visual dashboards showing improvement over time
- **Fair assessment** — Consistent evaluation criteria across all submissions

## Phase 1 Scope

This phase focuses on the core grading engine:

- [ ] Rubric builder with customizable criteria and point scales
- [ ] Submission intake (text, file upload, URL)
- [ ] Scoring interface for evaluators
- [ ] Student feedback view with breakdown by criterion
- [ ] Basic analytics dashboard

## Tech Stack

- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/              # Utilities and helpers
prisma/
└── schema.prisma     # Database schema
```

## Getting Started

```bash
npm install
npx prisma migrate dev
npm run dev
```

## Status

🚧 **Phase 1 in progress**

## License

MIT
