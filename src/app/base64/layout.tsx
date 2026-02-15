import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Base64 Encoder & Decoder Online - Encode/Decode Strings | DevToolbox",
  description: "Encode and decode Base64 strings instantly in your browser. Free online Base64 tool for developers. Decode JWT tokens, data URIs, and API payloads privately.",
  keywords: "Base64 encoder, Base64 decoder, encode Base64 online, decode Base64, free Base64 tool, JWT decoder",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Base64 Encoder/Decoder" description="Encode and decode Base64 strings online for free. Client-side processing." url="https://devtoolbox-delta.vercel.app/base64" category="DeveloperApplication" /></>;
}
