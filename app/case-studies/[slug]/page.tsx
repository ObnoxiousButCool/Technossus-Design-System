import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyDetail from '../../../src/case-study/CaseStudyDetail';
import { caseStudyData } from '../../../src/case-study/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudyData[slug];
  if (!data) return { title: 'Case Study — Technossus' };
  return {
    title: `${data.title} — Technossus`,
    description: data.clientDescription,
    alternates: { canonical: `https://newtechnossus-v2.vercel.app/case-studies/${slug}` },
    openGraph: {
      url: `https://newtechnossus-v2.vercel.app/case-studies/${slug}`,
      type: 'article',
      images: [{ url: data.heroImage }],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(caseStudyData).map(slug => ({ slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = caseStudyData[slug];
  if (!data) notFound();
  return <CaseStudyDetail data={data} />;
}
