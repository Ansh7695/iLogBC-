import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit consultation request.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection or try again.');
    }
  };

  return (
    <div id="contact" className={`bg-white rounded-3xl border border-[#E8E2D2] shadow-2xl p-8 sm:p-12 relative overflow-hidden ${isModal ? 'max-w-2xl w-full mx-auto' : ''}`}>
      
      {/* Top Gold Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#9C7A1A] to-[#16140F]"></div>

      {/* Form Header */}
      <div className="mb-8">
        <h3 className="font-serif text-3xl font-normal text-[#16140F]">
          Partner With iLogBC
        </h3>
        <p className="font-sans text-sm text-[#33312A] mt-2">
          Fill out the form below and our sector specialists will contact you within 24 hours.
        </p>
      </div>

      {/* Success Notification */}
      {status === 'success' && (
        <div className="mb-6 p-5 rounded-2xl bg-[#FBF3DD] border border-[#C9A227] flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-[#C9A227] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm text-[#16140F]">Consultation Request Received!</h4>
            <p className="text-xs text-[#33312A] mt-1">
              Thank you for reaching out. An iLogBC senior advisor will contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs font-medium">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Consultation Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#16140F] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Vikram Sharma"
              className="w-full px-4 py-3 rounded-xl bg-[#FBF3DD]/20 border border-[#E8E2D2] text-sm text-[#16140F] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#16140F] mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="v.sharma@logistics.com"
              className="w-full px-4 py-3 rounded-xl bg-[#FBF3DD]/20 border border-[#E8E2D2] text-sm text-[#16140F] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#16140F] mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-[#FBF3DD]/20 border border-[#E8E2D2] text-sm text-[#16140F] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs uppercase tracking-wider font-semibold text-[#16140F] mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Global Logistics"
              className="w-full px-4 py-3 rounded-xl bg-[#FBF3DD]/20 border border-[#E8E2D2] text-sm text-[#16140F] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#16140F] mb-1.5">
            Advisory Scope / Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your logistics, infrastructure or blockchain project..."
            className="w-full px-4 py-3 rounded-xl bg-[#FBF3DD]/20 border border-[#E8E2D2] text-sm text-[#16140F] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-[11px] text-[#6B6858]">
            Your data is strictly confidential under iLogBC NDA guidelines.
          </p>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 bg-[#C9A227] hover:bg-[#9C7A1A] text-white text-xs uppercase tracking-wide font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
