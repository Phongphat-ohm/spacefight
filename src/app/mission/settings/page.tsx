"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@heroui/react";
import PlanetSelector from '@/components/mission/settings/PlanetSelector';
import PilotSetting from '@/components/mission/settings/PilotSetting';

export default function EditProfilePage() {
    return (
        <div className="bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 w-full min-h-screen pt-8 pb-12 flex flex-col items-center px-6 font-sans text-white">

            {/* --- 1. แถบนำทางด้านบน --- */}
            <div className="w-full flex items-center justify-between mb-8">
                <Link href={"/mission"} className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors group">
                    <div className="bg-white/10 p-2 rounded-xl group-active:scale-90 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-wide">กลับสู่ภารกิจ</span>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                    <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">เชื่อมต่อฐานข้อมูลแล้ว</span>
                </div>
            </div>

            <PlanetSelector />

            <PilotSetting />

            <p className="mt-8 text-slate-500 text-[9px] font-mono uppercase tracking-[0.3em]">
                สถานะการเชื่อมต่อ: เสถียร // กำลังเฝ้าระวังความปลอดภัย
            </p>
        </div>
    );
}