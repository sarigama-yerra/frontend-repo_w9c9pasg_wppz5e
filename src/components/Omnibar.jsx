import React from "react";
import { ArrowRight, Search, ShieldCheck, Mic, ScanLine } from "lucide-react";

export default function Omnibar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="group relative flex items-center gap-2 w-full rounded-2xl bg-slate-900/70 border border-slate-700/70 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.05),0_10px_40px_rgba(0,0,0,0.35)] px-4 py-3"
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute -inset-px rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 bg-[radial-gradient(120px_40px_at_20%_20%,rgba(56,189,248,0.25),transparent),radial-gradient(120px_40px_at_80%_80%,rgba(99,102,241,0.25),transparent)]" />
      </div>

      <ScanLine size={18} className="text-cyan-300/80" />

      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Type a URL or search the web..."
        className="flex-1 bg-transparent outline-none text-slate-100 placeholder:text-slate-400/60"
      />

      <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
        <ShieldCheck size={16} className="text-emerald-300" /> Secure
      </div>

      <button
        type="submit"
        className="ml-2 inline-flex items-center gap-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white px-3 py-1.5 rounded-xl shadow hover:shadow-cyan-500/20 active:scale-[0.98] transition"
      >
        <Search size={16} />
        <span className="hidden sm:block">Go</span>
        <ArrowRight size={16} className="hidden sm:block" />
      </button>

      <button
        type="button"
        className="ml-1 p-2 rounded-xl hover:bg-white/5 text-slate-300"
        aria-label="Voice search"
      >
        <Mic size={16} />
      </button>
    </form>
  );
}
