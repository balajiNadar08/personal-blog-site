import { Lato, Special_Elite } from "next/font/google";
import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] ${specialElite.className} pb-10`}
    >
      <Header title="Recommend Balaji" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-28">
          <SidebarFullScreen />

          <main className="mx-auto pb-16">
            <div className="space-y-4  mb-12">
              <h1 className="text-5xl font-bold">Leave Me a Rabbit Hole</h1>

              <p className="text-lg mx-auto">
                Found an interesting book? A movie that changed your life? Got a
                piece of advice worth sharing? Know a website, tool, YouTube
                channel, game, anime or anything else that's worth checking out?
              </p>

              <p className="text-gray-600">
                I'm always curious and love discovering new things. Leave your
                recommendation below, I read every submission!
              </p>
            </div>

            <form
              action="https://formspree.io/f/mzdldeoy"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium">
                  What are you recommending?
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Book, movie, website, game, app..."
                  required
                  className="w-full rounded-xl border border-gray-800 px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Why should I check it out?
                </label>
                <textarea
                  name="reason"
                  rows={6}
                  placeholder="Tell me what makes it special..."
                  required
                  className="w-full rounded-xl border border-gray-800 px-4 py-3 outline-none focus:ring-2 resize-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="So I know who to thank:)"
                  required
                  className="w-full rounded-xl border border-gray-800 px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-black text-white py-3 font-medium hover:opacity-90 transition"
              >
                Send Recommendation
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
