import Image from "next/image";
import cider from "./cider.png";

export default function HomePage() {
  return (
    <main>
      <Image
        className="max-w-screen max-h-screen object-contain"
        src={cider}
        alt="Billy Janitsch"
        quality={95}
      />
    </main>
  );
}
