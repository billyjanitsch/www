import { Metadata } from "next";
import Image from "next/image";
import cider from "./cider.png";

export const metadata: Metadata = {
  title: "Billy Janitsch",
  description: "Billy Janitsch on the world wide web",
  openGraph: {
    title: "Billy Janitsch",
    description: "Billy Janitsch on the world wide web",
    siteName: "Billy Janitsch",
    url: "https://www.billyjanitsch.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billy Janitsch",
    description: "Billy Janitsch on the world wide web",
  },
};

export default function HomePage() {
  return (
    <main>
      <Image
        className="max-w-screen max-h-screen object-contain"
        src={cider}
        alt="Billy Janitsch"
      />
    </main>
  );
}
