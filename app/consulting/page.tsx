
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsultingPage() {
  return (
    <main className="container mx-auto px-6">
      <section className="py-10 md:py-14">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-5xl font-extrabold tracking-tight">VJgroup</motion.h1>
        <p className="mt-3 max-w-2xl text-white/70">Vi levererar utveckling, design och rådgivning. Här hittar du våra tjänster, case och referenser.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {title: "Webbutveckling", text: "Next.js, React, Headless CMS, API:er och integrationer."},
          {title: "Design & UX", text: "Prototyping, design systems och pixelperfekt UI."},
          {title: "Rådgivning", text: "Teknisk strategi, arkitektur och prestandaoptimering."},
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-white/70">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
        <h2 className="text-2xl font-bold">Utvalda projekt</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[1,2].map((i)=> (
            <div key={i} className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <div className="aspect-[16/9] bg-black/30 flex items-center justify-center">{/* ersätt med bild */}<span className="text-white/40">Projektbild {i}</span></div>
              <div className="p-4">
                <h3 className="font-semibold">Projekt {i}</h3>
                <p className="text-sm text-white/70">Kort beskrivning av projektet och resultat.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15">Kontakta oss</Link>
        </div>
      </section>
    </main>
  );
}
