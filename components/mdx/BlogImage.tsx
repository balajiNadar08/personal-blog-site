import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function BlogImage({
  src,
  alt,
  caption,
}: BlogImageProps) {
  return (
    <figure className="my-12">
      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={800}
          className="w-full transition duration-300 hover:scale-[1.02]"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-sm italic text-black/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}