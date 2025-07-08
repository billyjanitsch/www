import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billy Janitsch",
  description: "Billy Janitsch on the world wide web",
  openGraph: {
    title: "Billy Janitsch",
    description: "Billy Janitsch on the world wide web",
    siteName: "Billy Janitsch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billy Janitsch",
    description: "Billy Janitsch on the world wide web",
  },
};

interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
