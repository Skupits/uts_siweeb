"use client";


import { users } from "@/app/lib/placeholder-data";

export default function DashboardHeader() {
  if (!users) return null; 

  return (
    <header className="bg-green-900 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-end gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            
          </div>
          <span className="text-lg font-semibold">{users.name}</span>
        </div>
      </div>
    </header>
  );
}
