'use client';

import { Target, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">About EdgesOf</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            We believe AI should be practical, responsible, and measurable.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Our Mission</h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              To make enterprise AI accessible, trustworthy, and impactful for organizations that prioritize real-world outcomes over technological hype.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Practical', description: 'AI solutions that solve real problems, not science experiments' },
              { icon: Heart, title: 'Responsible', description: 'Ethical, transparent, and secure AI practices always' },
              { icon: TrendingUp, title: 'Measurable', description: 'Concrete outcomes you can track and demonstrate' }
            ].map((value) => (
              <Card key={value.title} hover className="h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary-50 p-4">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Why We Started EdgesOf</h2>
            <div className="space-y-4 text-lg text-neutral-600">
              <p>
                We saw too many organizations struggling with AI—either overwhelmed by hype or disappointed by solutions that didn't deliver real value.
              </p>
              <p>
                Enterprises, NGOs, and research institutions were being sold expensive, complex AI systems that required massive infrastructure changes, long implementation cycles, and often failed to solve actual problems.
              </p>
              <p>
                We founded EdgesOf to offer a different approach: <strong className="text-neutral-900">software-only AI solutions that work with what you already have, start small with pilots, and deliver measurable results quickly.</strong>
              </p>
              <p>No hardware. No sensors. No disruption. Just practical AI that amplifies human expertise and delivers real-world impact.</p>
            </div>
          </div>
          <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl font-bold mb-6">What We Stand For</h3>
            <div className="space-y-6">
              {[
                { title: 'AI as a Tool, Not a Replacement', desc: 'Technology should amplify human expertise, not eliminate jobs' },
                { title: 'People-First Technology', desc: 'Solutions designed around workflows, not the other way around' },
                { title: 'Proof Over Promises', desc: 'Demonstrate value through pilots before asking for commitment' }
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-primary-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Our Belief</h2>
          <blockquote className="text-2xl font-medium text-neutral-900 mb-8 italic">
            "AI should be practical, responsible, and measurable."
          </blockquote>
          <div className="space-y-4 text-lg text-neutral-600 text-left">
            <p>
              <strong className="text-neutral-900">Practical</strong> means solving real problems with solutions that integrate into existing workflows without requiring massive infrastructure changes.
            </p>
            <p>
              <strong className="text-neutral-900">Responsible</strong> means ethical AI practices, transparent operations, secure data handling, and respect for privacy.
            </p>
            <p>
              <strong className="text-neutral-900">Measurable</strong> means tracking concrete outcomes—time saved, accuracy improved, insights gained—not vanity metrics.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Founder-Led, Credibility-Focused</h2>
          <p className="text-lg text-neutral-600 mb-6">
            EdgesOf is a founder-led company. We're not a large consultancy selling generic solutions. We're a focused team of AI practitioners who have built real systems for real organizations.
          </p>
          <p className="text-lg text-neutral-600 mb-8">
            Every engagement is guided by our commitment to deliver practical, responsible, and measurable AI solutions—no exaggerated claims, no buzzwords, just results.
          </p>
          <div className="inline-flex items-center justify-center rounded-full bg-primary-50 px-6 py-3">
            <span className="text-primary-600 font-semibold">Built by practitioners, for practitioners</span>
          </div>
        </div>
      </Section>

      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Us</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            If you value practical AI over hype, and outcomes over promises, let's talk.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-primary-600 hover:bg-neutral-100">
            Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}