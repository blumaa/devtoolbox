import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Meta Tag Generator - Generate SEO & Open Graph Tags | DevToolbox",
  description: "Generate HTML meta tags for SEO, Open Graph, and Twitter Cards. Free online meta tag generator with live preview. Improve your site's search visibility.",
  keywords: "meta tag generator, SEO meta tags, Open Graph generator, Twitter Card tags, HTML meta tags, free SEO tool",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Meta Tag Generator" description="Generate HTML meta tags for SEO and social sharing. Free online tool." url="https://devtoolbox-delta.vercel.app/meta-tag-generator" category="DeveloperApplication" /></>;
}
