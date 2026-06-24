import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Song = {
  title: string;
  artist: string;
  cover: string;
  url: string;
  slug: string;
};

export function getAllSongs(): Song[] {
  const songsDirectory = path.join(process.cwd(), "content/music");
  return fs
    .readdirSync(songsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(songsDirectory, file), "utf8");
      const { data } = matter(source);
      return {
        title: data.title,
        artist: data.artist,
        cover: data.cover,
        url: data.url,
        slug: file.replace(".mdx", ""),
      };
    });
}
