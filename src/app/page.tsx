'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, Activity, Heart, Shield, Navigation, Settings, MapPin, Ambulance, Pill, Droplets, Wind, Hospital, WifiOff, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TopNav } from '@/components/layout/TopNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-linear-to-b from-blue-600/20 to-transparent blur-[120px] rounded-full pointer-events-none"
      />

      <TopNav />
      <div className="relative pt-24 pb-16 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="relative z-10 text-center space-y-6"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-black uppercase tracking-widest"
          >
            <Shield size={16} />
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            Health<span className="text-blue-500 text-shadow-glow">Guard</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed font-medium"
          >
            Advanced medical triage and emergency SOS that works even in the most remote areas without internet.
          </motion.p>
        </motion.div>
      </div>

      {/* Project Presentation Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-24 relative"
      >
        <div className="relative aspect-video rounded-[3.5rem] overflow-hidden border border-blue-500/10 shadow-[0_0_100px_rgba(59,130,246,0.1)] bg-slate-900/80 backdrop-blur-3xl group text-left">
          {/* Recognizable Healthcare Image (Futuristic Lab) */}
          <img
            src="/images/project_overview.png"
            alt="Modern Healthcare Laboratory"
            className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Content Overlay - High Contrast */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-center p-12 md:p-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.2em]">
                <Activity size={16} className="animate-pulse" /> Project Overview
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Modernizing <br />
                <span className="text-blue-500 text-shadow-glow">Healthcare.</span>
              </h2>

              <p className="text-slate-200 text-xl font-medium leading-relaxed max-w-xl">
                HealthGuard integrates advanced AI diagnostics with offline-first reliability.
                Our platform empowers users with professional-grade medical intelligence,
                no matter the location or connectivity status.
              </p>

              {/* Animated Feature Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { label: "AI Diagnostic", icon: <Activity size={18} /> },
                  { label: "Offline First", icon: <WifiOff size={18} /> },
                  { label: "Secure Data", icon: <Shield size={18} /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 transition-colors"
                  >
                    <span className="text-blue-500">{item.icon}</span>
                    <span className="text-sm font-black text-white">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* HUD Border Decoration */}
          <div className="absolute inset-0 border-24 border-slate-950/20 pointer-events-none" />
          <div className="absolute top-12 right-12 text-blue-500/30 font-mono text-[10px] tracking-widest uppercase rotate-90 origin-right">
            System_Verification_v4.0.2
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase">
              Our Mission
            </div>
            <h2 className="text-5xl font-black leading-tight">
              Medical care shouldn't depend on <span className="text-blue-500">a signal bar.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              HealthGuard is built for the moments when connectivity fails but lives are on the line.
              Our technology leverages local processing and offline datasets to provide clinical-grade
              triage and emergency coordination without needing an active internet connection.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-blue-500 font-black text-3xl">100%</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Offline Capable</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-500 font-black text-3xl">Zero</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Latency Triage</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-blue-600/20 to-transparent rounded-[4rem] border border-blue-500/10 p-1 bg-slate-900/50 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute inset-0">
                <img
                  src="/images/mission_offline.png"
                  alt="Offline Medical Intelligence"
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>
              <div className="relative z-10 p-12 h-full flex flex-col justify-end gap-4">
                <div className="bg-blue-500/20 p-4 rounded-3xl w-fit">
                  <WifiOff className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl font-black">Offline-First Core</h3>
                <p className="text-slate-400 text-sm font-medium">All diagnostic algorithms and resource maps are stored locally on your device for instant access in remote areas.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Process Walkthroughs */}
      <section className="bg-slate-900/40 py-24 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">How It <span className="text-blue-500 text-shadow-glow">Works.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Explore the intuitive process of our core medical services.</p>
          </motion.div>

          {/* SOS Walkthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-red-600/20 rounded-3xl flex items-center justify-center text-red-500 border border-red-500/20">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-4xl font-black text-white">Emergency SOS</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                In a critical situation, speed and precision are vital. Our SOS system works by capturing
                your precise coordinates and broadcasting them over low-bandwidth or offline mesh networks.
              </p>
              <ul className="space-y-4">
                {[
                  "One-Tap Activation",
                  "Auto Location Capture",
                  "Verified Medical Guidance",
                  "Nearby Help Sync"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-bold">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/sos" className="inline-flex px-8 py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 transition-all uppercase tracking-widest text-xs">
                Setup SOS Profile
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900"
            >
              <img
                src="/images/sos_feature.png"
                alt="Emergency SOS Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>

          {/* Triage Walkthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900 order-2 lg:order-1"
            >
              <img
                src="/images/ai_triage_feature.png"
                alt="Smart AI Triage Analysis"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-emerald-600/20 rounded-3xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <Activity size={32} />
              </div>
              <h3 className="text-4xl font-black text-white">Smart AI Triage</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Analyze your symptoms using our sophisticated AI engine. Even without internet,
                our local medical database provides instant risk assessments and next-step recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  "Symptom Checker",
                  "Age-Based Analysis",
                  "Risk Level Scoring",
                  "Offline Knowledge Core"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-bold">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/triage" className="inline-flex px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all uppercase tracking-widest text-xs">
                Start Assessment
              </Link>
            </motion.div>
          </div>

          {/* Locator Walkthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-3xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                <MapPin size={32} />
              </div>
              <h3 className="text-4xl font-black text-white">Resource Locator</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Find the nearest medical support instantly. Our locator utilizes local GPS data
                to show you hospitals, pharmacies, and blood banks without requiring a data connection.
              </p>
              <ul className="space-y-4">
                {[
                  "Offline Map Engine",
                  "Live Bed Availability",
                  "Pharmacy Stock Check",
                  "Blood Bank Hub"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-bold">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources" className="inline-flex px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs">
                Find Facilities
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900"
            >
              <img
                src="/images/resource_locator_feature.png"
                alt="Resource Locator Map"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Feature Summary */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-linear-to-r from-blue-600/10 to-emerald-600/10 border border-blue-500/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Ready to secure your health?</h2>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                Join thousands of users who trust HealthGuard for their safety. Our platform is continuously
                updated with the latest medical data and regional resource information.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/triage" className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all uppercase tracking-widest text-sm">
                  Start Triage
                </Link>
                <Link href="/sos" className="px-8 py-4 bg-slate-800 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase tracking-widest text-sm">
                  Active SOS
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Verified Medical Data",
                "Privacy Guaranteed",
                "Offline Maps Included",
                "24/7 Connectivity Link"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-sm font-bold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Display */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-slate-900/40 backdrop-blur-md border-t border-slate-800/50 py-16 mb-24"
      >
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-12 text-center">
          {[
            { label: 'OFFLINE', val: '100%', sub: 'No Data Needed' },
            { label: 'GPS', val: 'READ', sub: 'Satellite Link' },
            { label: 'SYNC', val: 'AUTO', sub: 'p2p Mesh' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-xs font-black text-slate-500 tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-white leading-none">{stat.val}</p>
              <p className="text-[10px] text-blue-500/60 font-bold mt-2 tracking-widest uppercase">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <style jsx global>{`
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </main>
  );
}
