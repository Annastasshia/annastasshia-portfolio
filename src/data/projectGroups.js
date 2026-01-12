export const projectGroups = [
  {
    id: "instructional-design",
    title: "Instructional Design + Enablement",
    subtitle:
      "Training systems, documentation, and rollout materials that help teams execute with clarity and consistency.",
    accent: "instructional",
    items: [
      {
        slug: "google-core-web-vitals-training",
        title: "Google Core Web Vitals Training Deck",
        summary:
          "Created a stakeholder-friendly training deck that explains CWV metrics, why they matter, and how to prioritize fixes within real CMS constraints.",
        role: "Instructional Designer / Web Design Manager",
        timeline: "2024",
        tags: ["Instructional Design", "Performance", "Enablement"],
        sections: {
          overview:
            "Built a training deck and supporting guidance to improve how non-technical stakeholders interpret CWV and PageSpeed results.",
          responsibilities: [
            "Designed a narrative structure for non-technical audiences",
            "Explained LCP/CLS/INP tradeoffs and common false positives in lab testing",
            "Produced actionable checklists tailored to platform constraints",
          ],
          process: [
            "Identified recurring confusion points and stakeholder questions",
            "Created examples and a consistent decision framework",
            "Validated content with real support scenarios and iterated",
          ],
          results: [
            "Improved alignment on what to fix (and what to ignore)",
            "Reduced repeated support questions through clearer guidance",
          ],
          tools: ["Lighthouse", "PageSpeed Insights", "Chrome DevTools"],
        },
      },
      {
        slug: "ai-best-practices-training-and-doc-site",
        title: "AI Utilization + Best Practices Training + Documentation Site",
        summary:
          "Built a training program and companion documentation site to standardize safe, effective AI usage across real production workflows.",
        role: "Instructional Designer / Web Design Manager",
        timeline: "2024",
        tags: ["Instructional Design", "AI", "Documentation"],
        sections: {
          overview:
            "Created training and a documentation hub to help teams use AI effectively while maintaining quality, brand consistency, and compliance.",
          responsibilities: [
            "Defined best-practice guidance and prompt patterns for common work scenarios",
            "Built a searchable documentation structure to reduce repeat questions",
            "Established review/checkpoint standards to prevent AI-caused regressions",
          ],
          process: [
            "Mapped top AI use cases and failure modes",
            "Designed training modules + quick reference materials",
            "Built documentation IA, templates, and governance rules",
          ],
          results: [
            "Higher consistency and fewer rework cycles from AI-assisted outputs",
            "Faster onboarding and fewer “same question” interruptions",
          ],
          tools: ["Docs site", "Templates", "Workflow standards"],
        },
      },
      {
        slug: "wcag-accessibility-training-deck",
        title: "Web Accessibility (WCAG) Training Deck",
        summary:
          "Developed a WCAG-focused training deck that teaches practical, testable accessibility habits recruiters and stakeholders can understand quickly.",
        role: "Instructional Designer / Web Design Manager",
        timeline: "2024",
        tags: ["Accessibility", "WCAG", "Training"],
        sections: {
          overview:
            "Designed training materials focused on repeatable accessibility practices (not vague guidelines) with testing workflows the team can follow.",
          responsibilities: [
            "Translated WCAG principles into practical checks (keyboard, focus, contrast, semantics)",
            "Created pass/fail examples and remediation guidance",
            "Aligned standards with production constraints and QA workflows",
          ],
          process: [
            "Identified common accessibility gaps from real builds",
            "Created a checklist-driven training deck",
            "Mapped checks to tools and testing steps",
          ],
          results: [
            "More predictable accessibility QA outcomes",
            "Better consistency across builds and reviews",
          ],
          tools: ["WCAG", "Keyboard testing", "DevTools", "Audit checklists"],
        },
      },
    ],
  },
  {
    id: "web-design",
    title: "Web Design + Product Execution",
    subtitle:
      "UX-driven design, systems thinking, and execution across modern front-end workflows.",
    accent: "webdesign",
    items: [
      {
        slug: "seaeo-figma-ui-user-stories",
        title: "SeaEO UI Redesign (Figma) — User Stories + Issues Addressed",
        summary:
          "Designed a UI system in Figma grounded in user stories, addressing usability friction points and executing a consistent component-driven layout.",
        role: "UI/UX + Visual Design",
        timeline: "2024",
        tags: ["Figma", "UI Systems", "UX"],
        sections: {
          overview:
            "Created a recruiter-readable Figma case study showing user story alignment, design decisions, and component consistency.",
          responsibilities: [
            "Converted user needs into clear UI requirements",
            "Designed component patterns and layout rules",
            "Produced final screens and documented rationale",
          ],
          process: [
            "Captured user stories and prioritized issues",
            "Sketched solutions and aligned on interaction patterns",
            "Executed the UI system and documented decisions",
          ],
          results: [
            "Clearer IA and reduced friction in key user flows",
            "More consistent UI patterns for future scale",
          ],
          tools: ["Figma", "Component library", "User stories"],
        },
      },
      {
        slug: "glitched-react-native-app",
        title: "Glitched (React Native App) — Express + Node.js Backend",
        summary:
          "Built a React Native app backed by a Node/Express API, focusing on clean data flow, maintainable structure, and shippable iteration.",
        role: "Full-stack (React Native + Node/Express)",
        timeline: "2025",
        tags: ["React Native", "Node.js", "Express"],
        sections: {
          overview:
            "Developed a mobile app with an API backend, designed for extensibility and clean separation of concerns.",
          responsibilities: [
            "Implemented app UI and navigation flows",
            "Designed API routes and request/response contracts",
            "Organized the codebase for readability and iteration",
          ],
          process: [
            "Defined app flows and data requirements",
            "Built API endpoints and validated data flow",
            "Iterated on UI and integration with testing checkpoints",
          ],
          results: [
            "Working end-to-end flow from mobile UI to backend services",
            "Maintainable structure for future feature growth",
          ],
          tools: ["React Native", "Express", "Node.js"],
        },
      },
      {
        slug: "design-samples-gallery",
        title: "Design Samples Gallery",
        summary:
          "A curated set of design samples demonstrating visual range, layout discipline, and real-world deliverable formats.",
        role: "Design + Execution",
        timeline: "Selected Work",
        tags: ["Visual Design", "UI", "Production"],
        type: "gallery",
        samples: [
          {
            id: "sample-1",
            title: "Sample 01 — Landing Page Concept",
            blurb: "Hero layout, CTA hierarchy, and spacing rhythm tuned for readability.",
            image: "https://picsum.photos/seed/sample-1/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
          {
            id: "sample-2",
            title: "Sample 02 — Brand System Snapshot",
            blurb: "Typography + color system with scalable component usage rules.",
            image: "https://picsum.photos/seed/sample-2/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
          {
            id: "sample-3",
            title: "Sample 03 — UI Component Set",
            blurb: "Buttons, cards, and inputs designed for consistent states and reuse.",
            image: "https://picsum.photos/seed/sample-3/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
          {
            id: "sample-4",
            title: "Sample 04 — Marketing Email Layout",
            blurb: "Clean hierarchy with a conversion-first content structure.",
            image: "https://picsum.photos/seed/sample-4/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
          {
            id: "sample-5",
            title: "Sample 05 — Service Page System",
            blurb: "Reusable sections and patterns for fast, consistent page creation.",
            image: "https://picsum.photos/seed/sample-5/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
          {
            id: "sample-6",
            title: "Sample 06 — Accessibility-Friendly UI",
            blurb: "Focus states, contrast-safe tokens, and keyboard-friendly patterns.",
            image: "https://picsum.photos/seed/sample-6/1600/900",
            ctaLabel: "Learn more",
            ctaUrl: "https://example.com",
          },
        ],
        sections: {
          overview:
            "A structured gallery that makes it easy to scan breadth while keeping each sample consistently documented.",
          responsibilities: [
            "Curated examples that demonstrate range and execution consistency",
            "Presented each sample with a headline, short context, and clear CTA",
          ],
          process: [
            "Selected representative work across categories",
            "Standardized presentation format for recruiter scanning",
          ],
          results: [
            "Easy-to-skim format with consistent structure and quick next steps",
          ],
          tools: ["Figma", "Design systems", "Production workflows"],
        },
      },
    ],
  },
];

// Flattened list for routing + navbar dropdown
export const projects = projectGroups.flatMap((g) =>
  g.items.map((p) => ({ ...p, groupId: g.id, groupAccent: g.accent }))
);
