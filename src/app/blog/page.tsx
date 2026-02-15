import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Blog - Tips, Guides & Tool Reviews | DevToolbox",
  description: "Read guides on JSON formatting, regex testing, and the best free developer tools available online in 2026.",
  keywords: "developer blog, programming tips, free developer tools, JSON formatter guide, regex tutorial",
};

const posts = [
  {
    slug: "best-free-online-json-formatter-and-validator",
    title: "Best Free Online JSON Formatter and Validator",
    excerpt: "Discover why a reliable JSON formatter is essential for every developer and how to validate JSON data instantly in your browser.",
    date: "2026-02-15",
  },
  {
    slug: "how-to-test-regular-expressions-online",
    title: "How to Test Regular Expressions Online",
    excerpt: "Learn the best practices for testing regex patterns online with live matching, group highlighting, and real-time feedback.",
    date: "2026-02-14",
  },
  {
    slug: "free-developer-tools-you-need-in-2026",
    title: "Free Developer Tools You Need in 2026",
    excerpt: "A roundup of the most useful free online developer tools that will boost your productivity in 2026 and beyond.",
    date: "2026-02-13",
  },
];

export default function BlogIndex() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Developer Blog
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tips, tutorials, and guides for developers.
        </p>
      </div>
      <div className="space-y-6 max-w-3xl mx-auto">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 hover:bg-gray-900 transition-all"
          >
            <time className="text-sm text-gray-500">{p.date}</time>
            <h2 className="text-xl font-semibold mt-1 mb-2 group-hover:text-purple-400">{p.title}</h2>
            <p className="text-gray-400 text-sm">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
