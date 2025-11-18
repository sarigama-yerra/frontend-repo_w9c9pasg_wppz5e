import React from "react";
import { Plus, X, Globe, Sparkles } from "lucide-react";

function Tab({ tab, isActive, onActivate, onClose }) {
  return (
    <button
      onClick={onActivate}
      className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 ${
        isActive
          ? "bg-slate-800/70 border-slate-700 text-white shadow-[0_8px_30px_rgb(2,6,23,0.35)]"
          : "bg-slate-800/30 hover:bg-slate-800/50 border-slate-700/50 text-slate-300"
      }`}
    >
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 text-[10px] text-white">
        {tab.icon || <Globe size={10} />}
      </span>
      <span className="text-sm truncate max-w-[140px]">
        {tab.title || "New Tab"}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="opacity-60 group-hover:opacity-100 hover:text-red-300 transition-opacity"
      >
        <X size={14} />
      </span>
    </button>
  );
}

export default function TabBar({ tabs, activeIndex, onActivate, onNewTab, onClose }) {
  return (
    <div className="flex items-center gap-2 px-2 py-2 overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-2">
        {tabs.map((t, i) => (
          <Tab
            key={t.id}
            tab={t}
            isActive={i === activeIndex}
            onActivate={() => onActivate(i)}
            onClose={() => onClose(i)}
          />
        ))}
      </div>
      <button
        onClick={onNewTab}
        className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/70 text-slate-200 transition-all"
      >
        <Plus size={16} />
        <span className="hidden sm:block text-sm">New tab</span>
      </button>
      <div className="ml-auto hidden md:flex items-center gap-1 text-xs text-slate-300/70">
        <Sparkles size={14} className="text-cyan-300" />
        Ultra UI
      </div>
    </div>
  );
}
