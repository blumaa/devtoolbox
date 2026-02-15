import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Online Image Compressor - Compress Images in Browser | DevToolbox",
  description: "Compress images client-side in your browser with no upload required. Reduce image file sizes by up to 80% while maintaining quality. Free, private image compression.",
  keywords: "image compressor, compress images online, reduce image size, image optimizer, free image compression, client-side compressor",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Image Compressor" description="Compress images client-side in your browser. No upload needed. Free online tool." url="https://devtoolbox-delta.vercel.app/image-compressor" category="MultimediaApplication" /></>;
}
