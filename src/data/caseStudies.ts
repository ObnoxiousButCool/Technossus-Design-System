import type { CaseStudyData } from '../page-components/CaseStudyDetail';

export const caseStudyData: Record<string, CaseStudyData> = {
  'clinical-trial-platform': {
    slug: 'clinical-trial-platform',
    tagLine: 'LIFE SCIENCES • CLINICAL PLATFORM',
    title: 'Clinical Trial Platform Accelerates Drug Development Timelines',

    heroImage: '/assets/d16e5b610d1fff4d128bb7e9580d630eb3fa03e8.png',

    clientName: 'Global Pharmaceutical Organization',
    clientDescription:
      'A leading pharmaceutical company conducting multi-site clinical trials across 30+ countries needed a unified digital platform to manage trial data, patient recruitment, and regulatory compliance from a single source of truth.',

    challengeHeading: 'Fragmented systems slowing critical research',
    challengeBody:
      'Trial data lived in six separate systems with no shared schema, forcing manual reconciliation that delayed reporting by weeks. Regulatory submissions required intensive manual effort, and patient recruitment was hampered by poor site visibility and slow data access.',

    solutionHeading: 'Unified clinical data platform with AI-assisted compliance',
    solutionBody:
      'Technossus designed and delivered a cloud-native clinical trial management platform that unified data ingestion, patient tracking, and regulatory workflows. Built-in AI flagged protocol deviations in real time and automated generation of regulatory submission packages.',

    solutionCapabilities: [
      'Unified data ingestion across 6 legacy source systems',
      'Real-time protocol deviation detection via ML models',
      'Automated regulatory submission package generation',
      'Multi-site patient recruitment and randomization module',
      'Role-based audit trail for 21 CFR Part 11 compliance',
      'HL7 FHIR-compliant data exchange with partner sites',
    ],

    impactHeading: 'Faster trials. Fewer errors. Lower cost.',
    impactDescription:
      'The platform reduced administrative overhead, shortened submission timelines, and gave trial coordinators real-time visibility into patient and site performance.',
    impactContextLabel: 'MEASURABLE OUTCOMES',
    impactContextBody:
      'Across three active Phase III trials, the platform delivered consistent improvements in data quality, regulatory speed, and operational efficiency — all without adding headcount.',

    impactCards: [
      {
        title: '40% Reduction in Data Reconciliation Time',
        body: 'Automated ingestion and validation eliminated weeks of manual cross-system reconciliation, freeing clinical data managers to focus on higher-value analysis.',
      },
      {
        title: '60% Faster Regulatory Submissions',
        body: 'AI-assisted document assembly and audit trail automation cut submission preparation from 6 weeks to under 2.5 weeks per package.',
      },
      {
        title: 'Zero Protocol Deviation Escapes',
        body: 'Real-time ML monitoring flagged 100% of protocol deviations before they progressed — preventing costly trial amendments and audit findings.',
      },
      {
        title: '30% Improvement in Patient Recruitment Rate',
        body: 'Site-level visibility and automated eligibility screening accelerated enrollment, helping three trials meet recruitment targets ahead of schedule.',
      },
    ],

    industryStats: [
      { value: '$2.6B',  label: 'Average cost to bring a new drug to market' },
      { value: '10–15y', label: 'Typical drug development timeline' },
      { value: '80%',    label: 'Of clinical trials experience enrollment delays' },
      { value: '50%',    label: 'Of trial costs attributed to data management' },
    ],

    relatedCaseStudies: [
      {
        tags: 'LIFE SCIENCES • LAB PLATFORM',
        title: 'Unified Lab Platform Reduces Licensing Costs and Improves Throughput',
        excerpt:
          'Helix replaced three fragmented lab systems with one higher-performing LIMS, reducing licensing fees and enabling greater testing throughput without adding staff.',
        image: '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png',
        slug: 'unified-lab-platform',
      },
      {
        tags: 'HEALTHCARE • STREAMING DATA',
        title: 'Streaming Analytics Enables Real-Time Visibility Across Patient Flow',
        excerpt:
          'A streaming analytics platform now feeds clinical dashboards in real time, enabling immediate action on delays, risks, and bottlenecks.',
        image: '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png',
        slug: 'streaming-analytics-patient-flow',
      },
      {
        tags: 'HEALTHCARE • REVENUE CYCLE',
        title: 'Revenue Cycle Automation Reduces Denials and Improves Cash Flow',
        excerpt:
          'Intelligent pre-submission validation catches errors before claims are submitted, routes exceptions automatically, and gives finance teams real-time visibility.',
        image: '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png',
        slug: 'revenue-cycle-automation',
      },
    ],
  },
};
