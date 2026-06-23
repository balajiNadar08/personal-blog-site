import Link from "next/link";
import { X } from "lucide-react";

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

type SidebarProps = {
  onClose: () => void;
};

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#F3E4C9] px-6 py-10 md:hidden animate-in slide-in-from-left">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold">Balaji Nadar</h2>

        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <nav className="mt-4">
        <ul className="flex flex-col gap-6">
          {routes.map((route) => (
            <li key={route.title}>
              <Link
                href={route.link}
                className="text-2xl font-medium hover:underline"
                onClick={onClose}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
