"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, LoaderCircle } from "lucide-react";
import {
  BUDGET_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  SITE,
} from "@/lib/data";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  action: string;
}

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm({ action }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setErrors({});
    setFormError(null);
    setStatus("idle");

    const formData = new FormData(form);
    const values: ContactFormValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      const flattened = parsed.error.flatten().fieldErrors;

      Object.entries(flattened).forEach(([key, messages]) => {
        if (messages?.[0]) {
          fieldErrors[key as keyof ContactFormValues] = messages[0];
        }
      });

      setErrors(fieldErrors);

      const firstInvalid = Object.keys(fieldErrors)[0];
      if (firstInvalid) {
        const field = form.elements.namedItem(firstInvalid);
        if (field instanceof HTMLElement) field.focus();
      }
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) throw new Error("No se pudo enviar el mensaje");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError(
        "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos directamente por correo o WhatsApp.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="form-grid">
      <p className="form-note sm:col-span-2">
        <strong className="font-medium text-graphite">Formulario de demostración.</strong>{" "}
        El envío se simula: los datos no se almacenan ni se reenvían a ningún
        servidor externo.
      </p>

      <div className="field">
        <label htmlFor="name" className="field__label">
          Nombre completo <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="field__input"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p id="name-error" className="field__error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email" className="field__label">
          Correo electrónico <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="field__input"
          placeholder="nombre@correo.com"
        />
        {errors.email && (
          <p id="email-error" className="field__error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="projectType" className="field__label">
          Tipo de proyecto <span aria-hidden="true">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className="field__input"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="projectType-error" className="field__error" role="alert">
            {errors.projectType}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="budget" className="field__label">
          Presupuesto orientativo <span aria-hidden="true">*</span>
        </label>
        <select
          id="budget"
          name="budget"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? "budget-error" : undefined}
          className="field__input"
        >
          <option value="" disabled>
            Selecciona un rango
          </option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p id="budget-error" className="field__error" role="alert">
            {errors.budget}
          </p>
        )}
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor="message" className="field__label">
          Cuéntanos sobre el proyecto <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field__input"
          placeholder="Lugar, superficie aproximada, qué te gustaría conseguir…"
        />
        {errors.message && (
          <p id="message-error" className="field__error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {formError && (
        <p className="form-status form-status--error sm:col-span-2" role="alert">
          {formError}
        </p>
      )}

      {status === "success" && (
        <p className="form-status form-status--success sm:col-span-2" role="status">
          <CheckCircle
            size={16}
            strokeWidth={1.8}
            className="mr-2 inline-block align-text-bottom"
            aria-hidden="true"
          />
          Mensaje recibido en modo demostrativo. El envío real todavía no está
          configurado.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn("btn btn--solid", status === "loading" && "opacity-60")}
        >
          {status === "loading" ? (
            <>
              <LoaderCircle
                size={16}
                strokeWidth={1.8}
                className="animate-spin"
                aria-hidden="true"
              />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </>
          )}
        </button>
        <p className="body-base text-xs">
          O escríbenos a{" "}
          <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}

export function ContactInfo() {
  return (
    <dl className="contact-list">
      <div className="contact-list__item">
        <dt className="contact-list__label">Correo</dt>
        <dd className="contact-list__value">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </dd>
      </div>

      <div className="contact-list__item">
        <dt className="contact-list__label">Teléfono</dt>
        <dd className="contact-list__value">
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
        </dd>
      </div>

      {SITE.whatsapp && (
        <div className="contact-list__item">
          <dt className="contact-list__label">WhatsApp</dt>
          <dd className="contact-list__value">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </dd>
        </div>
      )}

      <div className="contact-list__item">
        <dt className="contact-list__label">Estudio</dt>
        <dd className="contact-list__value">
          <address className="not-italic">{SITE.address}</address>
        </dd>
      </div>

      <div className="contact-list__item">
        <dt className="contact-list__label">Respuesta</dt>
        <dd className="contact-list__value">
          Escríbenos y te responderemos a la brevedad posible.
        </dd>
      </div>
    </dl>
  );
}
