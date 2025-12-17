import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'AI Document Intelligence', href: '/solutions#document-intelligence' },
    { name: 'AI Knowledge Assistants', href: '/solutions#knowledge-assistants' },
    { name: 'Research Automation', href: '/solutions#research-automation' },
    { name: 'Reporting Automation', href: '/solutions#reporting-automation' },
  ],
  industries: [
    { name: 'Social Impact & NGOs', href: '/industries#ngos' },
    { name: 'Research Organizations', href: '/industries#research' },
    { name: 'Engineering & Enterprise', href: '/industries#enterprise' },
  ],
  company: [
    { name: 'Our Approach', href: '/approach' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-10 brightness-0 invert"
              src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-17T20-50-25-172Z-77f8c763-chat-image-1766004625153-0.jpg"
              alt="EdgesOf"
            />
            <p className="text-sm leading-6 text-neutral-300">
              Practical Enterprise AI for Real-World Impact
            </p>
            <div className="flex space-x-6">
              <a href="mailto:contact@edgesof.com" className="text-neutral-400 hover:text-neutral-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+91" className="text-neutral-400 hover:text-neutral-300">
                <span className="sr-only">Phone</span>
                <Phone className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Industries</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.industries.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; {new Date().getFullYear()} EdgesOf Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}