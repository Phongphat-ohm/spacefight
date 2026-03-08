"use client";
import React from 'react';
import Link from 'next/link';
import { Card, CardBody, Progress, Chip } from "@heroui/react";

// กำหนด Interface สำหรับข้อมูล Rank
interface ExpertiseNode {
    id: number;
    levelName: string;
    requirement: string;
    icon: string;
    description: string;
    isUnlocked: boolean;
    isCurrent: boolean;
}

const EXPERTISE_DATA: ExpertiseNode[] = [
    {
        id: 1,
        levelName: "Star Cadet (นักเรียนนายเรือ)",
        requirement: "เริ่มต้นภารกิจ",
        icon: "🚀",
        description: "ผ่านการคัดเลือกเข้าสู่หน่วยสำรวจอวกาศขั้นต้น",
        isUnlocked: true,
        isCurrent: false
    },
    {
        id: 2,
        levelName: "Orbit Pilot (นักบินวงโคจร)",
        requirement: "ชั่วโมงบิน 168 ชม. (7 วัน)",
        icon: "🛰️",
        description: "เชี่ยวชาญการควบคุมยานรอบวงโคจรดาวเคราะห์",
        isUnlocked: true,
        isCurrent: true
    },
    {
        id: 3,
        levelName: "Deep Space Navigator",
        requirement: "ชั่วโมงบิน 720 ชม. (30 วัน)",
        icon: "☄️",
        description: "ความสามารถในการนำร่องผ่านแถบดาวเคราะห์น้อย",
        isUnlocked: false,
        isCurrent: false
    },
    {
        id: 4,
        levelName: "Fleet Commander",
        requirement: "ชั่วโมงบิน 2,160 ชม. (90 วัน)",
        icon: "🧑‍✈️",
        description: "ผู้นำกองยานสำรวจระดับกาแล็กซี",
        isUnlocked: false,
        isCurrent: false
    },
];

export default function AchivementPage() {
    return (
        <div className="bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 w-full min-h-screen pt-8 pb-24 flex flex-col items-center px-6 text-white font-sans">

            {/* --- 1. Header Navigation --- */}
            <div className="w-full max-w-sm flex items-center justify-between mb-8">
                <Link href="/mission" className="bg-white/10 p-2.5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5 text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
                <h1 className="text-sm font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
                    Pilot Expertise
                </h1>
                <div className="size-5 border-2 border-blue-500 rounded-full animate-pulse"></div>
            </div>

            {/* --- 2. Dashboard Summary --- */}
            <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-[2.5rem] p-6 mb-12 relative overflow-hidden backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-[10px] text-blue-300 font-mono tracking-widest uppercase">Total Service Time</p>
                        <h2 className="text-3xl font-black mt-1">172 <span className="text-sm font-light text-slate-400">Hrs</span></h2>
                    </div>
                    <Chip size="sm" variant="flat" color="success" className="text-[9px] font-bold">ACTIVE</Chip>
                </div>
                <Progress
                    aria-label="Expertise progress"
                    size="sm"
                    value={45}
                    className="mb-2"
                    classNames={{ indicator: "bg-gradient-to-r from-blue-500 to-cyan-400" }}
                />
                <p className="text-[9px] text-slate-500 font-mono text-right tracking-tighter">NEXT RANK: DEEP SPACE NAVIGATOR (24%)</p>
            </div>

            {/* --- 3. Progression Path (The Dashed Arrow System) --- */}
            <div className="w-full max-w-sm">
                {EXPERTISE_DATA.map((node, index) => (
                    <div key={node.id} className="flex flex-col items-start">

                        {/* Node Container */}
                        <div className={`flex items-center gap-5 w-full transition-all duration-500 ${!node.isUnlocked ? 'opacity-30 grayscale' : 'opacity-100'}`}>

                            {/* Icon Circle */}
                            <div className={`relative size-16 shrink-0 rounded-3xl flex items-center justify-center text-3xl border-2 transition-all
                ${node.isCurrent
                                    ? 'bg-blue-600 border-white shadow-[0_0_25px_rgba(59,130,246,0.6)] animate-pulse z-10'
                                    : node.isUnlocked
                                        ? 'bg-emerald-500/20 border-emerald-500/50'
                                        : 'bg-slate-800 border-white/5'}`}>
                                {node.icon}
                                {node.isUnlocked && !node.isCurrent && (
                                    <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-1 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3 text-black">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Info Card */}
                            <Card className={`flex-grow border-none shadow-none bg-white/5 backdrop-blur-sm rounded-3xl ${node.isCurrent ? 'ring-1 ring-blue-400/50 bg-white/10' : ''}`}>
                                <CardBody className="p-4">
                                    <h3 className="text-xs font-black uppercase tracking-wide text-white">{node.levelName}</h3>
                                    <p className="text-[10px] text-slate-400 mt-1 font-light leading-tight">{node.description}</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-[9px] font-mono text-blue-400/80 tracking-tighter uppercase">{node.requirement}</span>
                                        {node.isCurrent && <span className="text-[8px] font-bold text-blue-300 animate-bounce">RANK ปัจจุบัน</span>}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Vertical Dashed Arrow Connector */}
                        {index !== EXPERTISE_DATA.length - 1 && (
                            <div className="ml-8 my-2 flex flex-col items-center">
                                <div className="h-12 w-0 border-l-2 border-dashed border-blue-400/20 relative">
                                    {/* หัวลูกศรสามเหลี่ยมคว่ำ */}
                                    <div className="absolute -bottom-1 -left-[5px] w-0 h-0 border-x-[4px] border-x-transparent border-t-[8px] border-t-blue-400/30"></div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* --- 4. Footer Decor --- */}
            <div className="mt-16 flex flex-col items-center gap-3 opacity-20">
                <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="size-1 bg-white rounded-full"></div>)}
                </div>
                <p className="text-[8px] font-mono uppercase tracking-[0.5em]">End of Transmission</p>
            </div>

        </div>
    );
}