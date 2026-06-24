"use client";

import Image from "next/image";
import { Special_Elite } from "next/font/google";
import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] ${specialElite.className} pb-10`}
    >
      <Header title="Balaji's Blog" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-28">
          <SidebarFullScreen />

          <main className="text-lg leading-8 flex-1">
            <div className="max-w-120 mx-auto mb-10">
              <Image
                src="/images/sample.png"
                alt="ASCII art"
                loading="eager"
                width={480}
                height={480}
                className="w-full h-auto rounded"
              />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              recusandae error obcaecati distinctio praesentium rerum voluptas
              laborum cumque qui dicta, laudantium, doloremque placeat autem
              asperiores quia molestiae eum similique soluta.
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              inventore ab, magni, accusamus consequatur at provident adipisci
              aperiam dignissimos quae recusandae, dolor sunt asperiores
              similique omnis necessitatibus blanditiis voluptates rerum
              expedita quas maxime soluta natus. Officia incidunt similique
              atque delectus veritatis rem ducimus, dolore ad repellendus,
              eligendi sequi vero aliquid!
            </p>

            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              inventore ab, magni, accusamus consequatur at provident adipisci
              aperiam dignissimos quae recusandae, dolor sunt asperiores
              similique omnis necessitatibus blanditiis voluptates rerum
              expedita quas maxime soluta natus. Officia incidunt similique
              atque delectus veritatis rem ducimus, dolore ad repellendus,
              eligendi sequi vero aliquid!
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
