import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const routes = [
  { title: "About", link: "/" },
  { title: "Blogs", link: "/blogs" },
  { title: "Music", link: "/music" },
  { title: "Movies", link: "/movies" },
  { title: "Books", link: "/books" },
  { title: "Recommend", link: "/recommend" },
  { title: "Newsletter", link: "/newsletter" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/balajinadar08",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:balaji17nadar@gmail.com",
    label: "Email",
  },
];

const SidebarFullScreen = () => {
  return (
    <nav className="hidden md:flex flex-col justify-between min-h-[80vh]">
      <div>
        <ul className="flex flex-col gap-2">
          {routes.map((route) => (
            <li key={route.title}>
              <Link href={route.link} className="text-lg hover:underline">
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 pt-12 text-black/80">
          <p>My Socials:</p>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition hover:text-black hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarFullScreen;
