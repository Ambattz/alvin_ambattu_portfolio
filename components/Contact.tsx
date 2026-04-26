import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-darker border-t border-gray-800 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities to leverage my experience in React, GCP, and AI.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-gray-800 hover:border-primary/50 transition-colors h-full">
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white text-sm">
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-gray-800 hover:border-primary/50 transition-colors h-full">
              <Phone className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-white text-sm">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-gray-800 hover:border-primary/50 transition-colors h-full">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <span className="text-gray-400 text-sm">{CONTACT_INFO.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-primary transition-transform hover:-translate-y-1"
                aria-label={link.platform}
              >
                {link.platform === 'LinkedIn' && <Linkedin size={28} />}
                {link.platform === 'Email' && <Mail size={28} />}
                {link.platform === 'Credly' && <ExternalLink size={28} />}
              </a>
            ))}
          </div>

          <p className="mt-16 text-gray-600 text-sm">
            © {new Date().getFullYear()} Alvin George Ambattu. Built with React & Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;