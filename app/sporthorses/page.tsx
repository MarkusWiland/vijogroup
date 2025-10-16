
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VJhousesPage() {
  const items = [
    { id: 1, title: "Villa Solgläntan", img: "/houses/1.jpg", spec: "5 rok • 165 m² • Nyproduktion" },
    { id: 2, title: "Skogsbrynet", img: "/houses/2.jpg", spec: "4 rok • 142 m² • Träfasad" },
    { id: 3, title: "Havsbris", img: "/houses/3.jpg", spec: "6 rok • 190 m² • Sjönära" },
    { id: 4, title: "Stadspuls", img: "/houses/4.jpg", spec: "3 rok • 95 m² • Stadsvy" },
  ];

  return (
    <main className="container mx-auto px-6">
      <section className="py-10 md:py-14">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-5xl font-extrabold tracking-tight">VJhouses</motion.h1>
        <p className="mt-3 max-w-2xl text-white/70">Utforska våra objekt – bläddra i galleriet och kontakta oss för visning och specifikationer.</p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((it) => (
          <article key={it.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3]">
              {/* Byt till riktiga bilder */}
              <Image src={it.img} alt={it.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold tracking-tight">{it.title}</h3>
              <p className="text-sm text-white/70">{it.spec}</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">Visa detaljer</div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

