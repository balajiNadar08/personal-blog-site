import Link from "next/link";
import { Special_Elite } from "next/font/google";
import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] pb-10 ${specialElite.className}`}
    >
      <Header title="Newsletter" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-28 md:flex-row">
          <SidebarFullScreen />

          <main className="flex-1">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-bold">
                Letters From My Corner of the Internet
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-gray-700">
                Occasionally, I write about things I'm building, books I'm
                reading, movies I'm watching, songs I'm obsessed with and
                random thoughts that don't fit anywhere else.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-3xl border-2 border-black bg-[#F8EBD1] p-10 shadow-xl">
              <h2 className="text-center text-3xl font-bold">
                Join the Mailing List
              </h2>

              <p className="mt-4 text-center text-gray-700">
                If something delights me, teaches me, or keeps me awake at night thinking about it, you'll probably hear about it here.
              </p>

              <form
                action="https://buttondown.com/api/emails/embed-subscribe/iONE"
                method="post"
                target="popupwindow"
                className="mt-10 space-y-6"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="
                    w-full rounded-full border-2 border-black
                    bg-transparent px-8 py-5 text-lg outline-none
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full rounded-full border-2 border-black
                    px-8 py-5 text-lg cursor-pointer transition
                    hover:bg-black hover:text-[#F3E4C9]
                  "
                >
                  Subscribe →
                </button>
              </form>
            </div>

            <section className="mt-12 text-center">
              <Link
                href="/blogs"
                className="inline-flex rounded-full border-2 border-black px-8 py-4 text-lg cursor-pointer transition hover:bg-black hover:text-[#F3E4C9]"
              >
                Read blogs →
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
