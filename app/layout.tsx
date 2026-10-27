import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack JavaScript Developer | Portfolio",
  description: "A portfolio for a Full-Stack JavaScript Developer building connected web and mobile applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
