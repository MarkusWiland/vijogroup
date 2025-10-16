"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VJsporthorsesPage() {
  const horses = [
    { id: 1, name: "Diamond Spirit", img: "/sporthorses.jpg", desc: "7-årig valack • Dutch Warmblood • 1.45m hoppning" },
    { id: 2, name: "Celine Z", img: "/sporthorses.jpg", desc: "8-årigt sto • Zangersheide • Dressyr & hoppning" },
    { id: 3, name: "Royal Venture", img: "/sporthorses.jpg", desc: "6-årig hingst • Oldenburg • 1.40m hoppning" },
    { id: 4, name: "Midnight Echo", img: "/sporthorses.jpg", desc: "9-årig valack • SWB • Grand Prix dressyr" },
  ];

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
          Utforska våra tävlingshästar – noggrant utvalda för kvalitet, temperament och prestation. Bläddra i stallet och kontakta oss för mer information eller provridning.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {horses.map((horse) => (
          <article
            key={horse.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={horse.img}
                alt={horse.name}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold tracking-tight text-lg">{horse.name}</h3>
              <p className="text-sm text-white/70">{horse.desc}</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 hover:bg-white/20 transition">
                Visa detaljer
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 text-center">
        <p className="text-white/70 text-sm max-w-xl mx-auto">
          Alla våra hästar är tillgängliga för försäljning eller leasing. Kontakta oss för aktuella priser och tävlingsmeriter.
        </p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/20 transition">
          <a href="mailto:info@vivjgroup.com">Kontakta VJ Sporthorses</a>
        </div>
      </section>
    </main>
  );
}