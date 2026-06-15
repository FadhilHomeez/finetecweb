"use client";

import { FormEvent, useMemo, useState } from "react";

type QuoteFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: QuoteFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Laser cutting",
  message: "",
};

const services = [
  "Laser cutting",
  "Bending",
  "Welding",
  "Shearing",
  "Design and consultation",
  "Other engineering services",
];

export function QuoteForm() {
  const [form, setForm] = useState(initialState);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        "Hello Finetec Engineering,",
        "",
        "I would like to discuss a sheet metal fabrication project.",
        "",
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${form.service}`,
        "",
        "Project details:",
        form.message,
      ].join("\n"),
    );

    return `mailto:rick@finetec.com.sg?cc=anne@finetec.com.sg&subject=${subject}&body=${body}`;
  }, [form]);

  function updateField(field: keyof QuoteFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Company
          <input
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Company name"
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+65"
          />
        </label>
      </div>

      <label>
        Service
        <select
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <label>
        Project details
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Material, thickness, quantity, timeline, drawings, or any details you already have."
          rows={5}
        />
      </label>

      <button className="button button-primary" type="submit">
        Send enquiry
        <span aria-hidden="true"> &gt;</span>
      </button>
    </form>
  );
}
