
"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <main className="relative">
      {/* Hero background (replace URL below with your image or remove bg) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(255,255,255,0.12), transparent 60%), url('/hero.jpg')",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          opacity: 0.14,
          mixBlendMode: "screen",
        }}
      />

      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col text-center items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
          En tydlig väg in i <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">viVJgroup</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/70"
          >
          Välj kategori nedan. Sidan är uppdelad i två tydliga spår för att snabbt ta dig rätt: <span className="text-white">VJgroup</span> och <span className="text-white">VJhouses</span>.
        </motion.p>
          </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <OptionCard
            href="/consulting"
            label="ViJo Consulting"
            description="Tjänster, projekt och referenser. Upptäck hur vi skapar värde."
            gradient="from-indigo-500/30 via-indigo-400/20 to-blue-500/20"
            hovered={hovered}
            setHovered={setHovered}
          />
          <OptionCard
            href="/sporthorses"
            label="ViJo Sporthorses"
            description="Våra hus & objekt. Bläddra bland gallerier, specifikationer och kontakt."
            gradient="from-emerald-500/30 via-emerald-400/20 to-teal-500/20"
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
        <p className="mt-6 text-center text-sm text-white/50">
          Tips: Du kan alltid använda tangentbordet – tabb för att fokusera och enter för att välja.
        </p>
      </section>
    </main>
  );
}

function OptionCard({
  href,
  label,
  description,
  gradient,
  hovered,
  setHovered,
}: {
  href: string;
  label: string;
  description: string;
  gradient: string;
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const isActive = hovered === label;
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>
      <Link
        href={href}
        onFocus={() => setHovered(label)}
        onBlur={() => setHovered(null)}
        onMouseEnter={() => setHovered(label)}
        onMouseLeave={() => setHovered(null)}
        className="group relative block overflow-hidden rounded-3xl ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_120%_-20%,rgba(255,255,255,0.12),transparent_60%)]" aria-hidden />
        <div className="relative z-10 flex min-h-[46vh] flex-col items-start justify-between p-8 md:p-10">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80">{label}</span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{label}</h3>
            <p className="max-w-[55ch] text-white/80">{description}</p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/15 transition group-hover:gap-3">
            <span>Gå vidare</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </div>
        </div>
        <motion.div initial={false} animate={{ opacity: isActive ? 1 : 0 }} transition={{ type: "spring", stiffness: 250, damping: 30 }} className="pointer-events-none absolute -inset-1 rounded-[1.7rem] bg-white/10 blur-2xl" />
      </Link>
    </motion.div>
  );
}

