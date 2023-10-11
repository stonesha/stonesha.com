import Link from "next/link";
import Image from "next/image";

export default function Avatar() {
  // 5:4 ratio
  return (
    <Link href="/" aria-label="Home" className="pointer-events-auto relative">
      <Image
        width={50}
        height={40}
        src="/profile.png"
        alt="morris profile pic :3"
        className="rounded-b-full object-cover h-auto w-auto border-b-2 border-b-transparent hover:border-b-teal-300 transition"
        priority
      />
    </Link>
  );
}
