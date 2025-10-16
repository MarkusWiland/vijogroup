"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { horses } from "@/lib/horses";

export default function VJsporthorsesPage() {
  return (
    <main className="container mx-auto px-6">
      <section className="py-10 md:py-14">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          VJ Sporthorses
        </motion.h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Utforska våra tävlingshästar – kvalitet, temperament och prestation.
          Klicka in för blodlinje, meriter och video.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {horses.map((h) => (
          <article
            key={h.slug}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={h.hero}
                alt={h.name}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold tracking-tight text-lg">{h.name}</h3>
              <p className="text-sm text-white/70">
                {h.age} år • {h.breed} • {h.discipline}
              </p>
              <Link
                href={`/sporthorses/${h.slug}`}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 hover:bg-white/20 transition"
              >
                Visa detaljer
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
