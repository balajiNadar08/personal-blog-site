import Link from "next/link";
import { Lato, Special_Elite } from "next/font/google";

import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";
import { getAllSongs } from "@/lib/music";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const songs = getAllSongs();

  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] ${specialElite.className} pb-10`}
    >
      <Header title="What Am I Listening?" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-28 md:flex-row">
          <SidebarFullScreen />

          <main className="flex-1 pb-16">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold">
                Songs Living Rent-Free in My Head
              </h1>

              <p
                className={`mx-auto max-w-2xl text-gray-600 ${specialElite.className}`}
              >
                The songs that have been accompanying my days lately.
              </p>
            </div>

            <section className="grid w-full gap-8 lg:grid-cols-2">
              {songs.map((song) => (
                <article key={song.slug} className="group">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-linear-to-t from-black/90 via-black/20 to-transparent
                        transition-all duration-300
                        group-hover:bg-black/50
                      "
                    />
                    <a
                      href={song.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      <div
                        className="
                          flex h-20 w-20 items-center justify-center
                          rounded-full bg-white/90 backdrop-blur-md
                          shadow-2xl transition-all duration-300
                          group-hover:scale-110
                        "
                      >
                        <span className="ml-2 mt-2 text-4xl text-black">▶</span>
                      </div>
                    </a>

                    <div className="absolute bottom-0 left-0 p-8">
                      <h2 className="mt-2 text-4xl font-bold text-white">
                        {song.title}
                      </h2>

                      <p className="mt-2 text-lg text-white/80">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-12 text-center">
              <Link
                href="/recommend"
                className="inline-flex rounded-full border-2 border-black px-8 py-4 text-lg transition hover:bg-black hover:text-[#F3E4C9]"
              >
                Recommend a Song →
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
