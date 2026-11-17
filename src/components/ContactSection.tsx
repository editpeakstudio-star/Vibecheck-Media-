import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, Send, Check, AlertCircle, Sparkles } from 'lucide-react';
import { BRAND, SERVICES } from '../data/agencyData';
import { ContactFormData } from '../types';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Video Editing',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid contact number (at least 8 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please briefly describe your project or goals.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide a bit more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClickSound();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formattedMessage =
      `*NEW INQUIRY — VIBECHECK MEDIA*\n\n` +
      `• *Name:* ${formData.fullName.trim()}\n` +
      `• *Email:* ${formData.email.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Service Requested:* ${formData.service}\n\n` +
      `• *Project Overview:*\n${formData.projectDetails.trim()}\n\n` +
      `Sent via VibeCheck Media Website`;

    const targetUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`;
    setSubmittedUrl(targetUrl);

    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#080F19] border-t border-[#1E344A] overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] bottom-10 left-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>GET IN TOUCH / INITIATE PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight mb-4">
            Let's Engineer Your{' '}
            <span className="text-cyan-glow">
              Next Phase of Growth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5]">
            Have a project, a brand overhaul, or an ambitious growth target? Tell us about it, and we'll craft an actionable plan.
          </p>
        </div>

        {/* Contact Grid: Direct Channels + Validated Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Agency Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="reference-card p-7 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#B7C4D5] leading-relaxed">
                Connect directly with founder Ravi Chauhan and our creative strategy team for rapid responses, custom scopes, or instant discovery chats.
              </p>

              {/* Direct WhatsApp Contact Item */}
              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#101B2A] border border-[#1E344A] hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.25)] transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[#080E18] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#8493A8]">
                    WhatsApp Direct
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D9FF] transition-colors">
                    {BRAND.whatsappNumber}
                  </span>
                </div>
              </a>

              {/* Direct Email Contact Item */}
              <a
                href={`mailto:${BRAND.email}`}
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#101B2A] border border-[#1E344A] hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.25)] transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[#080E18] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#8493A8]">
                    Official Inquiries
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D9FF] transition-colors">
                    {BRAND.email}
                  </span>
                </div>
              </a>

              {/* Direct Instagram Contact Item */}
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#101B2A] border border-[#1E344A] hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.25)] transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[#080E18] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#8493A8]">
                    Official Instagram
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D9FF] transition-colors">
                    {BRAND.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-[#1E344A] flex items-center gap-2 text-xs text-[#B7C4D5]">
                <Check className="w-4 h-4 text-[#00D9FF]" />
                <span>Response Time: <strong className="text-[#00D9FF]">Under 2 Hours</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Validated Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="reference-card p-7 sm:p-9 text-left">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                  Project Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#B7C4D5] mt-1">
                  Fill in your project brief to initiate a structured discussion via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono font-semibold text-[#B7C4D5] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera or Brand Name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101B2A] border text-[#F8FAFC] text-sm placeholder-[#8493A8] focus:outline-none transition-all font-sans ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-[#1E344A] focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold text-[#B7C4D5] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#101B2A] border text-[#F8FAFC] text-sm placeholder-[#8493A8] focus:outline-none transition-all font-sans ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#1E344A] focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-semibold text-[#B7C4D5] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 73109 68060"
                      className={`w-full px-4 py-3 rounded-xl bg-[#101B2A] border text-[#F8FAFC] text-sm placeholder-[#8493A8] focus:outline-none transition-all font-sans ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#1E344A] focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-mono font-semibold text-[#B7C4D5] mb-1.5">
                    Select a Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#101B2A] border border-[#1E344A] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.25)] transition-all cursor-pointer font-sans"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#080E18] text-[#F8FAFC]">
                        {srv.title} ({srv.capabilities[0]})
                      </option>
                    ))}
                    <option value="Complete Agency Growth Retainer" className="bg-[#080E18] text-[#F8FAFC]">
                      Complete Multi-Service Growth Retainer
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-mono font-semibold text-[#B7C4D5] mb-1.5">
                    Project Brief *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current challenges, timelines, or commercial targets..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#101B2A] border text-[#F8FAFC] text-sm placeholder-[#8493A8] focus:outline-none transition-all resize-y font-sans ${
                      errors.projectDetails
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-[#1E344A] focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action using btn-primary-cyan */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-cyan w-full py-4 px-6 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Formatting Inquiry...' : 'Submit Inquiry via WhatsApp'}</span>
                </button>

                {/* Fallback link if popup is blocked */}
                {submittedUrl && (
                  <div className="p-3 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-between text-xs text-[#B7C4D5]">
                    <span>Inquiry ready! If WhatsApp did not open automatically:</span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00D9FF] font-semibold underline hover:text-[#F8FAFC]"
                    >
                      Click here to open
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
