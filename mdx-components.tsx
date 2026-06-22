import type { MDXComponents } from "mdx/types";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl font-bold mb-6" {...props} />
    ),

    h2: (props) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
    ),

    p: (props) => (
      <p className="leading-8 text-gray-700 mb-5" {...props} />
    ),

    ...components,
  };
}