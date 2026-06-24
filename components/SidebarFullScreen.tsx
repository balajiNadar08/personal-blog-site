import Link from "next/link";

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

const SidebarFullScreen = () => {
  return (
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
  );
};

export default SidebarFullScreen;
