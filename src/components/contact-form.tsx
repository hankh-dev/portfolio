"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendContact, type ContactState } from "@/lib/contact-action";
import type { Dictionary } from "@/i18n/dictionaries";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

export function ContactForm({ dict }: { dict: Dictionary["contact"] }) {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      {/* Honeypot field: hidden from users, catches naive bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.nameLabel} htmlFor="name">
          <input
            id="name"
            name="name"
            required
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </Field>
        <Field label={dict.emailLabel} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={dict.emailPlaceholder}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label={dict.messageLabel} htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {pending ? dict.sending : dict.send}
        </button>

        {state.status === "success" && (
          <p role="status" className="text-sm text-accent">
            {dict.success}
          </p>
        )}
        {state.status === "error" && (
          <p role="alert" className="text-sm text-red-500">
            {state.error === "validation" ? dict.errorValidation : dict.errorSend}
          </p>
        )}
      </div>
    </form>
  );
}
