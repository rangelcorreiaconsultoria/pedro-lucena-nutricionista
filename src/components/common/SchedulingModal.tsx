'use client';

import { useState } from 'react';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchedulingModal({ isOpen, onClose }: SchedulingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full h-full md:w-[90%] md:h-[90vh] md:max-w-4xl relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-brand-gray rounded-full transition-colors"
          aria-label="Fechar agendamento"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-dark-gray"
          >
            <path d="M18 6l-12 12M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="border-b border-brand-gray/20 px-8 py-6">
          <h2 className="text-2xl font-bold text-brand-dark-gray">Agendar Consulta</h2>
          <p className="text-text-secondary text-sm mt-1">Selecione um horário disponível</p>
        </div>

        {/* Calendar Iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://calendar.app.google/MmzzQkmMHmxMB4Zb6"
            className="w-full h-full border-0"
            title="Agendar Consulta - Google Calendar"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
