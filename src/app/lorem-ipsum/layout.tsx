import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Lorem Ipsum Generator - Generate Placeholder Text | DevToolbox",
  description: "Generate lorem ipsum placeholder text for your designs and prototypes. Choose paragraph count and copy instantly. Free online lorem ipsum generator.",
  keywords: "lorem ipsum generator, placeholder text, dummy text generator, free lorem ipsum, design placeholder text",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Lorem Ipsum Generator" description="Generate placeholder lorem ipsum text for designs. Free online tool." url="https://devtoolbox-delta.vercel.app/lorem-ipsum" category="DeveloperApplication" /></>;
}
