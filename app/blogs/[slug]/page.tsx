import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import SidebarFullScreen from "@/components/SidebarFullScreen";
import Header from "@/components/Header";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { Lato, Special_Elite } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
  coverImage?: string;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);

  const source = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<Frontmatter>({
  source,
  options: {
    parseFrontmatter: true,
  },
  components: mdxComponents,
});

  const readingTime = Math.ceil(source.split(/\s+/).length / 200);

  return (
    <div className={`min-h-screen bg-[#F3E4C9] ${specialElite.className} pb-10`}>
      <Header title="Balaji's Blog" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-28">
          <SidebarFullScreen />

          <main className="flex-1 max-w-3xl pb-20">
            <article className="space-y-8">
              <header className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-black/5 text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-black leading-tight text-[#1A1A1A]">
                  {frontmatter.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-black/60">
                  <span>{frontmatter.date}</span>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>

                <div className="h-px bg-black/10" />
              </header>

              {frontmatter.coverImage && (
                <img
                  src={frontmatter.coverImage}
                  alt={frontmatter.title}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              )}

              <section
  className="
    max-w-none
  "
>
                {content}
              </section>

              <footer className="pt-10 border-t border-black/10">
                <p className="text-sm text-black/50">Thanks for reading.</p>
              </footer>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
