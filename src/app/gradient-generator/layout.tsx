import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free CSS Gradient Generator - Create Beautiful Gradients | DevToolbox",
  description: "Create stunning CSS gradients with a visual picker. Generate linear and radial gradients, copy CSS code instantly. Free online gradient generator for web developers.",
  keywords: "CSS gradient generator, linear gradient, radial gradient, gradient maker, CSS gradient tool, free gradient generator",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="CSS Gradient Generator" description="Create CSS gradients with a visual picker. Copy CSS instantly." url="https://devtoolbox-delta.vercel.app/gradient-generator" category="DesignApplication" /></>;
}
