"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdvgezr";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">Get in Touch</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Contact Us</h1>
      <p className="mt-4 text-[#5A4A4A]">Have a project in mind or a question for the team? Send us a message and we&apos;ll get back to you.</p>

      {status === "ok" ? (
        <div className="mt-10 rounded-xl border border-[#C2A47A] bg-[#F3E9D6] p-8 text-center">
          <p className="text-lg font-bold text-[#4A1D5E]">Thanks — your message is on its way!</p>
          <p className="mt-2 text-[#5A4A4A]">We&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#3B2A48] mb-1">Name</label>
            <input name="name" required className="w-full rounded-lg border border-[#E0CBA8] bg-white px-4 py-2.5 text-[#2B1838] focus:outline-none focus:border-[#7B3FA0]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3B2A48] mb-1">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg border border-[#E0CBA8] bg-white px-4 py-2.5 text-[#2B1838] focus:outline-none focus:border-[#7B3FA0]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3B2A48] mb-1">Message</label>
            <textarea name="message" required rows={5} className="w-full rounded-lg border border-[#E0CBA8] bg-white px-4 py-2.5 text-[#2B1838] focus:outline-none focus:border-[#7B3FA0]" />
          </div>
          <button type="submit" disabled={status === "sending"} className="px-7 py-3 rounded-lg bg-[#5B2A86] text-white font-medium hover:bg-[#4A1D5E] transition-colors disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "error" && <p className="text-sm text-red-600">Something went wrong — please try again or email us directly.</p>}
        </form>
      )}
    </section>
  );
}