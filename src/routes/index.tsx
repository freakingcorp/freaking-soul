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
                className="inline-flex items-center justify-center rounded-sm border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-[var(--accent-text)] hover:text-[var(--accent-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

          {/* Section 01 */}
          <section className="mt-16 md:mt-20">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Section 01
              </p>
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                How Pre-Screening Works
              </h2>
              <div className="max-w-[75ch] space-y-4 text-base text-foreground-secondary">
                <p>
                  This framework automates the DAO's already-ratified 11-criterion Proposal Review
                  Checklist (Snapshot proposal #7, adopted 6 October 2025). A proposal is checked
                  against all 11 criteria. Each one returns pass or flag, with the specific reason
                  and the Constitution or Code of Conduct section it cites.
                </p>
                <p>
                  Pre-screening is not a decision. It runs before Guild and High Council review, not
                  instead of it. A flagged criterion means a reviewer should look closer, not that
                  the proposal is rejected.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02 */}
          <section className="mt-16 md:mt-20">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Section 02
            </p>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Known Discrepancies
            </h2>
            <div className="space-y-4">
              {DISCREPANCIES.map((d) => (
                <div
                  key={d.label}
                  className="rounded-lg border border-[var(--primary)] bg-card p-5 md:p-6"
                >
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--primary)]">
                    {d.label}
                  </p>
                  <p className="max-w-[75ch] text-base text-foreground">{d.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03 */}
          <section className="mt-16 md:mt-20">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Section 03
            </p>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              The 11 Criteria
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Showing all 11. Each card is what the pre-screening tool checks and cites.
            </p>
            <div className="space-y-4">
              {CRITERIA.map((c) => (
                <article
                  key={c.number}
                  className="rounded-lg border border-border bg-card"
                >
                  <div className="flex flex-col gap-2 border-b border-[#27323a] p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-muted-foreground">{c.number}</span>
                      <h3 className="text-base font-semibold text-foreground">{c.name}</h3>
                    </div>
                    <span
                      className={
                        "font-mono text-xs " +
                        (c.anchor === "No Constitution anchor"
                          ? "text-muted-foreground"
                          : "text-[var(--accent-text)]")
                      }
                    >
                      {c.anchor}
                    </span>
                  </div>
                  <p className="max-w-[75ch] p-5 text-base text-foreground-secondary">{c.flag}</p>
                </article>
              ))}
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

function MaskIcon({ src, label }: { src: string; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-block h-6 w-6 bg-current"
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

function PdfIcon() {
  return <MaskIcon src="/filetype-pdf.svg" label="PDF" />;
}

function DocsIcon() {
  return <MaskIcon src="/docs-svgrepo-com.svg" label="Docs" />;
}

function DevToIcon() {
  return <MaskIcon src="/devto-ar21.svg" label="dev.to" />;
}

function GitHubIcon() {
  return <MaskIcon src="/github.svg" label="GitHub" />;
}

