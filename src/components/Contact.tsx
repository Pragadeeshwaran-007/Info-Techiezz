import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Send, MapPin, CheckCircle, Linkedin, Instagram,
  MessageSquare, Clock, Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000),
});

const infoItems = [
  { icon: Mail, label: 'Email Us', value: 'admin@infotechiezz.com', href: 'mailto:admin@infotechiezz.com', color: '#2563EB' },
  { icon: MapPin, label: 'Location', value: 'India', href: null, color: '#06B6D4' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null, color: '#14b8a6' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'http://www.linkedin.com/in/Infotechiezz', icon: <Linkedin className="w-4 h-4" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/infotechiezz/', icon: <Instagram className="w-4 h-4" /> },
  {
    name: 'X', href: 'https://x.com/infotechiezz', icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fe[err.path[0] as string] = err.message; });
      setErrors(fe);
      return;
    }
    setIsSubmitting(true);
    try {
      window.location.href = `mailto:admin@infotechiezz.com?subject=${encodeURIComponent(`Contact: ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setIsSubmitted(true);
      toast({ title: 'Email Client Opened', description: 'Your default email app should open.' });
      setTimeout(() => { setFormData({ name: '', email: '', subject: '', message: '' }); setIsSubmitted(false); }, 5000);
    } catch {
      toast({ title: 'Error', description: 'Failed to open email client.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="badge-pill mb-5 inline-flex mx-auto">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact Us
          </span>
          <h2 className="section-heading mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have questions? Our team is ready to assist you within 24 hours.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-white p-8 flex flex-col rounded-2xl"
          >
            <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Contact Information</h3>
            <p className="text-sm text-gray-400 mb-8">Fill out the form and we'll get back to you. Or reach out directly via email.</p>

            <div className="space-y-5 mb-8">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">{item.value}</a>
                      : <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl mb-8"
              style={{ background: '#EFF6FF', border: '1px solid rgba(37,99,235,0.15)' }}>
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-xs text-gray-500">Your data is secure. We never share your information with third parties.</p>
            </div>

            <div className="mt-auto">
              <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Follow Our Journey</p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}
                    className="social-icon" whileHover={{ scale: 1.1, y: -2 }}>
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-white p-8 rounded-2xl"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#EFF6FF' }}>
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-display text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-sm text-gray-400">Your email client has opened. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-6">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="form-input" />
                    {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="form-input" />
                    {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required className="form-input" />
                  {errors.subject && <p className="text-xs text-red-500 mt-1.5">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you're looking for..." rows={5} required className="form-input resize-none" />
                  {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                </div>

                <motion.button type="submit" disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="submit-btn disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />Sending...</>
                  ) : (
                    <>Send Message<Send className="w-4 h-4" /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
