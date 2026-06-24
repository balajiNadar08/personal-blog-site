import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Movie = {
  title: string;
  poster: string;
  rating: number;
  comment: string;
  watched: string;
  slug: string;
};

export function getAllMovies(): Movie[] {
  const moviesDir = path.join(process.cwd(), "content/movies");

  const files = fs.readdirSync(moviesDir);

  return files.map((file) => {
    const source = fs.readFileSync(path.join(moviesDir, file), "utf8");

    const { data } = matter(source);

    return {
      title: data.title,
      poster: data.poster,
      rating: data.rating,
      comment: data.comment,
      watched: data.watched,
      slug: data.slug,
    };
  });
}
