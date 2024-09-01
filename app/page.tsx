import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home</p>
      <nav className="flex justify-evenly w-full">
        <Link href="/authorization/login">Login</Link>
        <Link href="/authorization/signup">Sign up</Link>
      </nav>
    </main>
  );
}
