"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Demo-submit: open mailto with prefilled body (replace later with API route/Resend)
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");
    const body = encodeURIComponent(`Namn: ${name}
Email: ${email}
Telefon: ${phone}

Meddelande:
${message}`);
    const subject = encodeURIComponent("Kontaktförfrågan via viVJgroup.se");
    window.location.href = `mailto:info@vivjgroup.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <main className="container mx-auto px-6 py-10 md:py-14">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Kontakta oss
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Hör av dig så hjälper vi dig vidare. Vi återkommer normalt samma
          arbetsdag.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {/* Left: Info */}
        <section className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Kontaktuppgifter</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <span>
                  Telefon:{" "}
                  <a
                    href="tel:+4612345678"
                    className="underline decoration-white/30 hover:decoration-white"
                  >
                    +46 12 34 56 78
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <span>
                  E‑post:{" "}
                  <a
                    href="mailto:info@vivjgroup.com"
                    className="underline decoration-white/30 hover:decoration-white"
                  >
                    info@vivjgroup.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>Adress: Exempelgatan 10, 111 57 Stockholm, Sverige</span>
              </li>
            </ul>
            <div className="mt-4 text-sm text-white/60">
              <p>Öppettider: Mån–Fre 09:00–17:00 (CET)</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            {/* Google Maps Embed – byt platslänk till er exakta adress */}
            <iframe
              title="viVJgroup – Karta"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8077.310381375008!2d18.059!3d59.334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d60d2a2b6b7%3A0xabc!2sStockholm!5e0!3m2!1sen!2sse!4v1695650000000"
              allowFullScreen
            />
          </div>
        </section>

        {/* Right: Form */}
        <section className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold">Skicka ett meddelande</h2>
            <p className="mt-1 text-sm text-white/60">
              Fyll i formuläret så återkommer vi till dig.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label htmlFor="name" className="text-sm text-white/80">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Ditt namn"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="email" className="text-sm text-white/80">
                  E‑post
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="du@exempel.se"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="text-sm text-white/80">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="+46 …"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm text-white/80">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Berätta kort vad du behöver hjälp med…"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={status !== "idle" && status !== "sent"}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/20 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "sending"
                  ? "Skickar…"
                  : status === "sent"
                  ? "Öppnade e‑post"
                  : "Skicka"}
              </button>
              <span className="text-xs text-white/50">
                Dina uppgifter behandlas konfidentiellt.
              </span>
            </div>
          </form>

          {/* Alt: Direktkontakt-kort */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="tel:+4612345678"
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:bg-white/10"
            >
              Ring oss
            </a>
            <a
              href="mailto:info@vivjgroup.com"
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:bg-white/10"
            >
              Maila oss
            </a>
            <Link
              href="/sporthorses"
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:bg-white/10"
            >
              Till VJ Sporthorses
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
