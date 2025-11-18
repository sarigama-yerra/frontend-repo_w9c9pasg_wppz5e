import React from "react";
import { Home, Star, Clock, Settings, Folder, Flame, Bookmark, History } from "lucide-react";

const Item = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
      active
        ? "bg-white/5 text-white"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-16 sm:w-60 shrink-0 p-3 sm:p-4 bg-slate-900/40 border-r border-white/5 backdrop-blur-md">
      <div className="hidden sm:flex items-center gap-2 px-2 py-1.5 text-white/90 font-semibold">
        <Flame className="text-orange-400" size={18} />
        Ultra
      </div>

      <nav className="mt-3 space-y-1">
        <Item icon={Home} label="Home" active />
        <Item icon={Star} label="Favorites" />
        <Item icon={Bookmark} label="Collections" />
        <Item icon={Clock} label="Recents" />
      </nav>

      <div className="mt-6 hidden sm:block">
        <div className="text-xs text-slate-400 px-2 mb-2">Workspaces</div>
        <div className="space-y-1">
          {"alpha,beta,design,research".split(",").map((n) => (
            <div key={n} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-slate-200">
              <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500" />
              <span className="text-sm capitalize">{n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto hidden sm:block">
        <div className="h-px bg-white/10 my-3" />
        <Item icon={Settings} label="Settings" />
        <Item icon={History} label="History" />
      </div>
    </aside>
  );
}
