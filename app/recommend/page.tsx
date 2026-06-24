import { Lato } from "next/font/google";
import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const page = () => {
  return (
    <div className={`min-h-screen bg-[#F3E4C9] ${lato.className} pb-10`}>
      <Header title="Recommend Balaji" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-28">
          <SidebarFullScreen />

          <main>
            <h1>Recommend me anything</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
