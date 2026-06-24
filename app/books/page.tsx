import { Special_Elite } from "next/font/google";
import Link from "next/link";

import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";
import { getAllBooks } from "@/lib/books";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const books = getAllBooks();

  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] pb-10 ${specialElite.className}`}
    >
      <Header title="What Am I Watching?" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-28 md:flex-row">
          <SidebarFullScreen />

          <main className="flex-1 pb-16">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold">
                Books That I Have Read Recently
              </h1>
            </div>

            <section className="grid gap-10">
              {books.map((book) => (
                <article
                  key={book.slug}
                  className="
                    group overflow-hidden rounded-3xl
                    border-2 border-black bg-[#F8EBD1]
                    md:h-80
                  "
                >
                  <div className="flex h-full flex-col md:flex-row">
                    <div className="h-105 shrink-0 md:h-full md:w-56">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                      <div>
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <h2 className="text-3xl font-bold md:text-4xl">
                            {book.title}
                          </h2>

                          <div className="w-fit rounded-full border-2 border-black px-5 py-2 text-xl md:text-2xl">
                            {book.rating}/10
                          </div>
                        </div>

                        <p className="mt-6 text-lg leading-relaxed text-gray-700 md:mt-8 md:text-xl md:line-clamp-4">
                          "{book.comment}"
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t-2 border-dashed border-black pt-4 text-base text-gray-600 md:text-lg">
                        <span>Read</span>

                        <span>{book.read}</span>
                      </div>
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
                Recommend a Book →
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
