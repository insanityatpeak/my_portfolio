'use client';

import { useLeetCodeStats } from '@/lib/leetcode';

export default function LeetCodeStats() {
  const { stats, isLoading, isError } = useLeetCodeStats();

  if (isLoading) {
    return (
      <div className="border border-green-neon/20 p-4 max-w-lg w-full flex justify-center items-center h-[120px]">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-green-neon/20 animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-yellow-400/20 animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="w-8 h-8 rounded-full bg-red-400/20 animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    );
  }

  if (isError || !stats) {
    return (
      <div className="border border-green-neon/20 p-4 max-w-lg w-full flex justify-center items-center h-[120px] font-mono text-muted text-sm">
        // leetcode stats unavailable
      </div>
    );
  }

  return (
    <div className="border border-green-neon/20 p-4 max-w-lg w-full flex flex-col items-center gap-4 bg-black/40 backdrop-blur-sm">
      <div className="grid grid-cols-4 w-full divide-x divide-green-neon/20">
        <div className="flex flex-col items-center justify-center py-2">
          <span className="text-xl font-bold text-white">{stats.totalSolved}</span>
          <span className="text-xs text-muted font-mono uppercase mt-1">Total</span>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <span className="text-xl font-bold text-green-neon">{stats.easySolved}</span>
          <span className="text-xs text-muted font-mono uppercase mt-1">Easy</span>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <span className="text-xl font-bold text-yellow-400">{stats.mediumSolved}</span>
          <span className="text-xs text-muted font-mono uppercase mt-1">Med</span>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <span className="text-xl font-bold text-red-400">{stats.hardSolved}</span>
          <span className="text-xs text-muted font-mono uppercase mt-1">Hard</span>
        </div>
      </div>
      
      <div className="flex justify-between w-full px-4 text-xs font-mono text-cyan-accent/80 pt-2 border-t border-green-neon/10">
        <span>&gt; rank: {stats.ranking.toLocaleString()}</span>
        <span>&gt; acc: {stats.acceptanceRate}%</span>
      </div>
    </div>
  );
}
