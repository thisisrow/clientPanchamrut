"use client";

import { useEffect, useState } from "react";

type InquiryFormProps = {
  productName?: string;
  source?: string;
  submitLabel?: string;
  className?: string;
  onSubmitted?: () => void;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  quantity: "",
  message: "",
};

export default function InquiryForm({
  productName,
  source,
  submitLabel = "Send Inquiry",
  className = "",
  onSubmitted,
}: InquiryFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");
  const [pageUrl, setPageUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (productName) {
      setForm((prev) => ({ ...prev, product: productName }));
    }
  }, [productName]);

  const onChange =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          product: form.product,
          quantity: form.quantity,
          message: form.message,
          source,
          pageUrl,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit");
      }

      setStatus("success");
      setForm((prev) => ({ ...initialState, product: prev.product }));
      onSubmitted?.();
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Submission failed";
      setStatus("error");
      setError(message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="fade-right" className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Full Name
          </label>
          <input
            className="w-full px-4 py-3 text-[#15803d] rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="Malkesh Doshi"
            type="text"
            required
            value={form.fullName}
            onChange={onChange("fullName")}
          />
        </div>
        <div data-aos="fade-right" className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Email Address
          </label>
          <input
            className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="info@panchamrut.com"
            type="email"
            value={form.email}
            onChange={onChange("email")}
          />
        </div>
      </div>

      <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="+91 98707 95121"
            type="tel"
            required
            value={form.phone}
            onChange={onChange("phone")}
          />
        </div>
        <div className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Company Name
          </label>
          <input
            className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="Company name"
            type="text"
            value={form.company}
            onChange={onChange("company")}
          />
        </div>
      </div>

      <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Product Name
          </label>
          <input
            className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="Product name"
            type="text"
            value={form.product}
            onChange={onChange("product")}
          />
        </div>
        <div className="space-y-2">
          <label className="text-base font-semibold text-slate-700">
            Quantity
          </label>
          <input
            className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
            placeholder="Required quantity"
            type="text"
            value={form.quantity}
            onChange={onChange("quantity")}
          />
        </div>
      </div>

      <div data-aos="fade-right" className="space-y-2">
        <label className="text-base font-semibold text-slate-700">
          Message
        </label>
        <textarea
          className="w-full text-[#15803d] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
          placeholder="How can we help you?"
          rows={4}
          value={form.message}
          onChange={onChange("message")}
        ></textarea>
      </div>

      {status === "error" ? (
        <p data-aos="zoom-in" className="text-base text-red-600">{error}</p>
      ) : null}
      {status === "success" ? (
        <p data-aos="zoom-in" className="text-base text-emerald-600">
          Thanks! We will get back to you shortly.
        </p>
      ) : null}

      <button
      data-aos="zoom-in"
        className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#15803d]/20 disabled:opacity-70"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
