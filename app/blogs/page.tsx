import { Lato, Special_Elite } from "next/font/google";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import SidebarFullScreen from "@/components/SidebarFullScreen";
import { getAllBlogs } from "@/lib/blogs";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div
      className={`min-h-screen bg-[#F3E4C9] ${specialElite.className} pb-10`}
    >
      <Header title="Balaji's Blogs" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-28">
          <SidebarFullScreen />

          <div className="flex-1 flex-col gap-4">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold">
                Know What's Going On in My Life
              </h1>

              <p className="text-lg">
                Projects I'm building, things I'm learning, books I'm reading
                and thoughts worth sharing.
              </p>
            </div>

            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                coverImage={blog.coverImage}
                tags={blog.tags}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
