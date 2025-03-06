// src/components/Title.tsx
import { montserrat } from "@/style/font";

export default function Title({ text }: { text: string }) {
  return <h1 className={`${montserrat.className} text-4xl font-bold text-blue-600`}>{text}</h1>;
}
