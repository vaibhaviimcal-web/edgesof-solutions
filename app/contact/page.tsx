'use client';

import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin } from 'lucide-react';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', phone: '', message: '', useCase: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', organization: '', phone: '', message: '', useCase: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">Let's Discuss Your AI Use Case</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            Start with a conversation. No pressure, no sales pitch—just an honest discussion about whether AI can help your organization.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
            <p className="text-neutral-600 mb-8">We typically respond within 24 hours. For urgent inquiries, please call us directly.</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-primary-50 p-3">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Email</h3>
                  <a href="mailto:contact@edgesof.com" className="text-primary-600 hover:text-primary-700">contact@edgesof.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-primary-50 p-3">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Phone</h3>
                  <a href="tel:+91" className="text-primary-600 hover:text-primary-700">+91 XXX XXX XXXX</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-primary-50 p-3">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Location</h3>
                  <p className="text-neutral-600">India</p>
                </div>
              </div>
            </div>
            <Card className="mt-8 p-6 bg-primary-50 border-primary-100">
              <h3 className="font-semibold text-neutral-900 mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                {['Initial consultation (30 min)', 'Use case assessment', 'Pilot proposal (if suitable)', 'No obligation to proceed'].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="text-neutral-600">We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">Your Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-neutral-900 mb-2">Organization *</label>
                      <input type="text" id="organization" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors" placeholder="Company Name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors" placeholder="+91 XXX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="useCase" className="block text-sm font-semibold text-neutral-900 mb-2">Primary Interest *</label>
                    <select id="useCase" name="useCase" required value={formData.useCase} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors">
                      <option value="">Select a use case</option>
                      <option value="document-intelligence">AI Document Intelligence</option>
                      <option value="knowledge-assistant">AI Knowledge Assistant</option>
                      <option value="research-automation">Research & Reporting Automation</option>
                      <option value="reporting-automation">Compliance & Reporting</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">Tell Us About Your Challenge *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors resize-none" placeholder="Describe your current challenge, what you're trying to achieve, and how you think AI might help..." />
                  </div>
                  <button type="submit" className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}