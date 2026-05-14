import type { CaseStudyData } from '../page-components/CaseStudyDetail';

const imgCard = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

export const caseStudyData: Record<string, CaseStudyData> = {
  'clinical-trial-platform': {
    slug: 'clinical-trial-platform',
    tagLine: 'HEALTHTECH • PLATFORM MODERNIZATION',
    title: 'Accelerating Clinical Trial Decision Making Through a Unified Trial Management Platform',
    heroImage: imgCard,

    clientName: 'A venture-backed healthcare technology start-up',
    clientDescription:
      'A venture-backed healthcare technology start-up focused on improving clinical trial operations for mid-size biotech and pharmaceutical companies. The company needed a modern platform to replace manual, disconnected processes across trial sites, sponsors, and CROs.',

    challengeHeading: 'Fragmented workflows. Disconnected data.',
    challengeBody:
      'Clinical trial management involved fragmented workflows, manual coordination, and siloed data across multiple systems. Trial coordinators spent significant time reconciling data by hand, leading to delays in decision-making, compliance risks, and limited visibility across study phases. The lack of a unified platform made it impossible to scale operations without adding headcount.',

    solutionHeading: 'A unified, cloud-native clinical trials platform.',
    solutionBody:
      'Technossus partnered with the client to design and develop a cloud-based clinical trial management system that unified data ingestion, site management, protocol tracking, and regulatory reporting into a single platform. The solution was built API-first to integrate with existing EDC and CTMS tools, enabling real-time data flow across the trial lifecycle.',
    solutionCapabilities: [
      'Real-time trial dashboard with cross-site visibility',
      'Automated protocol deviation tracking and alerts',
      'Integrated document management with audit trails',
      'Role-based access for sponsors, CROs, and site staff',
      'HL7 FHIR-compliant data exchange with EHR systems',
      'Configurable reporting for FDA and EMA submissions',
    ],

    impactHeading: 'Faster decisions. Fewer delays. Lower risk.',
    impactDescription:
      'The unified platform replaced three legacy systems and eliminated the manual reconciliation that had been consuming trial coordinator time. Sponsors gained real-time visibility into trial status, and the compliance team reduced audit preparation time significantly.',
    impactContextLabel: 'Industry Context',
    impactContextBody:
      'Clinical trials can take 9–12 years to bring a drug to market, with administrative overhead accounting for a growing share of that timeline. Fragmented systems and manual coordination are consistently cited as top barriers to trial efficiency.',
    impactCards: [
      {
        title: 'Commercial Impact',
        body: 'Generated purchase interest from more than a dozen major laboratory and hospital systems, validating market-readiness in year one of the platform launch.',
      },
      {
        title: 'Operational Impact',
        body: '40% reduction in trial setup time. 3× faster regulatory submission preparation. 60% drop in protocol deviation incidents within 6 months of go-live.',
      },
    ],
    industryStats: [
      { value: '85%', label: 'of healthcare leaders say administrative burden is limiting clinical capacity' },
      { value: 'Nearly 2 in 3', label: 'sought care elsewhere when the wait felt too long.' },
      { value: '41.9%', label: 'of physicians reported at least one symptom of burnout in 2025.' },
    ],

    relatedCaseStudies: [
      {
        tags: 'HEALTHCARE • CRM INTEGRATION',
        title: 'CRM with Complex External Integrations Launches On Time',
        excerpt: 'A leading healthcare insurance provider needed a CRM integrating data from state and federal platforms under evolving regulatory requirements.',
        image: imgCard,
        slug: 'healthcare-crm-integration',
      },
      {
        tags: 'HEALTHCARE • STREAMING DATA',
        title: 'Streaming Analytics Enables Real-Time Visibility Across Patient Flow',
        excerpt: 'A streaming analytics platform now feeds clinical dashboards in real time, enabling immediate action on delays, risks, and bottlenecks.',
        image: imgCard,
        slug: 'patient-flow-streaming-analytics',
      },
      {
        tags: 'LIFE SCIENCES • LAB PLATFORM',
        title: 'Unified Lab Platform Reduces Licensing Costs and Improves Throughput',
        excerpt: 'Helix replaced three fragmented lab systems with one higher-performing LIMS, reducing licensing fees and enabling greater testing throughput.',
        image: imgCard,
        slug: 'unified-lab-platform',
      },
    ],
  },
};
