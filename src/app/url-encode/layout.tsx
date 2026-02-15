import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free URL Encoder & Decoder Online - Encode/Decode URL Components | DevToolbox",
  description: "Encode and decode URL components instantly. Free online URL encoding tool for query parameters, redirect URIs, and special characters. No server processing.",
  keywords: "URL encoder, URL decoder, encode URL online, decode URL, percent encoding, URI encoder, free URL tool",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="URL Encoder/Decoder" description="Encode and decode URL components online for free." url="https://devtoolbox-delta.vercel.app/url-encode" category="DeveloperApplication" /></>;
}
