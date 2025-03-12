// src/app/dashboard/layout.tsx
'use client'
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white overflow-y-auto">{children}</main>
    </div>
  );
}