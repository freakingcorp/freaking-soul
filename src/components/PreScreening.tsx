import { useState } from "react";
import { CRITERIA } from "@/lib/criteria";

type Row2 = { a: string; b: string };

type FormState = {
  title: string;
  submittedBy: string;
  usdt: string;
  rbnt: string;
  budgetJustification: string;
  paymentStructure: "Milestone-based" | "Post-completion" | "Upfront";
  upfrontJustification: string;
  milestones: string[];
  pod: string;
  alignment: string;
  timeline: string;
  resourcing: string;
  reviewer: string;
  monthlyUpdate: string;
  kpis: string;
  longTermValue: string;
  risks: Row2[];
  coFunding: string;
  contributors: Row2[];
  otherPaidRole: "No" | "Yes";
  otherPaidRoleJustification: string;
  disclosure: string;
  cocAcknowledged: boolean;
  communityEvidence: string;
};

const EMPTY: FormState = {
  title: "",
  submittedBy: "",
  usdt: "",
  rbnt: "",
  budgetJustification: "",
  paymentStructure: "Milestone-based",
  upfrontJustification: "",
  milestones: [],
  pod: "Marketing",
  alignment: "",
  timeline: "",
  resourcing: "",
  reviewer: "",
  monthlyUpdate: "",
  kpis: "",
  longTermValue: "",
  risks: [],
  coFunding: "",
  contributors: [],
  otherPaidRole: "No",
  otherPaidRoleJustification: "",
  disclosure: "",
  cocAcknowledged: false,
  communityEvidence: "",
};

const PROPOSAL_26: FormState = {
  title: "Continuation of Long-Term Marketing and PR Campaign with FINPR",
  submittedBy: "Rainbow Magician",
  usdt: "12,650 USDT across three months, 4,230 plus 4,620 plus 3,800",
  rbnt: "2,400 USD-equivalent in RBNT, reviewer compensation at 800 per month for 3 months",
  budgetJustification:
    "Covers media placements, press release distribution, influencer promotion, social media management, content creation, campaign reporting, and independent oversight and verification.",
  paymentStructure: "Milestone-based",
  upfrontJustification: "",
  milestones: [
    "Month 1 payment on review completion",
    "Month 2 payment after Month 1 deliverables verified",
    "Month 3 payment after Month 2 deliverables verified",
  ],
  pod: "Marketing",
  alignment:
    "Directly supports the Marketing Pod objective to drive awareness, growth, and positive brand positioning for the DAO, contributing to increased ecosystem awareness, community growth, and brand visibility.",
  timeline:
    "Three-month campaign, Month 1 through Month 3, each month scoped as a separate deliverable set.",
  resourcing:
    "FINPR as external service provider handles PR, influencer, and social media execution. Rainbow Magician named as independent reviewer.",
  reviewer: "Rainbow Magician",
  monthlyUpdate:
    "Monthly campaign updates published to DAO channels, midpoint review after Month 2, final review after Month 3.",
  kpis: "Growth in X followers, Discord members, and Telegram members each month. 100 percent completion of contracted PR placements, influencer deliverables, and monthly content commitments. Monthly reporting delivered on schedule.",
  longTermValue:
    "Sustained growth across Redbelly community channels, strengthened ecosystem awareness, increased visibility of Redbelly's institutional blockchain positioning.",
  risks: [
    { a: "Lower than expected community growth", b: "Multi-channel campaign diversification" },
    {
      a: "Market-wide decline in engagement",
      b: "Consistent monthly exposure across multiple media outlets",
    },
    { a: "Incomplete deliverables", b: "Independent review before payment approval" },
  ],
  coFunding:
    "None requested. The proposal argues this is acceptable given reduced onboarding cost from an already established, successful FINPR relationship from the prior completed campaign.",
  contributors: [
    { a: "Rainbow Magician", b: "2,400 RBNT-equivalent, reviewer compensation only" },
  ],
  otherPaidRole: "No",
  otherPaidRoleJustification: "",
  disclosure: "",
  cocAcknowledged: false,
  communityEvidence:
    "This proposal follows positive feedback from community members after the successful completion of the initial FINPR campaign.",
};

type Result = { number: string; status: "PASS" | "FLAG"; reason?: string; note?: string };

const blank = (s: string) => s.trim().length === 0;
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function evaluate(f: FormState): Result[] {
  const out: Result[] = [];

  const r1: string[] = [];
  if (blank(f.usdt) || blank(f.rbnt)) r1.push("USDT or RBNT amount is empty.");
  if (words(f.budgetJustification) < 20) r1.push("Budget justification is under 20 words.");
  out.push({ number: "01", status: r1.length ? "FLAG" : "PASS", reason: r1.join(" ") });

  const r2: string[] = [];
  if (f.paymentStructure === "Upfront" && blank(f.upfrontJustification))
    r2.push("Upfront selected with no justification.");
  if (f.milestones.length === 0) r2.push("Milestone list is empty.");
  else if (f.milestones.some(blank)) r2.push("A milestone row is empty.");
  out.push({ number: "02", status: r2.length ? "FLAG" : "PASS", reason: r2.join(" ") });

  const r3 = blank(f.alignment)
    ? "Alignment explanation is empty."
    : words(f.alignment) < 15
      ? "Alignment explanation is under 15 words."
      : "";
  out.push({ number: "03", status: r3 ? "FLAG" : "PASS", reason: r3 });

  const r4: string[] = [];
  if (blank(f.timeline)) r4.push("Timeline is empty.");
  if (blank(f.resourcing)) r4.push("Resourcing note is empty.");
  out.push({ number: "04", status: r4.length ? "FLAG" : "PASS", reason: r4.join(" ") });

  const r5: string[] = [];
  if (blank(f.reviewer)) r5.push("Reviewer or oversight lead is empty.");
  if (blank(f.monthlyUpdate)) r5.push("Monthly update plan is empty.");
  out.push({ number: "05", status: r5.length ? "FLAG" : "PASS", reason: r5.join(" ") });

  const r6: string[] = [];
  if (blank(f.kpis)) r6.push("KPIs are empty.");
  if (blank(f.longTermValue)) r6.push("Long-term or community value is empty.");
  out.push({ number: "06", status: r6.length ? "FLAG" : "PASS", reason: r6.join(" ") });

  const r7: string[] = [];
  if (f.risks.length === 0) r7.push("Risk list is empty.");
  else if (f.risks.some((r) => !blank(r.a) && blank(r.b)))
    r7.push("A risk has no paired mitigation.");
  out.push({ number: "07", status: r7.length ? "FLAG" : "PASS", reason: r7.join(" ") });

  out.push({
    number: "08",
    status: blank(f.coFunding) ? "FLAG" : "PASS",
    reason: blank(f.coFunding) ? "Co-funding details are empty." : "",
    note: blank(f.coFunding) ? "Informational, not a failure" : undefined,
  });

  const r9: string[] = [];
  if (f.contributors.length === 0) r9.push("Contributor list is empty.");
  if (f.otherPaidRole === "Yes" && blank(f.otherPaidRoleJustification))
    r9.push("Another paid DAO role is held with no justification given.");
  out.push({ number: "09", status: r9.length ? "FLAG" : "PASS", reason: r9.join(" ") });

  const r10: string[] = [];
  if (blank(f.disclosure)) r10.push("Disclosure is empty.");
  if (!f.cocAcknowledged) r10.push("Code of Conduct acknowledgement is unchecked.");
  out.push({ number: "10", status: r10.length ? "FLAG" : "PASS", reason: r10.join(" ") });

  out.push({
    number: "11",
    status: blank(f.communityEvidence) ? "FLAG" : "PASS",
    reason: blank(f.communityEvidence) ? "Evidence of community discussion is empty." : "",
    note: blank(f.communityEvidence)
      ? "Informational, the ratified checklist sets no flag condition here"
      : undefined,
  });

  return out;
}

const labelCls = "mb-1.5 block text-sm font-semibold text-foreground";
const hintCls = "mb-1.5 block text-xs text-muted-foreground";
const fieldCls =
  "w-full rounded-sm border border-border bg-[var(--container-lowest)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const ghostBtn =
  "inline-flex items-center justify-center rounded-sm border border-border bg-transparent px-4 py-2 text-sm font-bold text-foreground transition-colors hover:border-[var(--accent-text)] hover:text-[var(--accent-text)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:text-foreground";

function Group({
  number,
  name,
  children,
}: {
  number: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-baseline gap-3 border-b border-[#27323a] p-5">
        <span className="font-mono text-sm text-muted-foreground">{number}</span>
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
      </div>
      <div className="space-y-4 p-5">{children}</div>
    </div>
  );
}

export default function PreScreening() {
  const [f, setF] = useState<FormState>(EMPTY);
  const [results, setResults] = useState<Result[] | null>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((prev) => ({ ...prev, [k]: v }));

  const passed = results ? results.filter((r) => r.status === "PASS").length : 0;

  return (
    <section className="mt-16 md:mt-20">
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
        Section 05
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Run Pre-Screening
      </h2>
      <p className="mb-6 max-w-[75ch] text-sm text-muted-foreground">
        Fill in a proposal below, or load a real one from the archive. Pre-screening runs entirely
        in this page and returns a result for all 11 criteria, no submission is sent anywhere.
      </p>

      {/* Load buttons */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start">
        <button
          type="button"
          className={ghostBtn}
          onClick={() => {
            setF(PROPOSAL_26);
            setResults(null);
          }}
        >
          Load Proposal #26 (rejected)
        </button>
        <div>
          <button type="button" className={ghostBtn} disabled>
            Load Proposal #20 (passed)
          </button>
          <p className="mt-2 max-w-[40ch] text-xs text-muted-foreground">
            Proposal #20's full text has not been captured yet. This button is wired but empty
            until it is.
          </p>
        </div>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setResults(evaluate(f));
        }}
      >
        {/* Proposal details */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="mb-4 text-base font-semibold text-foreground">
            Proposal Details (not scored, for context only)
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="ps-title">
                Proposal Title
              </label>
              <input
                id="ps-title"
                className={fieldCls}
                value={f.title}
                onChange={(e) => set("title", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="ps-by">
                Submitted By
              </label>
              <input
                id="ps-by"
                className={fieldCls}
                value={f.submittedBy}
                onChange={(e) => set("submittedBy", e.target.value)}
              />
            </div>
          </div>
        </div>

        <Group number="01" name="Budget Alignment and Limits">
          <div>
            <label className={labelCls} htmlFor="ps-usdt">
              USDT amount requested
            </label>
            <input
              id="ps-usdt"
              className={fieldCls}
              placeholder="e.g. 4,230 USDT, or 0 if none"
              value={f.usdt}
              onChange={(e) => set("usdt", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-rbnt">
              RBNT amount requested
            </label>
            <input
              id="ps-rbnt"
              className={fieldCls}
              placeholder="e.g. 800 RBNT-equivalent, or 0 if none"
              value={f.rbnt}
              onChange={(e) => set("rbnt", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-bj">
              Budget justification
            </label>
            <textarea
              id="ps-bj"
              rows={3}
              className={fieldCls}
              value={f.budgetJustification}
              onChange={(e) => set("budgetJustification", e.target.value)}
            />
          </div>
        </Group>

        <Group number="02" name="Payment and Payout Structure">
          <div>
            <label className={labelCls} htmlFor="ps-pay">
              Payment structure
            </label>
            <select
              id="ps-pay"
              className={fieldCls}
              value={f.paymentStructure}
              onChange={(e) =>
                set("paymentStructure", e.target.value as FormState["paymentStructure"])
              }
            >
              <option>Milestone-based</option>
              <option>Post-completion</option>
              <option>Upfront</option>
            </select>
          </div>
          {f.paymentStructure === "Upfront" && (
            <div>
              <label className={labelCls} htmlFor="ps-uj">
                Upfront justification
              </label>
              <textarea
                id="ps-uj"
                rows={3}
                className={fieldCls}
                value={f.upfrontJustification}
                onChange={(e) => set("upfrontJustification", e.target.value)}
              />
            </div>
          )}
          <div>
            <span className={labelCls}>Milestones</span>
            <div className="space-y-2">
              {f.milestones.map((m, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className={fieldCls}
                    value={m}
                    aria-label={`Milestone ${i + 1}`}
                    onChange={(e) =>
                      set(
                        "milestones",
                        f.milestones.map((x, j) => (j === i ? e.target.value : x)),
                      )
                    }
                  />
                  <button
                    type="button"
                    className={ghostBtn}
                    onClick={() =>
                      set(
                        "milestones",
                        f.milestones.filter((_, j) => j !== i),
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className={`${ghostBtn} mt-2`}
              onClick={() => set("milestones", [...f.milestones, ""])}
            >
              Add milestone
            </button>
          </div>
        </Group>

        <Group number="03" name="Strategic Fit">
          <div>
            <label className={labelCls} htmlFor="ps-pod">
              Pod
            </label>
            <select
              id="ps-pod"
              className={fieldCls}
              value={f.pod}
              onChange={(e) => set("pod", e.target.value)}
            >
              <option>Marketing</option>
              <option>Builder-Develop</option>
              <option>Researcher</option>
              <option>Community</option>
              <option>Partnerships</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-align">
              Alignment explanation
            </label>
            <textarea
              id="ps-align"
              rows={3}
              className={fieldCls}
              value={f.alignment}
              onChange={(e) => set("alignment", e.target.value)}
            />
          </div>
        </Group>

        <Group number="04" name="Feasibility and Timeline">
          <div>
            <label className={labelCls} htmlFor="ps-timeline">
              Timeline
            </label>
            <textarea
              id="ps-timeline"
              rows={3}
              className={fieldCls}
              value={f.timeline}
              onChange={(e) => set("timeline", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-res">
              Resourcing note
            </label>
            <textarea
              id="ps-res"
              rows={3}
              className={fieldCls}
              value={f.resourcing}
              onChange={(e) => set("resourcing", e.target.value)}
            />
          </div>
        </Group>

        <Group number="05" name="Oversight and Accountability">
          <div>
            <label className={labelCls} htmlFor="ps-rev">
              Reviewer or oversight lead
            </label>
            <input
              id="ps-rev"
              className={fieldCls}
              value={f.reviewer}
              onChange={(e) => set("reviewer", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-mu">
              Monthly update plan
            </label>
            <textarea
              id="ps-mu"
              rows={3}
              className={fieldCls}
              value={f.monthlyUpdate}
              onChange={(e) => set("monthlyUpdate", e.target.value)}
            />
          </div>
        </Group>

        <Group number="06" name="Impact and Measurement">
          <div>
            <label className={labelCls} htmlFor="ps-kpi">
              KPIs
            </label>
            <textarea
              id="ps-kpi"
              rows={3}
              className={fieldCls}
              value={f.kpis}
              onChange={(e) => set("kpis", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="ps-ltv">
              Long-term or community value
            </label>
            <textarea
              id="ps-ltv"
              rows={3}
              className={fieldCls}
              value={f.longTermValue}
              onChange={(e) => set("longTermValue", e.target.value)}
            />
          </div>
        </Group>

        <Group number="07" name="Risk and Mitigation">
          <div className="space-y-2">
            {f.risks.map((r, i) => (
              <div key={i} className="flex flex-col gap-2 sm:flex-row">
                <input
                  className={fieldCls}
                  placeholder="Risk"
                  aria-label={`Risk ${i + 1}`}
                  value={r.a}
                  onChange={(e) =>
                    set(
                      "risks",
                      f.risks.map((x, j) => (j === i ? { ...x, a: e.target.value } : x)),
                    )
                  }
                />
                <input
                  className={fieldCls}
                  placeholder="Mitigation"
                  aria-label={`Mitigation ${i + 1}`}
                  value={r.b}
                  onChange={(e) =>
                    set(
                      "risks",
                      f.risks.map((x, j) => (j === i ? { ...x, b: e.target.value } : x)),
                    )
                  }
                />
                <button
                  type="button"
                  className={ghostBtn}
                  onClick={() =>
                    set(
                      "risks",
                      f.risks.filter((_, j) => j !== i),
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className={ghostBtn}
            onClick={() => set("risks", [...f.risks, { a: "", b: "" }])}
          >
            Add risk
          </button>
        </Group>

        <Group number="08" name="Co-Funding and Leverage">
          <div>
            <label className={labelCls} htmlFor="ps-cf">
              Co-funding details
            </label>
            <span className={hintCls}>
              Optional. Leaving this blank is flagged as informational, not as a failure.
            </span>
            <textarea
              id="ps-cf"
              rows={3}
              className={fieldCls}
              value={f.coFunding}
              onChange={(e) => set("coFunding", e.target.value)}
            />
          </div>
        </Group>

        <Group number="09" name="Contribution Equity">
          <div className="space-y-2">
            {f.contributors.map((c, i) => (
              <div key={i} className="flex flex-col gap-2 sm:flex-row">
                <input
                  className={fieldCls}
                  placeholder="Name"
                  aria-label={`Contributor name ${i + 1}`}
                  value={c.a}
                  onChange={(e) =>
                    set(
                      "contributors",
                      f.contributors.map((x, j) => (j === i ? { ...x, a: e.target.value } : x)),
                    )
                  }
                />
                <input
                  className={fieldCls}
                  placeholder="Payout share"
                  aria-label={`Contributor payout share ${i + 1}`}
                  value={c.b}
                  onChange={(e) =>
                    set(
                      "contributors",
                      f.contributors.map((x, j) => (j === i ? { ...x, b: e.target.value } : x)),
                    )
                  }
                />
                <button
                  type="button"
                  className={ghostBtn}
                  onClick={() =>
                    set(
                      "contributors",
                      f.contributors.filter((_, j) => j !== i),
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className={ghostBtn}
            onClick={() => set("contributors", [...f.contributors, { a: "", b: "" }])}
          >
            Add contributor
          </button>
          <div>
            <label className={labelCls} htmlFor="ps-opr">
              Does any listed contributor already hold another paid DAO role
            </label>
            <select
              id="ps-opr"
              className={fieldCls}
              value={f.otherPaidRole}
              onChange={(e) => set("otherPaidRole", e.target.value as FormState["otherPaidRole"])}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          {f.otherPaidRole === "Yes" && (
            <div>
              <label className={labelCls} htmlFor="ps-oprj">
                Justification
              </label>
              <textarea
                id="ps-oprj"
                rows={3}
                className={fieldCls}
                value={f.otherPaidRoleJustification}
                onChange={(e) => set("otherPaidRoleJustification", e.target.value)}
              />
            </div>
          )}
        </Group>

        <Group number="10" name="Compliance and Ethical Standards">
          <div>
            <label className={labelCls} htmlFor="ps-disc">
              Disclosure
            </label>
            <textarea
              id="ps-disc"
              rows={3}
              className={fieldCls}
              value={f.disclosure}
              onChange={(e) => set("disclosure", e.target.value)}
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-foreground">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-[var(--primary)]"
              checked={f.cocAcknowledged}
              onChange={(e) => set("cocAcknowledged", e.target.checked)}
            />
            <span>I have read and comply with Code of Conduct v1.0</span>
          </label>
        </Group>

        <Group number="11" name="Community Involvement">
          <div>
            <label className={labelCls} htmlFor="ps-ce">
              Evidence of community discussion
            </label>
            <span className={hintCls}>
              The ratified checklist gives this criterion no flag condition. Leaving this blank is
              flagged as informational only, it never fails a submission.
            </span>
            <textarea
              id="ps-ce"
              rows={3}
              className={fieldCls}
              value={f.communityEvidence}
              onChange={(e) => set("communityEvidence", e.target.value)}
            />
          </div>
        </Group>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Run Pre-Screening
        </button>
      </form>

      {results && (
        <div className="mt-10">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {passed} of 11 passed
          </h3>
          <div className="space-y-3">
            {results.map((r) => {
              const c = CRITERIA.find((x) => x.number === r.number)!;
              const color = r.status === "PASS" ? "var(--status-ok)" : "var(--status-warn)";
              return (
                <div key={r.number} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-muted-foreground">{c.number}</span>
                      <h4 className="text-base font-semibold text-foreground">{c.name}</h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="inline-block h-2 w-2 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-xs" style={{ color }}>
                          {r.status}
                        </span>
                      </span>
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
                  </div>
                  {r.status === "FLAG" && (r.reason || r.note) && (
                    <p className="mt-3 max-w-[75ch] text-sm text-foreground-secondary">
                      {r.reason}
                      {r.note ? ` ${r.note}.` : ""}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
