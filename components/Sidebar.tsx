import Link from "next/link";
import { X, Mail } from "lucide-react";
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
    href: "https://github.com/balajinadar08/",
    label: "github"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/balaji_nadar_08/",
    label: "instagram"
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/balaji-nadar-828b41354/",
    label: "linkedin"
  },
  {
    icon: Mail,
    href: "mailto:balaji17nadar@gmail.com",
    label: "email"
  },
];

type SidebarProps = {
  onClose: () => void;
};

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F3E4C9] px-6 py-10 md:hidden animate-in slide-in-from-left">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold">Balaji Nadar</h2>

        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <nav className="flex-1">
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
        <div className="flex flex-col gap-2 pt-12 text-black/80">
          <p>My Socials:</p>
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:-translate-y-0.5"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
