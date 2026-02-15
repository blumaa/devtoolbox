import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Free Online Regex Tester - Test Regular Expressions with Live Matching | DevToolbox",
  description: "Test regular expressions online with real-time matching and group highlighting. Free regex tester for JavaScript patterns. Debug and validate regex instantly.",
  keywords: "regex tester, regular expression tester, test regex online, regex debugger, JavaScript regex, regex validator, free regex tool",
};
export default function L({ children }: { children: React.ReactNode }) {
  return <>{children}<JsonLd name="Regex Tester" description="Test regular expressions with live matching and group highlighting. Free online tool." url="https://devtoolbox-delta.vercel.app/regex-tester" category="DeveloperApplication" /></>;
}
