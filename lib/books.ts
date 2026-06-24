import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Book = {
  title: string;
  cover: string;
  rating: number;
  comment: string;
  read: string;
  slug: string;
};

export function getAllBooks(): Book[] {
  const booksDir = path.join(process.cwd(), "content/books");

  const files = fs.readdirSync(booksDir);

  return files.map((file) => {
    const source = fs.readFileSync(
      path.join(booksDir, file),
      "utf8"
    );

    const { data } = matter(source);

    return {
      title: data.title,
      cover: data.cover,
      rating: data.rating,
      comment: data.comment,
      read: data.read,
      slug: data.slug,
    };
  });
}