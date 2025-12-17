'use client';

import { Target, Shield, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function ApproachPage() {
  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">Our Approach</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Trust-led, pilot-first, and outcome-focused. We build AI solutions that work in the real world.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">Our Core Principles</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            These principles guide every engagement, every solution, and every decision we make.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: 'Context-First', description: 'We start by deeply understanding your workflows, challenges, and goals—not by pitching technology.' },
            { icon: Shield, title: 'Responsible AI', description: 'Ethical, transparent, and secure AI practices. Your data stays yours, always.' },
            { icon: Users, title: 'Human-Centered', description: 'AI amplifies human expertise—it doesn\'t replace people or disrupt workflows.' },
            { icon: TrendingUp, title: 'Measurable Value', description: 'Every solution must deliver concrete, trackable outcomes. No vanity metrics.' }
          ].map((principle) => (
            <Card key={principle.title} hover className="h-full text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary-50 p-4">
                  <principle.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{principle.title}</h3>
              <p className="text-neutral-600">{principle.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Pilot → Measure → Scale</h2>
            <p className="text-lg text-neutral-600 mb-8">
              We don't believe in big-bang AI transformations. Instead, we start small, prove value, and scale thoughtfully.
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Pilot-First?</h3>
            <div className="space-y-4">
              {['Low risk: Small investment, clear scope', 'Fast results: See value in weeks, not months', 'Real validation: Measure actual impact, not promises', 'Informed decisions: Scale only what works', 'Team buy-in: Prove value before asking for change'].map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">How We're Different</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { us: 'Pilot-first, low-risk engagement', them: 'Long contracts before seeing value' },
            { us: 'Software-only, works with existing systems', them: 'Requires hardware, sensors, or infrastructure overhaul' },
            { us: 'Measurable outcomes from day one', them: 'Vague promises of "transformation"' },
            { us: 'Your data stays private and secure', them: 'Data used to train public models' },
            { us: 'AI supports people, doesn\'t replace them', them: 'Automation-first, job displacement focus' }
          ].map((item, index) => (
            <Card key={index} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-primary-600 mb-1">EdgesOf</div>
                    <div className="text-neutral-900">{item.us}</div>
                  </div>
                </div>
                <div className="flex items-start opacity-60">
                  <div className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full border-2 border-neutral-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-500 mb-1">Others</div>
                    <div className="text-neutral-600">{item.them}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the EdgesOf Difference</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start with a pilot. See results. Then decide. No pressure, just value.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-primary-600 hover:bg-neutral-100">
            Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}