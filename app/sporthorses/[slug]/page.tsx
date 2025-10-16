import Image from "next/image";
import { notFound } from "next/navigation";
import { horses, getHorseBySlug } from "@/lib/horses";

export async function generateStaticParams() {
  return horses.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);
  if (!horse) return { title: "Häst ej hittad" };
  return {
    title: `${horse.name} – VJ Sporthorses`,
    description: `${horse.age} år • ${horse.breed} • ${horse.discipline}`,
  };
}

export default async function HorseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);
  if (!horse) return notFound();

  return (
    <main className="container mx-auto px-6">
      <div className="grid gap-8 py-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={horse.hero}
              alt={horse.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {(horse.images || []).slice(0, 3).map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10"
              >
                <Image
                  src={src}
                  alt={`${horse.name} bild`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {horse.name}
          </h1>
          <p className="mt-2 text-white/70">
            {horse.age} år • {horse.sex.toUpperCase()} • {horse.breed} •{" "}
            {horse.height} cm • {horse.discipline}
          </p>

          {horse.bloodline && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Blodlinje</h2>
              <p className="text-white/80">{horse.bloodline}</p>
            </div>
          )}

          {horse.achievements && horse.achievements.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Meriter</h2>
              <ul className="mt-2 list-disc pl-5 text-white/80">
                {horse.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {horse.videos && horse.videos.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Videor</h2>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {horse.videos.map((v) => (
                  <div
                    key={v.youtubeId}
                    className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10"
                  >
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-white/80 text-sm">
              Intresserad? Skicka ett mail så återkommer vi med pris,
              veterinärbesiktning och fler klipp.
            </p>
            <a
              href={`mailto:info@vivjgroup.com?subject=${encodeURIComponent(
                "Intresse: " + horse.name
              )}`}
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/20"
            >
              Kontakta om {horse.name}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
