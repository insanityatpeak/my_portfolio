'use client';

import { useLeetCodeStats } from '@/lib/leetcode';

export default function LeetCodeStats() {
  const { stats, isLoading, isError } = useLeetCodeStats();

  if (isLoading) {
    // Single pulsing skeleton — one animation, not three staggered ones
    return (
      <div className="border border-green-neon/15 p-4 max-w-lg w-full h-[76px] flex items-center justify-center rounded-sm bg-card/50 animate-pulse">
        <div className="flex gap-3">
          <div className="w-16 h-5 rounded-sm bg-green-neon/15" />
          <div className="w-16 h-5 rounded-sm bg-yellow-400/15" />
          <div className="w-16 h-5 rounded-sm bg-red-400/15" />
          <div className="w-16 h-5 rounded-sm bg-white/10" />
        </div>
      </div>
    );
  }

  if (isError || !stats) {
    return (
      <div className="border border-green-neon/10 p-4 max-w-lg w-full h-[76px] flex items-center justify-center font-mono text-muted text-xs rounded-sm">
        {"// leetcode stats unavailable"}
      </div>
    );
  }

  const statItems = [
    { label: 'Total', value: stats.totalSolved,  color: 'text-white' },
    { label: 'Easy',  value: stats.easySolved,   color: 'text-green-neon' },
    { label: 'Med',   value: stats.mediumSolved,  color: 'text-yellow-400' },
    { label: 'Hard',  value: stats.hardSolved,    color: 'text-red-400' },
  ];

  return (
    <div className="border border-green-neon/15 p-4 max-w-lg w-full flex flex-col items-center gap-3 bg-card/60 shadow-level2 rounded-sm transition-shadow duration-[250ms] ease-expo hover:shadow-neon-green">
      <div className="grid grid-cols-4 w-full divide-x divide-green-neon/10">
        {statItems.map(({ label, value, color }) => (
          <div key={label} className="flex flex-col items-center justify-center py-1">
            <span className={`text-lg font-bold font-mono tracking-tight ${color}`}>{value}</span>
            <span className="text-[10px] text-muted font-mono uppercase tracking-widest mt-0.5">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full px-2 text-[10px] font-mono text-cyan-accent/70 pt-2 border-t border-green-neon/[0.08]">
        <span>&gt; rank: {stats.ranking.toLocaleString()}</span>
        <span>&gt; acc: {stats.acceptanceRate}%</span>
      </div>
    </div>
  );
}
