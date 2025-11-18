import React from "react";
import { ExternalLink, Shield, Zap, Globe2, Sparkles } from "lucide-react";

export default function BrowserViewport({ url }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden shadow-[0_10px_60px_rgba(2,8,23,0.6)]">
      {/* Top chrome */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-300/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-300/80" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <Shield size={12} className="text-emerald-300" />
          Protected sandbox
        </div>
        <button className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1">
          Open <ExternalLink size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_200px_at_80%_90%,rgba(99,102,241,0.12),transparent)]" />

        <div className="relative p-8">
          {/* Hero */}
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs mb-4">
              <Sparkles className="text-cyan-300" size={14} /> Ultra Browser Prototype
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Browse at the speed of imagination
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              A concept browser focused on clarity, flow, and delight. Minimal chrome, maximal content, and immersive motion.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow hover:shadow-cyan-500/20">
                Start exploring
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10">
                Watch demo
              </button>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Globe2 className="text-sky-300" size={18} />,
                title: "Focused Mode",
                desc: "Dramatically reduced chrome. Your content takes the stage with a cinematic reading experience.",
              },
              {
                icon: <Zap className="text-amber-300" size={18} />,
                title: "Fluid Performance",
                desc: "GPU-accelerated transitions and buttery gestures keep you in flow at all times.",
              },
              {
                icon: <Shield className="text-emerald-300" size={18} />,
                title: "Privacy First",
                desc: "Built-in protections with clear, human-centered controls and zero dark patterns.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="relative p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-200"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(200px_80px_at_10%_10%,rgba(56,189,248,0.15),transparent)]" />
                <div className="relative flex items-start gap-3">
                  <div className="shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{f.title}</div>
                    <div className="text-sm text-slate-300/90">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
