import React from 'react';
import ContactForm from './ContactForm';
import { X } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16140F]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-8">
        
        {/* Modal Close Button */}
        <button
          type="button"
          aria-label="Close Consultation Modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FBF3DD] hover:bg-[#C9A227] text-[#16140F] hover:text-white transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Contact Form */}
        <ContactForm isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}
