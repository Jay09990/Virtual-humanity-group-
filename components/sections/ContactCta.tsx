"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { FormField } from "@/components/ui/FormField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy } from "@/lib/content";

type FieldErrors = Record<string, string>;

export function ContactCta() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Array.from(
      event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input, textarea",
      ),
    );
    const nextErrors: FieldErrors = {};

    for (const field of fields) {
      if (field.validity.valueMissing) {
        nextErrors[field.name] = copy.requiredError;
      } else if (field.validity.typeMismatch) {
        nextErrors[field.name] = copy.emailError;
      }
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section
      id="contact"
      className="contact-section section-pad"
      aria-labelledby="contact-title"
    >
      <Container className="contact-layout">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow={copy.contactEyebrow}
            title={copy.contactTitle}
            tone="dark"
          />
          <p className="contact-intro">{copy.contactIntro}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="name"
            name="name"
            label={copy.nameLabel}
            autoComplete="name"
            required
            error={errors.name}
          />
          <FormField
            id="email"
            name="email"
            label={copy.emailLabel}
            type="email"
            autoComplete="email"
            required
            error={errors.email}
          />
          <FormField
            id="company"
            name="company"
            label={copy.companyLabel}
            autoComplete="organization"
            error={errors.company}
          />
          <FormField
            id="message"
            name="message"
            label={copy.messageLabel}
            multiline
            required
            error={errors.message}
          />
          <div className="form-actions">
            <button className="button button-dark" type="submit">
              {copy.submitCta}
            </button>
            {submitted && (
              <p className="form-success" role="status" aria-live="polite">
                {copy.contactSuccess}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}
