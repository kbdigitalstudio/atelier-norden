"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  action: string;
}

export function ContactForm({ action }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const values: ContactFormValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      Object.entries(parsed.error.flatten().fieldErrors).forEach(([key, msgs]) => {
        if (msgs) {
          fieldErrors[key as keyof ContactFormValues] = msgs[0];
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Error al enviar el mensaje");
      // El endpoint actual es una demostración: confirma recepción pero no envía correo real.
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setFormError("No se pudo enviar el mensaje. Inténtalo de nuevo más tarde o escríbenos directamente por WhatsApp.");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="rounded-lg border border-stone-soft bg-warm-white p-4 text-sm text-stone-600">
        <span className="font-semibold text-charcoal">Modo demostrativo:</span>
        {" "}
        Este formulario es un ejercicio de portafolio. El envío de mensajes no está habilitado en este entorno.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-charcoal block">
            Nombre completo <span className="text-sand-dark">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(
              "block w-full px-4 py-3 rounded-lg border text-sm focus-visible:outline-none transition-colors",
              errors.name
                ? "border-red-500 bg-red-50/50 focus:border-red-500"
                : "border-stone-soft hover:border-stone focus:border-charcoal",
              "text-charcoal",
            )}
            placeholder="Juan Pérez"
          />
          {errors.name && (
            <p id="name-error" className="text-[11px] text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-charcoal block">
            Correo electrónico <span className="text-sand-dark">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "block w-full px-4 py-3 rounded-lg border text-sm focus-visible:outline-none transition-colors",
              errors.email
                ? "border-red-500 bg-red-50/50 focus:border-red-500"
                : "border-stone-soft hover:border-stone focus:border-charcoal",
              "text-charcoal",
            )}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && (
            <p id="email-error" className="text-[11px] text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-medium text-charcoal block">
          Tipo de proyecto <span className="text-sand-dark">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          aria-invalid={!!errors.projectType}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={cn(
            "block w-full px-4 py-3 rounded-lg border text-sm focus-visible:outline-none transition-colors",
            errors.projectType
              ? "border-red-500 bg-red-50/50 focus:border-red-500"
              : "border-stone-soft hover:border-stone focus:border-charcoal",
            "text-charcoal bg-white",
          )}
        >
          <option value="">Selecciona una opción</option>
          <option value="vivienda">Vivienda unifamiliar</option>
          <option value="comercial">Local comercial / hostelería</option>
          <option value="interiorismo">Interiorismo</option>
          <option value="remodelacion">Remodelación</option>
          <option value="otro">Otro</option>
        </select>
        {errors.projectType && (
          <p id="projectType-error" className="text-[11px] text-red-600" role="alert">
            {errors.projectType}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-charcoal block">
          Presupuesto orientativo <span className="text-sand-dark">*</span>
        </label>
        <select
          id="budget"
          name="budget"
          required
          aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? "budget-error" : undefined}
          className={cn(
            "block w-full px-4 py-3 rounded-lg border text-sm focus-visible:outline-none transition-colors",
            errors.budget
              ? "border-red-500 bg-red-50/50 focus:border-red-500"
              : "border-stone-soft hover:border-stone focus:border-charcoal",
            "text-charcoal bg-white",
          )}
        >
          <option value="">Selecciona un rango</option>
          <option value="menos-50k">Menos de $ 50.000.000</option>
          <option value="50k-150k">$ 50.000.000  – $ 150.000.000</option>
          <option value="150k-300k">$ 150.000.000 – $ 300.000.000</option>
          <option value="mas-300k">Más de $ 300.000.000</option>
          <option value="sin-definir">Aún sin definir</option>
        </select>
        {errors.budget && (
          <p id="budget-error" className="text-[11px] text-red-600" role="alert">
            {errors.budget}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-charcoal block">
          Mensaje <span className="text-sand-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "block w-full px-4 py-3 rounded-lg border text-sm focus-visible:outline-none transition-colors",
            errors.message
              ? "border-red-500 bg-red-50/50 focus:border-red-500"
              : "border-stone-soft hover:border-stone focus:border-charcoal",
            "text-charcoal",
          )}
          placeholder="Cuéntanos sobre tu proyecto"
        />
        {errors.message && (
          <p id="message-error" className="text-[11px] text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {formError && (
        <div className="rounded-lg border border-red-500 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <AlertCircle size={16} strokeWidth={2} className="mr-2 shrink-0" aria-hidden="true" />
          {formError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex items-center justify-center w-full md:w-auto gap-2 px-8 py-4 rounded-full text-sm font-medium transition-colors focus-visible:outline-none",
          status === "loading"
            ? "bg-stone-soft text-stone-500 cursor-not-allowed"
            : "bg-charcoal text-white hover:bg-sand-dark",
        )}
      >
        {status === "loading" ? (
          <>
            <span className="flex size-4 items-center justify-center rounded-full border-2 border-current border-t-transparent animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send size={18} strokeWidth={2} aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>

      {status === "success" && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800" role="status">
          <CheckCircle size={16} strokeWidth={2} className="mr-2 shrink-0" aria-hidden="true" />
          Mensaje recibido en modo demostrativo. El envío real aún no está configurado.
        </div>
      )}
    </form>
  );
}

export function ContactInfo() {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="reveal flex items-start gap-4">
        <div className="flex-shrink-0 size-9 rounded-full border border-stone-soft flex items-center justify-center text-charcoal">
          <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <dt className="text-xs font-bold text-stone-500 uppercase tracking-widest">Correo</dt>
          <dd className="text-sm text-charcoal">
            <a href="mailto:hola@atelier-norden.example" className="text-sand-dark hover:underline transition-colors">
              KBdigitalstudio69@gmail.com
            </a>
          </dd>
        </div>
      </div>
      <div className="reveal flex items-start gap-4" style={{ transitionDelay: "0.1s" }}>
        <div className="flex-shrink-0 size-9 rounded-full border border-stone-soft flex items-center justify-center text-charcoal">
          <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <dt className="text-xs font-bold text-stone-500 uppercase tracking-widest">Teléfono</dt>
          <dd className="text-sm text-charcoal">+57 323 709 4970</dd>
        </div>
      </div>
      <div className="reveal flex items-start gap-4" style={{ transitionDelay: "0.2s" }}>
        <div className="flex-shrink-0 size-9 rounded-full border border-stone-soft flex items-center justify-center text-charcoal">
          <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <dt className="text-xs font-bold text-stone-500 uppercase tracking-widest">Estudio</dt>
          <dd className="text-sm text-charcoal">Carrera 11 Este 10-28 Sur, Villa Melida, Villavicencio</dd>
        </div>
      </div>
    </dl>
  );
}
