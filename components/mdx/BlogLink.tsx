import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type BlogLinkProps = ComponentProps<"a"> & {
  href: string;
};

export default function BlogLink({ href, children, ...props }: BlogLinkProps) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-medium text-blue-700 underline underline-offset-4 transition hover:text-blue-500"
      {...props}
    >
      {children}
      {isExternal && <ArrowUpRight size={16} />}
    </a>
  );
}
