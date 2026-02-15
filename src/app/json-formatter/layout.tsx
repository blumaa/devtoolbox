import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Online JSON Formatter & Validator - Format, Validate, Minify JSON | DevToolbox",
  description: "Format, validate, and minify JSON data instantly in your browser. Free online JSON formatter with syntax highlighting and error detection. No data sent to servers.",
  keywords: "JSON formatter, JSON validator, format JSON online, minify JSON, JSON beautifier, validate JSON syntax, free JSON tool",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="JSON Formatter & Validator" description="Format, validate, and minify JSON data online for free. 100% client-side processing." url="https://devtoolbox-delta.vercel.app/json-formatter" category="DeveloperApplication" /></>;
}
