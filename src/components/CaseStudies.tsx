"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Eye,
  Search,
  GitBranch,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  HeartPulse,
  Zap,
} from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: "billing" | "clinical" | "ux";
  categoryLabel: string;
  impact: "critical" | "high" | "medium";
  impactLabel: string;
  steps: {
    lookedFine: string;
    noticed: string;
    tracedBack: string;
    whyItMattered: string;
    whatHappened: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "GST Tax Collection Discrepancy",
    subtitle:
      "Pharmacy billing report showed inflated GST figures — nobody questioned the numbers until I did.",
    category: "billing",
    categoryLabel: "Billing · Compliance",
    impact: "high",
    impactLabel: "Financial Risk",
    steps: {
      lookedFine:
        "The pharmacy billing report displayed GST totals that added up visually. The final invoice amount was correct. Everything looked balanced.",
      noticed:
        "Tax line items were being calculated on pre-discount amounts instead of post-discount. The total was right, but the GST component was inflated — a discrepancy hidden in plain sight.",
      tracedBack:
        "The report query was pulling tax values from the order-line level (before discount application) rather than from the invoice-level adjusted amounts. A subtle but systematic data-source mismatch.",
      whyItMattered:
        "Overstated GST figures for Baines Healthcare meant incorrect tax filings — a direct compliance risk and potential financial liability for the client.",
      whatHappened:
        "Filed in Jira with full calculation evidence and exact query comparison. Dev team patched the report query. Verified the fix across all pharmacy billing clients before closing.",
    },
  },
  {
    id: 2,
    title: "Reference Range Misconfiguration — Systemic",
    subtitle:
      "Abnormal lab results displaying as 'Normal' across multiple LIS panels. Not one bug — a pattern.",
    category: "clinical",
    categoryLabel: "LIS · Patient Safety",
    impact: "critical",
    impactLabel: "Patient Safety",
    steps: {
      lookedFine:
        "Lab results across Transferrin Saturation, Urine PCR, and Lipid Profile panels all generated results without errors. No system warnings, no validation failures.",
      noticed:
        "Abnormal values were displaying as 'Normal.' Reference ranges and units were either swapped, missing, or defaulted incorrectly — and it was happening across multiple, unrelated panels.",
      tracedBack:
        "Not an isolated data entry mistake. A systemic configuration pattern: newly added test panels weren't being validated against clinical reference standards before going live. The onboarding process had no verification step.",
      whyItMattered:
        "Clinicians relying on these results could miss critical abnormal values — a direct patient safety risk. In a regulated healthcare environment, this is the kind of defect that can cause real harm.",
      whatHappened:
        "Documented the full pattern across all affected panels and raised it as high-priority. This led to a configuration review process being formally added to the LIS test-panel onboarding workflow.",
    },
  },
  {
    id: 3,
    title: "Payment Popup Logic Error",
    subtitle:
      "System prompted staff to collect payment from patients who were actually owed a refund.",
    category: "ux",
    categoryLabel: "UX · Logic Error",
    impact: "medium",
    impactLabel: "Operational Risk",
    steps: {
      lookedFine:
        "After billing, a payment collection popup appeared — standard behavior. The flow looked exactly like it should for any billable encounter.",
      noticed:
        "The popup was triggering even when the net amount was negative. The patient was owed a refund, but the system was asking staff to collect money from them.",
      tracedBack:
        "The popup trigger condition checked if amount !== 0 rather than amount > 0. Any non-zero balance — including negative (refund) amounts — would fire the collection prompt.",
      whyItMattered:
        "Staff would see a 'collect payment' prompt for patients who should be getting money back. Confusing for front-desk staff and a real risk of incorrect charges being applied.",
      whatHappened:
        "Raised in Jira with exact repro steps and the specific condition logic. Fixed in the next sprint. Added the negative-amount edge case to the billing regression suite.",
    },
  },
];

const stepConfig = [
  {
    key: "lookedFine" as const,
    label: "What Looked Fine",
    icon: Eye,
    color: "text-zinc-400",
  },
  {
    key: "noticed" as const,
    label: "What I Noticed",
    icon: Search,
    color: "text-teal-400",
  },
  {
    key: "tracedBack" as const,
    label: "Root Cause",
    icon: GitBranch,
    color: "text-cyan-400",
  },
  {
    key: "whyItMattered" as const,
    label: "Why It Mattered",
    icon: AlertTriangle,
    color: "text-amber-400",
  },
  {
    key: "whatHappened" as const,
    label: "Resolution",
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
];

const impactIcons = {
  critical: HeartPulse,
  high: DollarSign,
  medium: Zap,
};

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="case-studies"
      className="py-24 px-4 sm:px-6 max-w-4xl mx-auto section-glow"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary-foreground/50 uppercase tracking-[0.25em] text-xs font-semibold mb-4 block">
          Case Studies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
          Bugs I Caught That Others Missed
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
          Each story follows the same structure: what looked fine, what I
          noticed, what I traced it to, why it mattered, and what happened next.
        </p>
      </motion.div>

      <div className="space-y-5">
        {caseStudies.map((study, index) => {
          const isExpanded = expandedId === study.id;
          const ImpactIcon = impactIcons[study.impact];

          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="case-card cursor-pointer"
                data-category={study.category}
                onClick={() => toggleExpand(study.id)}
                role="button"
                aria-expanded={isExpanded}
                aria-controls={`case-detail-${study.id}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(study.id);
                  }
                }}
              >
                {/* Card Header — always visible */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="case-number">
                      {String(study.id).padStart(2, "0")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="case-tag">{study.categoryLabel}</span>
                        <span className={`impact-badge ${study.impact}`}>
                          <ImpactIcon size={10} />
                          {study.impactLabel}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-1.5 leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed pr-8">
                        {study.subtitle}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-500 mt-1 flex-shrink-0"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Card Detail — expandable */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`case-detail-${study.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2">
                        <div className="border-t border-white/5 pt-6">
                          <div className="space-y-5">
                            {stepConfig.map((step, stepIndex) => {
                              const StepIcon = step.icon;
                              return (
                                <motion.div
                                  key={step.key}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: stepIndex * 0.08,
                                  }}
                                  className="flex gap-4"
                                >
                                  <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                                    <StepIcon
                                      size={16}
                                      className={step.color}
                                    />
                                    {stepIndex < stepConfig.length - 1 && (
                                      <div className="w-px flex-1 bg-white/5 mt-2" />
                                    )}
                                  </div>
                                  <div className="pb-2">
                                    <span
                                      className={`step-label ${step.color} mb-1.5 block`}
                                    >
                                      {step.label}
                                    </span>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                      {study.steps[step.key]}
                                    </p>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
