import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Redbelly DAO Task Board - TASK-25 Proposal Evaluation Framework",
      },
      {
        name: "description",
        content:
          "Reference site for the Redbelly DAO Task Board TASK-25 Proposal Evaluation Framework rubric, built from the DAO's ratified checklist, constitution, and code of conduct.",
      },
      {
        property: "og:title",
        content: "Redbelly DAO Task Board - TASK-25 Proposal Evaluation Framework",
      },
      {
        property: "og:description",
        content:
          "Reference site for the Redbelly DAO Task Board TASK-25 Proposal Evaluation Framework rubric.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const PDF_URL =
  "https://cdn.jsdelivr.net/gh/hildecorp/redbellydaotask25@main/website/TASK-25-Proposal-Evaluation-Rubric.pdf";

const DOCS_URL =
  "https://docs.google.com/viewer?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fhildecorp%2Fredbellydaotask25%40main%2Fwebsite%2FTASK-25-Proposal-Evaluation-Rubric.docx&embedded=true";

const SNAPSHOT_URL =
  "https://snapshot.box/#/s:rbnt.eth/proposal/0xf2a05384e37a710c1600db1abbac9b4dc66444a56a1ed49df7f0e3dbfd7570e7";

const CONSTITUTION_URL =
  "https://firebasestorage.googleapis.com/v0/b/redbelly-community-dao.firebasestorage.app/o/resources%2F1762476390856-Redbelly%20Community%20DAO%20Constitution%20v1.2%20-%20Ratified.pdf?alt=media&token=c89ccef9-cc7c-4a37-9b43-a3fac9e49ddc";

const CODE_OF_CONDUCT_URL =
  "https://firebasestorage.googleapis.com/v0/b/redbelly-community-dao.firebasestorage.app/o/resources%2F1762476540292-Redbelly%20Community%20DAO%20Code%20of%20Conduct%20-%20Ratified.pdf?alt=media&token=84ca2c33-a502-4991-9720-4e6154847416";

const GITHUB_URL = "https://github.com/hildecorp/redbellydaotask25";

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1280px]">
          {/* Logo */}
          <header className="mb-12 md:mb-16">
            <img
              src="/dao-logo-on-dark.png"
              alt="Redbelly DAO"
              width={191}
              height={40}
              className="h-8 w-auto md:h-10"
              style={{ minHeight: "28px" }}
            />
          </header>

          {/* Intro */}
          <section className="mb-10 md:mb-12">
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              TASK-25 Proposal Evaluation Framework
            </h1>
            <div className="max-w-[75ch] space-y-4 text-base text-foreground-secondary md:text-lg">
              <p>
                This page holds the Proposal Evaluation Framework rubric for Redbelly DAO Task Board
                TASK-25. It automates the DAO's already-ratified 11-criterion checklist.
              </p>
              <p>
                The rubric is built from the three official sources below. Each link opens the
                ratified original in a new tab.
              </p>
            </div>
          </section>

          {/* Source links */}
          <section className="mb-12 md:mb-16">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <h2 className="mb-4 border-b border-[#27323a] pb-4 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Official sources
              </h2>
              <ul className="space-y-4 pt-2">
                <li>
                  <a
                    href={SNAPSHOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col gap-1 text-[var(--accent-text)] transition-colors hover:text-[var(--primary)] sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <span className="text-base font-semibold">Ratified checklist on Snapshot</span>
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-[var(--accent-text)]">
                      rbnt.eth proposal
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONSTITUTION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col gap-1 text-[var(--accent-text)] transition-colors hover:text-[var(--primary)] sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <span className="text-base font-semibold">Constitution v1.2</span>
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-[var(--accent-text)]">
                      PDF
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CODE_OF_CONDUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col gap-1 text-[var(--accent-text)] transition-colors hover:text-[var(--primary)] sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <span className="text-base font-semibold">Code of Conduct v1.0</span>
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-[var(--accent-text)]">
                      PDF
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Action buttons */}
          <section>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read Full PDF Report
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read Full Docs
              </a>
              <span
                aria-disabled="true"
                role="button"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-sm border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-muted-foreground"
              >
                Read Full Article
              </span>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background-deep px-4 py-8 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 flex items-center justify-center gap-6">
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read full PDF report"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <PdfIcon />
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read full docs"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <DocsIcon />
            </a>
            <span
              aria-disabled="true"
              role="button"
              aria-label="Read full article - coming soon"
              className="cursor-not-allowed text-muted-foreground"
            >
              <DevToIcon />
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <GitHubIcon />
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Reference site for the Redbelly DAO Task Board TASK-25 deliverable.
          </p>
        </div>
      </footer>
    </div>
  );
}

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10 13v-2h2" />
      <path d="M10 17.5V15h1.5a1.5 1.5 0 0 1 0 3H10" />
      <path d="M14 15h1.5a1.5 1.5 0 0 1 0 3H14v-3" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function DevToIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.42 10.05c-.77-.02-1.13.4-1.13.89v3.86c0 .5.36.93 1.13.91.78-.02 1.13-.42 1.13-.91v-3.86c0-.49-.35-.91-1.13-.89z" />
      <path d="M19.15 10.4c-.4-.15-.8-.05-1.05.25l-.1.13v4.45l.1.13c.25.3.65.4 1.05.25.42-.15.65-.5.65-.9v-2.41c0-.4-.23-.75-.65-.9z" />
      <path d="M22 7.42v9.16c0 1.55-1.25 2.8-2.8 2.8H4.8C3.25 19.38 2 18.13 2 16.58V7.42c0-1.55 1.25-2.8 2.8-2.8h14.4c1.55 0 2.8 1.25 2.8 2.8zM4.8 5.62C3.26 5.62 2 6.88 2 8.42v7.16c0 1.54 1.26 2.8 2.8 2.8h14.4c1.54 0 2.8-1.26 2.8-2.8V8.42c0-1.54-1.26-2.8-2.8-2.8H4.8zm2.62 9.18c0 .9-.67 1.63-1.87 1.65H3.9a.4.4 0 0 1-.4-.4V8.95c0-.22.18-.4.4-.4h1.65c1.2.02 1.87.75 1.87 1.65v4.6zm6.13.4c0 .22-.18.4-.4.4h-1.68a.4.4 0 0 1-.4-.4V8.95c0-.22.18-.4.4-.4h1.68c.22 0 .4.18.4.4v6.65zm4.42-4.86c0 .22-.18.4-.4.4h-.95v1.47h.95c.22 0 .4.18.4.4v.74c0 .22-.18.4-.4.4h-.95v1.64h.95c.22 0 .4.18.4.4v.74c0 .22-.18.4-.4.4h-1.75a.4.4 0 0 1-.4-.4V8.95c0-.22.18-.4.4-.4h1.75c.22 0 .4.18.4.4v1.59z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}
