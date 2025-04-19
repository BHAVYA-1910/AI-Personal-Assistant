"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router=useRouter();

  const handleGetSatrted=()=>{
      router.push('/sign-in')
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="AI Genius logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-extrabold text-black dark:text-white text-lg select-none">
            Genie AI
          </span>
        </div>
        <Button onClick={handleGetSatrted} className="bg-black dark:bg-white text-white dark:text-black text-sm font-semibold px-4 py-2 rounded-md 
        hover:bg-gray-900 dark:hover:bg-gray-200 transition cursor-pointer">
          Get Started
        </Button>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-4 sm:px-6 lg:px-8">
        {/* Announcement pill */}
        <a
          className="flex items-center space-x-2 border border-purple-300 dark:border-purple-500/30 rounded-full px-4 py-1 
          text-purple-600 dark:text-purple-400 text-xs font-medium max-w-max mb-6 select-none 
          hover:bg-purple-50 dark:hover:bg-purple-900/20 transition mt-10"
        >
          <span className="text-xl leading-none">🪄</span>
          <span>Introducing Personal AI Assistant</span>
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-purple-600 dark:text-purple-400"
            fill="none"
            // stroke="currentColor"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            // strokeWidth={2}
            // viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center max-w-6xl leading-tight" style={{ lineHeight: 1.1 }}>
          <span className="text-black dark:text-white select-text">Your Personal </span>
          <span className="font-extrabold bg-gradient-to-r from-[#7eaaff] via-[#ff6a6a] to-[#b96aff] dark:from-[#5e8cff] 
          dark:via-[#ff4f4f] dark:to-[#a855ff] bg-clip-text text-transparent select-text">
              AI Assistance
          </span>
        </h1>

        {/* Get Started button */}
        <Button onClick={handleGetSatrted} className="mt-6 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold px-5 py-2 rounded-md 
        hover:bg-gray-900 dark:hover:bg-gray-200 transition select-none cursor-pointer">
          Get Started
        </Button>

        {/* Central image */}
        <div className="mt-10 max-w-[900px] w-full rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden 
        select-none bg-gray-50 dark:bg-gray-800">
          <Image
            src="https://storage.googleapis.com/a1aa/image/676389a8-beec-424b-a77f-3e6e63f43d66.jpg"
            alt="AI assistant interface"
            width={900}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}