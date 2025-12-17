'use client';

import { Heart, Microscope, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function IndustriesPage() {
  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">Industries & Use Cases</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Practical AI solutions tailored to your sector's unique challenges and workflows.
          </p>
        </div>
      </Section>

      <Section id="ngos" className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 mb-6">
              <Heart className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-sm font-semibold text-red-600">Social Impact & NGOs</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Amplify Your Impact with AI</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Focus more on mission delivery and less on administrative burden. AI helps NGOs work smarter, report faster, and demonstrate impact more effectively.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-primary-700">
              Explore NGO Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <Card className="p-8 bg-gradient-to-br from-red-50 to-white">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Pilot-Friendly Use Cases</h3>
            <div className="space-y-4">
              {['Automate quarterly donor reports (save 20+ hours/month)', 'Create searchable knowledge base from program documents', 'Extract insights from beneficiary surveys and feedback', 'Generate impact summaries for fundraising materials', 'Streamline compliance and audit documentation'].map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section id="research" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Card className="p-8 bg-white order-2 lg:order-1">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Research Acceleration</h3>
            <div className="space-y-4">
              {[
                { metric: '10x Faster', desc: 'Literature review and evidence synthesis' },
                { metric: '95% Accuracy', desc: 'Citation extraction and reference mapping' },
                { metric: '50+ Languages', desc: 'Cross-lingual research analysis' },
                { metric: '1000s of Papers', desc: 'Processed and analyzed simultaneously' }
              ].map((item) => (
                <div key={item.metric} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-neutral-700">{item.desc}</span>
                  <span className="text-lg font-bold text-blue-600 ml-4">{item.metric}</span>
                </div>
              ))}
            </div>
          </Card>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 mb-6">
              <Microscope className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-600">Research & Policy</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Evidence Synthesis at Scale</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Accelerate research workflows, improve evidence quality, and deliver insights faster with AI-powered research tools.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-primary-700">
              Discuss Research Use Cases <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      <Section id="enterprise" className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 mb-6">
              <HardHat className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-600">Engineering & Enterprise</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
              Unlock Knowledge from Technical Documents
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Engineering and infrastructure companies manage vast amounts of technical documentation. AI helps teams find answers faster and reuse knowledge more effectively.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-primary-700">
              Explore Enterprise Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <Card className="p-8 bg-gradient-to-br from-orange-50 to-white">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Common Use Cases</h3>
            <div className="space-y-4">
              {['Technical documentation search and Q&A', 'Project knowledge base creation', 'Compliance and safety manual intelligence', 'Vendor and contract document analysis', 'Engineering change order tracking', 'Lessons learned extraction from past projects'].map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-primary-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Every Industry Starts with a Pilot</h2>
          <p className="text-xl text-primary-100 mb-4">We don't believe in one-size-fits-all solutions.</p>
          <p className="text-lg text-primary-100">
            Choose one specific use case. Run a focused 4–6 week pilot. Measure results. Then decide whether to scale. Low risk, high clarity.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Which Use Case Fits Your Organization?</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific challenges and design a pilot that delivers measurable value.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-lg font-semibold text-white hover:bg-primary-700">
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}