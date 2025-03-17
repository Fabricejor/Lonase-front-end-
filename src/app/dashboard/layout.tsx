// src/app/dashboard/layout.tsx
'use client'
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 pt-1 px-4 rounded-2xl bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
}