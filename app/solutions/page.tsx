'use client';

import { motion } from 'framer-motion';
import { FileText, Brain, Search, ClipboardCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">Enterprise AI Solutions</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Software-only AI solutions that integrate seamlessly with your existing workflows. No hardware. No sensors. No system replacement.
          </p>
        </div>
      </Section>

      <Section id="document-intelligence" className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 mb-6">
              <FileText className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-sm font-semibold text-primary-600">AI Document Intelligence</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
              Extract Insights from Your Documents Automatically
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Transform unstructured documents—reports, SOPs, research papers, policies, and contracts—into structured, searchable, actionable intelligence.
            </p>
            <ul className="space-y-4 mb-8">
              {['Automated document summarization and key point extraction', 'Intelligent Q&A over large document repositories', 'Cross-document analysis and pattern recognition', 'Compliance and policy review support', 'Multi-language document processing'].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-primary-700">
              Discuss Your Use Case <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Time Saved', value: '70%', desc: 'on document review' },
              { label: 'Accuracy', value: '95%+', desc: 'information extraction' },
              { label: 'Processing', value: '1000s', desc: 'documents per hour' },
              { label: 'Languages', value: '50+', desc: 'supported globally' }
            ].map((stat) => (
              <Card key={stat.label} hover className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-neutral-900 mb-1">{stat.label}</div>
                <div className="text-xs text-neutral-600">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="knowledge-assistants" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Card className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 order-2 lg:order-1">
            <Brain className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Your Organization's AI Brain</h3>
            <p className="text-primary-100 mb-6">
              Imagine having an expert who has read every document, policy, report, and email in your organization—and can answer any question instantly.
            </p>
          </Card>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 mb-6">
              <Brain className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-sm font-semibold text-primary-600">AI Knowledge Assistants</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
              Secure Internal AI Trained on Your Documents
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Deploy a private AI assistant that understands your organization's knowledge base, providing fast, reliable answers to your teams.
            </p>
            <ul className="space-y-4 mb-8">
              {['Natural language search across all organizational knowledge', 'Context-aware responses with source citations', 'Role-based access control and permissions', 'Integration with existing tools (Slack, Teams, SharePoint)', 'Continuous learning from new documents and feedback'].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-primary-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">All Solutions Integrate with Your Existing Workflows</h2>
          <p className="text-xl text-primary-100 mb-4">No sensors. No hardware. No system replacement.</p>
          <p className="text-lg text-primary-100">
            Our software-only approach means faster deployment, lower risk, and immediate value—working seamlessly on top of your current infrastructure.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">Ready to See AI in Action?</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start with a focused 4–6 week pilot. Choose one use case, measure results, then scale.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-lg font-semibold text-white hover:bg-primary-700">
            Discuss a Pilot Use Case <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}