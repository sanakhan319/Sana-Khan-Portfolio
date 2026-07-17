// import type { FormEvent } from 'react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Mail,
//   MapPin,
//   Send,
//   CheckCircle,
//   AlertCircle,
// } from 'lucide-react';
// import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
// import { personalInfo } from '../data/portfolio';

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// }

// export default function ContactPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const validate = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setStatus('success');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setTimeout(() => setStatus('idle'), 5000);
//   };

//   const handleChange = (
//     field: keyof FormData,
//     value: string
//   ) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: personalInfo.email,
//       href: `mailto:${personalInfo.email}`,
//     },
//     // {
//     //   icon: Github,
//     //   label: 'GitHub',
//     //   value: 'GitHub.com/sana',
//     //   href: personalInfo.GitHub,
//     // },
//     // {
//     //   icon: Linkedin,
//     //   label: 'LinkedIn',
//     //   value: 'linkedin.com/in/sana',
//     //   href: personalInfo.linkedin,
//     // },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: personalInfo.location,
//       href: '#',
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-hero-pattern" />
//         <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
//         <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
//         <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Get In <span className="gradient-text">Touch</span>
//             </h1>
//             <p className="text-dark-400 text-lg max-w-2xl mx-auto">
//               Have a project in mind or want to collaborate? I'd love to hear from you.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <SectionWrapper id="contact">
//         <SectionTitle
//           title="Contact Me"
//           subtitle="Reach out and let's create something amazing together"
//         />
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
//               {status === 'success' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-center gap-2 p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400"
//                 >
//                   <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                   <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
//                 </motion.div>
//               )}

//               {status === 'error' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
//                 >
//                   <AlertCircle className="w-5 h-5 flex-shrink-0" />
//                   <span className="text-sm">Something went wrong. Please try again.</span>
//                 </motion.div>
//               )}

//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1.5">
//                   Your Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => handleChange('name', e.target.value)}
//                   className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
//                     errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
//                   }`}
//                   placeholder="John Doe"
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-xs text-red-400">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1.5">
//                   Your Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleChange('email', e.target.value)}
//                   className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
//                     errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
//                   }`}
//                   placeholder="john@example.com"
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-xs text-red-400">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-1.5">
//                   Subject
//                 </label>
//                 <input
//                   id="subject"
//                   type="text"
//                   value={formData.subject}
//                   onChange={(e) => handleChange('subject', e.target.value)}
//                   className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
//                     errors.subject ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
//                   }`}
//                   placeholder="Project Inquiry"
//                 />
//                 {errors.subject && (
//                   <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-1.5">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) => handleChange('message', e.target.value)}
//                   className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none ${
//                     errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
//                   }`}
//                   placeholder="Tell me about your project..."
//                 />
//                 {errors.message && (
//                   <p className="mt-1 text-xs text-red-400">{errors.message}</p>
//                 )}
//               </div>

//               <button type="submit" className="btn-primary w-full justify-center">
//                 <Send className="w-4 h-4" />
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//           {/* Contact Info & Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             {/* Contact Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {contactInfo.map((info, i) => (
//                 <motion.a
//                   key={info.label}
//                   href={info.href}
//                   target={info.href.startsWith('http') ? '_blank' : undefined}
//                   rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="glass rounded-xl p-5 card-hover group"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
//                     <info.icon className="w-5 h-5 text-primary-400" />
//                   </div>
//                   <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">
//                     {info.label}
//                   </p>
//                   <p className="text-dark-200 text-sm font-medium">
//                     {info.value}
//                   </p>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Social Links */}
//             {/* <div className="glass rounded-xl p-6">
//               <h3 className="text-white font-semibold mb-4">Follow Me</h3>
//               <div className="flex gap-4">
//                 {[
//                 //   { icon: Github, href: personalInfo.GitHub, label: 'GitHub' },
//                 //   { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
//                   { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
//                 ].map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/20 transition-all duration-300"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div> */}

//             {/* Map Placeholder */}
//             <div className="glass rounded-xl overflow-hidden">
//               <div className="w-full h-64 bg-dark-800/50 flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="w-8 h-8 text-primary-400 mx-auto mb-2" />
//                   <p className="text-dark-400 text-sm">{personalInfo.location}</p>
//                   <p className="text-dark-500 text-xs mt-1">Map placeholder</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </SectionWrapper>
//     </>
//   );
// }



import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
// A custom SVG icon that matches the exact stroke, width, and look of Lucide icons!
function CustomLinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo?.email || 'No email provided',
      href: personalInfo?.email ? `mailto:${personalInfo.email}` : '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo?.phone || 'No phone provided',
      href: personalInfo?.phone ? `tel:${personalInfo.phone}` : '#',
    },
    {
      icon: CustomLinkedinIcon, // 🟢 Swap 'Linkedin' with our custom component here!
      label: 'LinkedIn',
      value: 'LinkedIn/Sana Khan',
      href: personalInfo?.linkedin || '#',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo?.location || 'No location provided',
      href: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="contact">
        <SectionTitle
          title="Contact Me"
          subtitle="Reach out and let's create something amazing together"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                    errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                    errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                    errors.subject ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-800/50 border text-white placeholder-dark-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  // Checks for 'http' or 'https' so it cleanly targets external sites like LinkedIn
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-dark-200 text-sm font-medium">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-dark-800/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <p className="text-dark-400 text-sm">{personalInfo.location}</p>
                  <p className="text-dark-500 text-xs mt-1">Map placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}