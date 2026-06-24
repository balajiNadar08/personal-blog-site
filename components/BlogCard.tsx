import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  slug: string;
};

const BlogCard = ({
  title,
  description,
  date,
  coverImage,
  tags,
  slug,
}: BlogCardProps) => {
  return (
    <Link href={`/blogs/${slug}`} className="block w-full">
      <article className="flex flex-col md:flex-row gap-6 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

        
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">{date}</p>

          <h2 className="text-2xl font-bold mb-3">{title}</h2>

          <p className="text-gray-600 line-clamp-3 mb-5">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-video w-full md:w-75 overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
