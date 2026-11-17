import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, Send, Check, AlertCircle } from 'lucide-react';
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
    <section id="contact" className="relative py-24 sm:py-32 bg-[#10141C] border-t border-[#222A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
            <span>GET IN TOUCH</span>
            <span className="text-[#303744]">/</span>
            <span className="text-[#A7B0C0]">INITIATE PROJECT</span>
          </div>
          <h2 className="text-fluid-section font-extrabold text-[#F8FAFC] mb-4">
            Let's Engineer Your{' '}
            <span className="text-shine">
              Next Phase of Growth.
            </span>
          </h2>
          <p className="text-fluid-lead text-[#A7B0C0]">
            Have a project, a brand overhaul, or an ambitious growth target? Tell us about it, and we'll craft an actionable plan.
          </p>
        </div>

        {/* Contact Grid: Direct Channels + Validated Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Agency Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="rounded-2xl p-7 bg-[#171B24] border border-[#222A36] space-y-6">
              <h3 className="text-fluid-card font-bold text-[#F8FAFC]">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Connect directly with founder Ravi Chauhan and our creative strategy team for rapid responses, custom scopes, or instant discovery chats.
              </p>

              {/* Direct WhatsApp Contact Item */}
              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-[#10141C] border border-[#222A36] hover:border-[#55C8F5]/60 hover:bg-[#1D2430] transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171B24] border border-[#303744] flex items-center justify-center text-[#55C8F5] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-kicker text-[#788597]">
                    WhatsApp Direct
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#55C8F5] transition-colors">
                    {BRAND.whatsappNumber}
                  </span>
                </div>
              </a>

              {/* Direct Email Contact Item */}
              <a
                href={`mailto:${BRAND.email}`}
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-[#10141C] border border-[#222A36] hover:border-[#55C8F5]/60 hover:bg-[#1D2430] transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171B24] border border-[#303744] flex items-center justify-center text-[#55C8F5] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-kicker text-[#788597]">
                    Official Inquiries
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#55C8F5] transition-colors">
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
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-[#10141C] border border-[#222A36] hover:border-[#55C8F5]/60 hover:bg-[#1D2430] transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171B24] border border-[#303744] flex items-center justify-center text-[#55C8F5] shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-kicker text-[#788597]">
                    Official Instagram
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#55C8F5] transition-colors">
                    {BRAND.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-[#222A36] flex items-center gap-2 text-xs text-[#A7B0C0]">
                <Check className="w-4 h-4 text-[#55C8F5]" />
                <span>Response Time: <strong className="text-[#F8FAFC]">Under 2 Hours</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Validated Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-[#171B24] border border-[#303744] shadow-xl shadow-black/50 text-left">
              <div className="mb-6">
                <h3 className="text-fluid-card font-bold text-[#F8FAFC]">
                  Project Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#A7B0C0] mt-1">
                  Fill in your project brief to initiate a structured discussion via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-kicker text-[#A7B0C0] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera or Brand Name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#10141C] border text-[#F8FAFC] text-sm placeholder-[#788597] focus:outline-none transition-colors font-sans ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-[#303744] focus:border-[#55C8F5]'
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
                    <label htmlFor="email" className="block text-xs font-mono text-kicker text-[#A7B0C0] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#10141C] border text-[#F8FAFC] text-sm placeholder-[#788597] focus:outline-none transition-colors font-sans ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#303744] focus:border-[#55C8F5]'
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
                    <label htmlFor="phone" className="block text-xs font-mono text-kicker text-[#A7B0C0] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 73109 68060"
                      className={`w-full px-4 py-3 rounded-xl bg-[#10141C] border text-[#F8FAFC] text-sm placeholder-[#788597] focus:outline-none transition-colors font-sans ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#303744] focus:border-[#55C8F5]'
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
                  <label htmlFor="service" className="block text-xs font-mono text-kicker text-[#A7B0C0] mb-1.5">
                    Select a Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#10141C] border border-[#303744] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#55C8F5] transition-colors cursor-pointer font-sans"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#171B24] text-[#F8FAFC]">
                        {srv.title} ({srv.capabilities[0]})
                      </option>
                    ))}
                    <option value="Complete Agency Growth Retainer" className="bg-[#171B24] text-[#F8FAFC]">
                      Complete Multi-Service Growth Retainer
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-mono text-kicker text-[#A7B0C0] mb-1.5">
                    Project Brief *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current challenges, timelines, or commercial targets..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#10141C] border text-[#F8FAFC] text-sm placeholder-[#788597] focus:outline-none transition-colors resize-y font-sans ${
                      errors.projectDetails
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-[#303744] focus:border-[#55C8F5]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all cursor-pointer disabled:opacity-50 font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Formatting Inquiry...' : 'Submit Inquiry via WhatsApp'}</span>
                </button>

                {/* Fallback link if popup is blocked */}
                {submittedUrl && (
                  <div className="p-3 rounded-xl bg-[#10141C] border border-[#303744] flex items-center justify-between text-xs text-[#A7B0C0]">
                    <span>Inquiry ready! If WhatsApp did not open automatically:</span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#55C8F5] font-semibold underline hover:text-[#F8FAFC]"
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
