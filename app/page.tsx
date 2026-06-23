"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Lato } from "next/font/google";
import { title } from "process";

const routes = [
  { title: "About", link: "/" },
  { title: "Blogs", link: "/blogs" },
  { title: "Projects", link: "/projects" },
  { title: "Music", link: "/music" },
  { title: "Movies", link: "/movies" },
  { title: "Books", link: "/books" },
  { title: "Recommend", link: "/recommend" },
  { title: "Newsletter", link: "/newsletter" },
];

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F3E4C9] ${lato.className}`}>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold">Balaji's Blog</h1>

          <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-28">
          <nav className="hidden md:block">
            <ul className="flex flex-col gap-2">
              {routes.map((route) => (
                <li key={route.title}>
                  <Link href={route.link} className="text-lg hover:underline">
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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
          </main>
        </div>
      </div>
    </div>
  );
}
