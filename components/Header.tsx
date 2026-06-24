"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const Header = ({title}: { title: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-2 px-6 py-10">
        <h1 className="text-3xl font-bold">{title}</h1>

        <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
    </>
  )
}

export default Header
