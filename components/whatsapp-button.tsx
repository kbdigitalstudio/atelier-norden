"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) return null;

  return (
    <Link
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-charcoal text-white text-sm font-medium shadow-xl hover:bg-sand-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-charcoal"
      aria-label="Escríbenos por WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
      WhatsApp
    </Link>
  );
}
