"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Link href={'/Login'} className="bg-purple-600  p-2 rounded">Login page</Link>            
    </div>
  );
}
