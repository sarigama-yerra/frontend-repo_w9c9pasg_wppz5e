import React, { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import Omnibar from "./components/Omnibar";
import BrowserViewport from "./components/BrowserViewport";
import { Globe } from "lucide-react";

function createTab(title) {
  return {
    id: crypto.randomUUID(),
    title,
    icon: <Globe size={10} />,
    url: "https://example.com",
  };
}

export default function App() {
  const [tabs, setTabs] = useState(() => [
    createTab("Welcome"),
    createTab("Design Lab"),
  ]);
  const [active, setActive] = useState(0);
  const [input, setInput] = useState("");

  const activeTab = tabs[active];

  const handleNewTab = () => {
    const next = [...tabs, createTab("New Tab")];
    setTabs(next);
    setActive(next.length - 1);
    setInput("");
  };

  const handleClose = (index) => {
    if (tabs.length === 1) return; // keep at least one tab
    const next = tabs.filter((_, i) => i !== index);
    setTabs(next);
    if (active >= next.length) setActive(next.length - 1);
  };

  const handleSubmit = () => {
    // Basic parse: if input looks like a URL, use it; else search
    if (!input) return;
    const looksLikeUrl = /\./.test(input) || input.startsWith("http");
    const finalUrl = looksLikeUrl
      ? input.startsWith("http")
        ? input
        : `https://${input}`
      : `https://www.google.com/search?q=${encodeURIComponent(input)}`;

    setTabs((prev) =>
      prev.map((t, i) => (i === active ? { ...t, title: input, url: finalUrl } : t))
    );
    setInput("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient gradient field */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl bg-cyan-500/20" />
        <div className="absolute top-40 right-0 h-[520px] w-[520px] rounded-full blur-3xl bg-indigo-500/20" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl bg-blue-400/10" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex min-h-screen bg-slate-950/40 text-slate-100">
        <Sidebar />

        <main className="flex-1 flex flex-col gap-4 p-3 sm:p-6">
          {/* Top controls */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_10px_60px_rgba(2,8,23,0.6)]">
            <TabBar
              tabs={tabs}
              activeIndex={active}
              onActivate={setActive}
              onNewTab={handleNewTab}
              onClose={handleClose}
            />
            <div className="px-3 sm:px-4 pb-3">
              <Omnibar value={input} onChange={setInput} onSubmit={handleSubmit} />
            </div>
          </div>

          {/* Viewport */}
          <div className="flex-1">
            <BrowserViewport url={activeTab?.url} />
          </div>

          {/* Bottom status bar */}
          <div className="text-xs text-slate-300/70 flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl border border-white/10 bg-slate-900/40">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live preview
            </div>
            <div className="hidden sm:block">Ultra concept browser • Crafted for focus and flow</div>
            <div className="opacity-70">v0.1</div>
          </div>
        </main>
      </div>
    </div>
  );
}
