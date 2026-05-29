'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { round1: 1000, round3: 0, combined: 1000 },
  { round1: 1500, round3: 0, combined: 1500 },
  { round1: 1200, round3: 500, combined: 1700 },
  { round1: 2000, round3: 1000, combined: 3000 },
  { round1: 2500, round3: 1800, combined: 4300 },
  { round1: 2300, round3: 2500, combined: 4800 },
  { round1: 3000, round3: 3500, combined: 6500 },
  { round1: 2800, round3: 4000, combined: 6800 },
  { round1: 3500, round3: 5000, combined: 8500 },
  { round1: 4000, round3: 5500, combined: 9500 },
  { round1: 3800, round3: 6500, combined: 10300 },
  { round1: 4500, round3: 7500, combined: 12000 },
  { round1: 5000, round3: 8000, combined: 13000 },
  { round1: 5500, round3: 9000, combined: 14500 },
  { round1: 6000, round3: 10000, combined: 16000 },
];

export default function AlgoTrading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="py-24 max-w-4xl mx-auto px-6 w-full"
    >
      <div className="font-mono text-green-neon text-sm mb-8">
        $ ./trading_performance --rounds 1,3
      </div>

      <div className="bg-card border border-cyan-accent/30 p-8 flex flex-col gap-8 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
        
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRound1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ff41" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#00ff41" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRound3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#00d4ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCombined" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="combined" stroke="#ffffff" fillOpacity={1} fill="url(#colorCombined)" strokeWidth={1} />
              <Area type="monotone" dataKey="round3" stroke="#00d4ff" fillOpacity={1} fill="url(#colorRound3)" strokeWidth={2} />
              <Area type="monotone" dataKey="round1" stroke="#00ff41" fillOpacity={1} fill="url(#colorRound1)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-cyan-accent/20">
          <div className="flex flex-col gap-1">
            <span className="text-muted text-xs uppercase tracking-wider">Best Day PnL</span>
            <span className="font-mono text-white text-xl">+124,500</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted text-xs uppercase tracking-wider">Avg Daily Return</span>
            <span className="font-mono text-white text-xl">+14.2%</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted text-xs uppercase tracking-wider">Assets Traded</span>
            <span className="font-mono text-white text-sm">HYDROGEL_PACK · VELVETFRUIT_EXTRACT · VEV_xxxx</span>
          </div>
        </div>
      </div>

      <div className="text-muted/50 text-xs font-mono mt-4">
        // simulated exchange — IMC Prosperity algorithmic trading competition
      </div>
    </motion.div>
  );
}
