import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-orange-400 text-white p-24">
      <div className="flex justify-between w-full border-b-2 border-b-black">
        <h1>Planner</h1>
        <nav className="flex justify-end gap-4 ">
          <Link href="/authorization/login">Login</Link>
          <Link href="/authorization/signup">Sign up</Link>
        </nav>
      </div>
      <h2>Hello, dear friend!</h2>
      <span>👋🏻</span>
      <p>
        We are happy that you have decided to add a planner to your life and
        that you chose our planner to help you
      </p>
      <p>Let&apos;s start</p>
      <Link href={"authorization/signup"}>Start</Link>
    </main>
  );
}
