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

const DISCREPANCIES: { label: string; body: string }[] = [
  {
    label: "Three working groups vs. five pods",
    body: "The ratified checklist text names three working groups: Community, Marketing, Developers/Builders. Constitution Section 3 ratifies five pods, adding Researcher and Partnerships. This framework follows the Constitution as the current, in-force structure. A Researcher or Partnerships submission is not flagged for its pod choice.",
  },
  {
    label: "Criterion 11 has no ratified flag condition",
    body: "Every other criterion in the ratified checklist pairs a pass condition with an explicit flag rule. Community Involvement does not. Any flag raised here is labelled informational only and never marks a proposal as failing pre-screening on its own.",
  },
];

const CRITERIA: {
  number: string;
  name: string;
  anchor: string;
  flag: string;
  link?: string;
}[] = [
  {
    number: "01",
    name: "Budget Alignment & Limits",
    anchor: "Section 6.2",
    flag: "Flags if the USDT or RBNT field is empty while the proposal clearly needs funding, or the justification is under roughly 20 words.",
    link: `${CONSTITUTION_URL}#page=10`,
  },
  {
    number: "02",
    name: "Payment & Payout Structure",
    anchor: "Section 7",
    flag: "Flags if Upfront is selected with no justification, or the milestone list is empty.",
    link: `${CONSTITUTION_URL}#page=11`,
  },
  {
    number: "03",
    name: "Strategic Fit",
    anchor: "Section 3",
    flag: "Flags if the alignment text is empty or under roughly 15 words. Never flags based on which of the five pods is chosen.",
    link: `${CONSTITUTION_URL}#page=7`,
  },
  {
    number: "04",
    name: "Feasibility & Timeline",
    anchor: "No Constitution anchor",
    flag: "Flags if the timeline is empty or the resourcing note is empty.",
  },
  {
    number: "05",
    name: "Oversight & Accountability",
    anchor: "Section 6.1",
    flag: "Flags if the reviewer field or the monthly update plan is empty.",
    link: `${CONSTITUTION_URL}#page=10`,
  },
  {
    number: "06",
    name: "Impact & Measurement",
    anchor: "No Constitution anchor",
    flag: "Flags if KPIs are empty, or only short-term value is described with nothing under long-term or community value.",
  },
  {
    number: "07",
    name: "Risk & Mitigation",
    anchor: "No Constitution anchor",
    flag: "Flags if the risk list is empty or any risk has no paired mitigation.",
  },
  {
    number: "08",
    name: "Co-Funding & Leverage",
    anchor: "No Constitution anchor",
    flag: "Flags, informationally and non-blocking, if left empty.",
  },
  {
    number: "09",
    name: "Contribution Equity",
    anchor: "Section 5",
    flag: "Flags if one contributor's share of payout is disproportionate, or a listed contributor already holds another paid DAO role with no justification given.",
    link: `${CONSTITUTION_URL}#page=9`,
  },
  {
    number: "10",
    name: "Compliance & Ethical Standards",
    anchor: "Code of Conduct v1.0",
    flag: "Flags if the disclosure field is empty or the Code of Conduct acknowledgement is unchecked.",
    link: CODE_OF_CONDUCT_URL,
  },
  {
    number: "11",
    name: "Community Involvement",
    anchor: "Section 8",
    flag: "Flags only if the evidence field is completely empty. The ratified checklist gives this criterion no flag condition at all, so this flag is always informational, never a failure.",
    link: `${CONSTITUTION_URL}#page=12`,
  },
];

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
                  className="rounded-lg border border-border bg-card p-5 md:p-6"
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
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[var(--accent-text)] underline-offset-2 hover:underline"
                      >
                        {c.anchor}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-muted-foreground">{c.anchor}</span>
                    )}
                  </div>
                  <p className="max-w-[75ch] p-5 text-base text-foreground-secondary">{c.flag}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Section 04 */}
          <section className="mt-16 md:mt-20">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Section 04
            </p>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Full Report
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              The complete rubric document, embedded below.
            </p>
            <iframe
              src={PDF_URL}
              width="100%"
              height="800px"
              style={{ border: "1px solid #3a4650", borderRadius: "8px" }}
              title="TASK-25 Proposal Evaluation Rubric PDF"
            />
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
              className="text-muted-foreground transition-colors hover:text-[var(--accent-text)]"
            >
              <PdfIcon />
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read full docs"
              className="text-muted-foreground transition-colors hover:text-[var(--accent-text)]"
            >
              <DocsIcon />
            </a>
            <a
              href="https://dev.to/hildecorp/from-ratified-checklist-to-working-tool-redbelly-daos-proposal-pre-screening-framework-3im4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read full article on dev.to"
              className="text-muted-foreground transition-colors hover:text-[var(--accent-text)]"
            >
              <DevToIcon />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-muted-foreground transition-colors hover:text-[var(--accent-text)]"
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

function MaskIcon({ src, label, className = "h-6 w-6" }: { src: string; label: string; className?: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block bg-current ${className}`}
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
  return (
    <svg
      role="img"
      aria-label="dev.to"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="h-6 w-7"
    >
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.71h32.58l-38.46 144.79z" />
    </svg>
  );
}


function GitHubIcon() {
  return <MaskIcon src="/github.svg" label="GitHub" />;
}

