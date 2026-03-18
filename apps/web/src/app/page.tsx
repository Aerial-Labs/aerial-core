"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  ShoppingCart, 
  Newspaper, 
  Rocket,
  Shield,
  Zap,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils"; // Wait, I need to create utils.ts too.

export default function Home() {
  const features = [
    {
      title: "Smart Calendar",
      desc: "高度なスケジューリングと通知機能で、予定を完全にコントロール。",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Task Automation",
      desc: "日々のタスクを直感的に管理。完了までの最短ルートを提案。",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Grocery Sync",
      desc: "家族やチームとリアルタイムで買い物リストを共有。",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Curated News",
      desc: "あなたに最も関連性の高い情報だけを AI がピックアップ。",
      icon: <Newspaper className="w-6 h-6" />,
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-dark">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
             <Rocket className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">Aerial</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-sm font-medium hover:text-white transition-colors">Login</button>
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full pt-48 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 mb-8 mx-auto w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Next Generation SaaS Platform
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 gradient-text max-w-4xl mx-auto leading-tight">
              Defy Gravity. <br/>
              Elevate Your Workflow.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/50 mb-12 mx-auto leading-relaxed">
              常識を覆す軽快な操作性と、高度な最適化エンジン。
              あらゆる限界を突破し、プロダクティビティを新次元へ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start for free <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full glass border-white/20 font-semibold hover:bg-white/10 transition-colors">
                Book a Demo
              </button>
            </div>
          </motion.div>

          {/* Hero Image / UI Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative mt-24 max-w-6xl w-full aspect-[16/9] rounded-2xl overflow-hidden glass border-white/10 shadow-2xl animate-float"
          >
            <Image 
              src="/hero.png" 
              alt="Aerial UI Preview" 
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="w-full max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Ecosystem</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              SaaSビジネスに必要な全ての要素が、シームレスに結合。
              あなたの働き方を根本から変えます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl glass hover:border-white/20 transition-all cursor-pointer"
              >
                <div className={cn("inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br mb-6", f.color)}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {f.desc}
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dynamic Proof */}
        <section className="w-full bg-white/5 py-24 mb-24 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">250k+</div>
              <div className="text-xs font-medium text-white/30 uppercase tracking-widest">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-xs font-medium text-white/30 uppercase tracking-widest">Uptime Record</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50ms</div>
              <div className="text-xs font-medium text-white/30 uppercase tracking-widest">Avg Latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">150+</div>
              <div className="text-xs font-medium text-white/30 uppercase tracking-widest">Integrations</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-4xl px-6 py-24 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to float?</h2>
          <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
            14日間のフリートライアルを開始。クレジットカード登録は不要です。
          </p>
          <button className="px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]">
            Create your account
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-white/5 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            <span className="font-bold">Aerial</span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
          <p className="text-sm text-white/20">© 2026 Aerial Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
