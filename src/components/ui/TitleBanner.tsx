// src/components/Title.tsx
import { montserrat } from "@/style/font";

export default function Title({ text }: { text: string }) {
  return <h1 className={`${montserrat.className} text-4xl font-bold text-white drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] z-10 w-[80%] `}>{text}</h1>;
}
