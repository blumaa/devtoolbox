import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Online Markdown Preview - Side-by-Side Editor & Preview | DevToolbox",
  description: "Write and preview Markdown in real-time with a side-by-side editor. Free online Markdown preview tool for README files, docs, and blog posts.",
  keywords: "markdown preview, markdown editor online, markdown renderer, free markdown tool, README editor, markdown to HTML",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Markdown Preview" description="Side-by-side Markdown editor and preview. Free online tool." url="https://devtoolbox-delta.vercel.app/markdown-preview" category="DeveloperApplication" /></>;
}
