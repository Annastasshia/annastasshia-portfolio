export const projects = [
  {
    slug: "core-web-vitals-training",
    title: "Core Web Vitals Training Deck",
    summary:
      "Explained CWV + PageSpeed in plain language for website managers using a concert analogy.",
    role: "Web Design Manager",
    timeline: "2024",
    tags: ["Performance", "Training", "Lighthouse"],
    links: [
      { label: "Deck (placeholder)", url: "https://example.com" },
    ],
    sections: {
      overview:
        "Created a training deck and rollout plan to improve understanding of CWV and reduce misinterpretation of lab scores.",
      responsibilities: [
        "Developed the narrative structure and examples for non-technical stakeholders",
        "Defined performance concepts (LCP, CLS, INP) and why third-party scripts impact them",
        "Created guidance tailored to CMS constraints (limited server-level control)",
      ],
      process: [
        "Audited common CWV misunderstandings",
        "Built a story-driven deck with actionable checklists",
        "Aligned recommendations to constraints and team workflow",
      ],
      results: [
        "Improved stakeholder alignment on what metrics mean and how to prioritize fixes",
        "Reduced repetitive support questions about PageSpeed scoring (expected outcome)",
      ],
      tools: ["Lighthouse", "PageSpeed Insights", "Chrome DevTools"],
    },
  },
  {
    slug: "design-qa-rubric",
    title: "Design QA Rubric + Workflow",
    summary:
      "Standardized QA to reduce repeat errors and speed reviews across a multi-designer team.",
    role: "Web Design Manager",
    timeline: "2024",
    tags: ["Process", "QA", "Leadership"],
    links: [{ label: "Doc (placeholder)", url: "https://example.com" }],
    sections: {
      overview:
        "Built a repeatable QA rubric and review rhythm so quality doesn’t depend on who is reviewing that day.",
      responsibilities: [
        "Defined QA criteria and severity levels",
        "Built review workflow and feedback standards",
        "Enabled coaching loops via audits and measurable goals",
      ],
      process: [
        "Identified top recurring issue patterns",
        "Created rubric + examples",
        "Rolled out with team training + iteration",
      ],
      results: [
        "More consistent reviews and fewer rework cycles (expected outcome)",
        "Clearer coaching signals for 1:1s and growth plans (expected outcome)",
      ],
      tools: ["Checklists", "Team training", "Work audits"],
    },
  },
  {
    slug: "cms-build-system",
    title: "Client Website Build System",
    summary:
      "A scalable build approach for fast, consistent delivery inside a constrained CMS environment.",
    role: "Web Design Manager",
    timeline: "2024",
    tags: ["Design Systems", "CMS", "Delivery"],
    links: [{ label: "Example (placeholder)", url: "https://example.com" }],
    sections: {
      overview:
        "Created a build approach that improves consistency and speed while respecting CMS limitations.",
      responsibilities: [
        "Defined reusable layout patterns and standards",
        "Created guidance for performance-friendly assets",
        "Established rules for embeds/third-party scripts",
      ],
      process: [
        "Captured common build patterns",
        "Documented standards and reusable blocks",
        "Iterated based on production feedback",
      ],
      results: [
        "Faster delivery and fewer edge-case fixes (expected outcome)",
        "More consistent UI across builds (expected outcome)",
      ],
      tools: ["CMS components", "Reusable blocks", "Standards documentation"],
    },
  },
];
