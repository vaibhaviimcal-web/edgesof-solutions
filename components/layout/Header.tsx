'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Our Approach', href: '/approach' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">EdgesOf Solutions</span>
              <img
                className="h-10 w-auto"
                src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-17T20-50-25-172Z-77f8c763-chat-image-1766004625153-0.jpg"
                alt="EdgesOf"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Start a Pilot
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="space-y-1 px-6 pb-6 pt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-neutral-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block rounded-lg bg-primary-600 px-3 py-2.5 text-base font-semibold text-white text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}