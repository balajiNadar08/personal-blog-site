import Image from "next/image";
import BlogImage from "./BlogImage";
import BlogLink from "./BlogLink";

type AnchorProps = React.ComponentProps<"a">;

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-5xl font-black mt-14 mb-6 text-[#1A1A1A]" {...props} />
  ),

  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-4xl font-bold mt-12 mb-5 text-[#1A1A1A]" {...props} />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-3xl font-bold mt-10 mb-4 text-[#1A1A1A]" {...props} />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-xl leading-10 text-black/80 mb-6" {...props} />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ml-8 space-y-3 text-xl" {...props} />
  ),

  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-8 space-y-3 text-xl" {...props} />
  ),

  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-xl text-black/80" {...props} />
  ),

  img: (props: any) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={1200}
      height={700}
      className="rounded-3xl shadow-lg my-10"
    />
  ),

  a: ({ href = "", children, ...props }: AnchorProps) => (
  <BlogLink href={href} {...props}>
    {children}
  </BlogLink>
),

  BlogLink,
  BlogImage,
};
