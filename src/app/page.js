import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-5 mt-3">
      <h1>Welcome to next level fetch api</h1>
      <Link
        href={"/posts"}
        className="border py-1 px-3 mt-3 inline-block rounded-md hover:bg-white hover:text-black"
      >
        Posts
      </Link>
    </div>
  );
}
