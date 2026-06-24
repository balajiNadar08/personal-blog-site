import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export type Blog = {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  slug: string;
};

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const filePath = path.join(blogsDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      coverImage: data.coverImage,
      tags: data.tags,
      slug,
    };
  });
}