'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Brain, Search, TrendingUp, Building2, Heart, Microscope, HardHat, ArrowRight, CheckCircle2, Shield, Target, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function Home() {
  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-neutral-50 to-white">
        <motion.div initial="initial" animate="animate" className="text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl text-balance">
            Practical Enterprise AI for <span className="text-primary-600">Real-World Impact</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            We design software-only, enterprise-grade AI solutions that work on top of your existing data, documents, and systems—delivering measurable value without operational disruption.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/solutions" className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 inline-flex items-center">
              Explore AI Use Cases <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="rounded-lg border-2 border-primary-600 px-6 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 inline-flex items-center">
              Start with a Pilot
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">What We Do</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            EdgesOf helps organizations apply AI to improve knowledge access, research productivity, reporting efficiency, and decision-making using the data they already have.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FileText, title: 'AI Document Intelligence', description: 'Extract insights from reports, SOPs, research papers, and policies automatically.' },
            { icon: Brain, title: 'AI Knowledge Assistants', description: 'Secure internal AI trained on your organizational documents for instant answers.' },
            { icon: Search, title: 'Research & Reporting Automation', description: 'Faster literature reviews, cross-document insights, and automated report generation.' },
            { icon: TrendingUp, title: 'Decision & Insight Support', description: 'Evidence-based decision-making with AI-powered analytics and recommendations.' }
          ].map((item) => (
            <Card key={item.title} hover className="h-full">
              <item.icon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">AI supports people—it does not disrupt workflows.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: '01', title: 'Understand Your Context', description: 'We start by deeply understanding your workflows, challenges, and goals.' },
            { step: '02', title: 'Pilot-First (4–6 weeks)', description: 'Low-risk, focused pilot to demonstrate value before full commitment.' },
            { step: '03', title: 'Measure Outcomes', description: 'Track concrete metrics: time saved, accuracy improved, insights gained.' },
            { step: '04', title: 'Scale Thoughtfully', description: 'Expand proven solutions across teams and use cases systematically.' }
          ].map((item) => (
            <div key={item.step} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg">{item.step}</div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Who We Work With</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, title: 'Enterprises', description: 'Large organizations seeking to leverage AI for operational efficiency' },
            { icon: HardHat, title: 'Engineering & Infrastructure', description: 'Companies managing complex technical documentation and projects' },
            { icon: Heart, title: 'NGOs & Social Impact', description: 'Organizations focused on measurable social outcomes and reporting' },
            { icon: Microscope, title: 'Research & Policy', description: 'Institutions requiring evidence synthesis and knowledge management' }
          ].map((item) => (
            <Card key={item.title} hover className="h-full text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary-50 p-4">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-primary-600 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why EdgesOf</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: 'Software-Only AI', description: 'No hardware, sensors, or infrastructure changes required' },
            { icon: Target, title: 'Pilot-First Engagement', description: 'Low-risk, measurable proof of value before scaling' },
            { icon: Shield, title: 'Secure & Responsible', description: 'Enterprise-grade security with ethical AI practices' },
            { icon: CheckCircle2, title: 'Measurable Outcomes', description: 'Focus on concrete results and ROI tracking' }
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-primary-100">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to explore AI for your organization?</h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Start with a focused pilot. No long-term commitments. Measurable results in 4–6 weeks.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link href="/contact" className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100 inline-flex items-center">
              Discuss a Pilot Use Case
            </Link>
            <Link href="/solutions" className="rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 inline-flex items-center">
              View Solutions
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}