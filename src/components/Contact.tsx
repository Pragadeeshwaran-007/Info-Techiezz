import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email too long'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(200, 'Subject too long'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Mailto Implementation
      const mailtoLink = `mailto:infotechiezz@gmail.com?subject=${encodeURIComponent(
        `Contact: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setIsSubmitted(true);
      toast({
        title: 'Email Client Opened',
        description: "Your default email app should open now.",
      });

      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      console.error('Mailto error:', error);
      toast({
        title: 'Error',
        description: 'Failed to open email client. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">CONTACT US</span>
          <h2 className="section-heading mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:infotechiezz@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-secondary transition-colors">
                      infotechiezz@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Follow our journey</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/infotechiezz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </a>
                  <a
                    href="https://twitter.com/infotechiezz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <Twitter className="w-5 h-5 text-secondary" />
                  </a>
                  <a
                    href="https://instagram.com/infotechiezz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <Instagram className="w-5 h-5 text-secondary" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/50 p-8 rounded-xl border border-border/50 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">Your message has been sent successfully.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form space-y-4">
                  <div className="form-group text-left">
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full p-3 rounded-md border border-input"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="form-group text-left">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full p-3 rounded-md border border-input"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="form-group text-left">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="w-full p-3 rounded-md border border-input"
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div className="form-group text-left">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="w-full p-3 rounded-md border border-input"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="submit-btn w-full py-3 px-6 rounded-md font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
