import Image from "next/image";
import Link from "next/link";

export default function Greeting() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-orange-400 text-white p-24">
      <div className="flex justify-between w-full border-b-2 border-b-black p-2">
        <h1 className="text-5xl font-bold">Planner</h1>
        <nav className="flex justify-end gap-4">
          <Link
            href="/authorization/login"
            className="border-2 border-red-50 bg-white text-orange-400 font-semibold transition-all hover:text-orange-500 hover:bg-orange-50 flex items-center justify-center px-4 rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/authorization/signup"
            className="border-2 border-red-50 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center justify-center px-4 rounded-lg"
          >
            Sign up
          </Link>
        </nav>
      </div>
      <div className="flex flex-col p-10 rounded-2xl items-center bg-white text-black mt-8 gap-6">
        <h2 className="text-5xl font-bold">Hello, dear friend!</h2>
        <span className="text-5xl">👋🏻</span>
        <p className="text-2xl w-[90%] text-center">
          We are happy that you have decided to add a planner to your life and
          that you chose our planner to help you!
        </p>
        <p className="text-2xl font-bold">Let&apos;s start</p>
        <Link
          href={"authorization/signup"}
          className="px-4 py-2 border-[1px] border-transparent bg-orange-400 hover:bg-orange-500 hover:border-[1px] hover:border-white focus:border-white focus:outline-none text-white rounded-lg text-2xl w-36 h-16 items-center justify-center flex"
        >
          Start
        </Link>
      </div>
    </main>
  );
}
