"use client";

import Image from "next/image";
import Link from "next/link";
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

          <main className="flex-1">
            <section className="mb-12 grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h1 className="mb-4 text-5xl font-bold">
                  Hey there, I'm Balaji Nadar.
                </h1>

                <p className="text-lg leading-8">
                  Welcome to my corner of the internet. This is where I share
                  about the things I build, learn, watch, read and occasionally
                  overthink.
                </p>

                <p className="mt-4 text-lg leading-8">
                  I'm a 3rd year CS student from Mumbai, India.
                </p>
              </div>

              <div className="md:col-span-2">
                <Image
                  src="/images/sample.png"
                  alt="Image of my back"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            </section>

            <section className="text-lg leading-8">
              <p>
                I like programming and I like to keep myself busy with software
                projects. While software development is my main interest, I've
                also gotten my hands dirty with a few IoT projects. I love
                working on projects that turn ideas that I love into something
                real, whether that's a website, an app or hardware device.
              </p>

              <p className="mt-6">
                When I'm not coding, you'll probably find me watching movies,
                reading books or following almost any sport that you can think.
                Checkout my blogs to know what I'm working on :)
              </p>
            </section>

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
