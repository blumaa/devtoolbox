import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Color Palette Generator - Generate Random Color Palettes | DevToolbox",
  description: "Generate beautiful random color palettes with hex codes instantly. Free online color palette generator for designers and developers. Copy colors with one click.",
  keywords: "color palette generator, random color palette, hex color generator, color scheme generator, free color tool, UI colors",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Color Palette Generator" description="Generate random color palettes with hex codes. Free online tool." url="https://devtoolbox-delta.vercel.app/color-palette" category="DesignApplication" /></>;
}
