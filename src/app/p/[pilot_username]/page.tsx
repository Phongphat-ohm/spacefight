"use client";
import React from 'react';
import Link from 'next/link';
import { Button, Card, CardBody, Chip, Progress } from "@heroui/react";

export default function PublicProfilePage() {
    // สมมติข้อมูลที่ดึงมาจากฐานข้อมูล
    const pilot: any = {
        username: "Commander_Mars",
        displayName: "กัปตัน สมชาย",
        avatarPlanet: "/planets/mars.png",
        rankName: "Deep Space Navigator",
        rankLevel: 3, // ระดับที่ 3
        totalMissions: 142,
        flightHours: 1008, // ชั่วโมงบิน (42 วัน * 24)
        daysActive: 42,
        bio: "มุ่งมั่นสำรวจขอบกาแล็กซี และไม่เคยลืมทำการบ้านส่งฐานบัญชาการ",
        isFriend: false
    };

    return (
        <div className="bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 w-full min-h-screen pt-12 pb-20 flex flex-col items-center px-6 text-white font-sans">

            {/* --- 1. Top Navigation --- */}
            <div className="w-full flex items-center justify-between mb-8 max-w-sm">
                <Link href="/mission" className="bg-white/10 p-2 rounded-xl border border-white/10 active:scale-90 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
                <span className="text-[10px] text-blue-400 font-mono tracking-[0.3em] uppercase">Pilot Dossier</span>
                <button className="opacity-50 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
            </div>

            {/* --- 2. Central Avatar & Identity --- */}
            <div className="relative flex flex-col items-center mb-6">
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
                <img
                    src={pilot.avatarPlanet}
                    className="size-36 object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.5)] animate-bounce-slow relative z-10"
                    alt="pilot-planet"
                />
                <div className="mt-6 text-center z-10">
                    <h1 className="text-2xl font-black tracking-tight uppercase leading-none">{pilot.displayName}</h1>
                    <p className="text-blue-400 font-mono text-xs tracking-widest mt-2">@{pilot.username}</p>
                </div>
            </div>

            {/* --- 3. เส้นประหัวลูกศร (Dashed Arrow Divider) --- */}
            <div className="w-full max-w-sm flex items-center gap-2 mb-8 px-4">
                <div className="size-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-ping"></div>
                <div className="flex-grow border-t-2 border-dashed border-blue-400/20"></div>
                <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-blue-400"></div>
            </div>

            {/* --- 4. Rank Status Card (NEW) --- */}
            <Card className="w-full max-w-sm bg-white/5 border border-white/10 rounded-[2.5rem] mb-6 shadow-2xl backdrop-blur-md">
                <CardBody className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-blue-300 uppercase tracking-[0.2em]">Current Rank</span>
                            <span className="text-lg font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
                                {pilot.rankName}
                            </span>
                        </div>
                        <div className="size-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                            <span className="text-xl">🎖️</span>
                        </div>
                    </div>

                    {/* Rank Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-slate-400">XP Progress</span>
                            <span className="text-blue-400">75% to Next Level</span>
                        </div>
                        <Progress
                            aria-label="Rank progress"
                            size="sm"
                            value={75}
                            classNames={{
                                indicator: "bg-linear-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_#2563eb]"
                            }}
                        />
                    </div>
                </CardBody>
            </Card>

            {/* --- 5. Mission Stats Grid --- */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-3 mb-6">
                {[
                    { label: "ภารกิจสำเร็จ", val: pilot.totalMissions, sub: "Mission" },
                    { label: "ชั่วโมงบิน", val: pilot.flightHours, sub: "Hours" },
                    { label: "ประจำการ", val: pilot.daysActive, sub: "Days" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-[1.5rem] p-3 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <p className="text-[8px] text-slate-500 uppercase font-bold tracking-tighter mb-1">{stat.label}</p>
                        <p className="text-base font-black text-white leading-none">{stat.val}</p>
                        <p className="text-[8px] text-blue-400 mt-1 font-mono uppercase opacity-70">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* --- 6. Bio Section --- */}
            <Card className="w-full max-w-sm bg-black/20 border-none shadow-none rounded-[2rem] mb-8">
                <CardBody className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="size-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pilot Biography</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                        "{pilot.bio}"
                    </p>
                </CardBody>
            </Card>

            {/* --- 7. Action Buttons --- */}
            <div className="w-full max-w-sm flex gap-3">
                <Button
                    className="flex-grow bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold h-14 rounded-2xl shadow-xl shadow-blue-900/40 text-xs uppercase tracking-[0.2em] active:scale-95 transition-all"
                >
                    {pilot.isFriend ? "ส่งข้อความสื่อสาร" : "ส่งสัญญาณเทียบยาน"}
                </Button>
            </div>

            {/* Footer Decoration */}
            <div className="mt-10 flex flex-col items-center gap-2 opacity-30">
                <div className="flex gap-1">
                    <div className="size-1 bg-white rounded-full"></div>
                    <div className="size-1 bg-white rounded-full"></div>
                    <div className="size-1 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-500 text-[9px] font-mono uppercase tracking-[0.4em]">
                    Data Synchronized // Station: Nang Rong
                </p>
            </div>
        </div>
    );
}