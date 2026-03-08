"use client";
import React from 'react';

interface CrewMemberCardProps {
    name: string;
    rank: string;
    planet: string;
    status: 'Online' | 'Offline';
    onClick: () => void;
}

export default function CrewMemberCard({ name, rank, planet, status, onClick }: CrewMemberCardProps) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex items-center justify-between group hover:bg-white/10 transition-all active:scale-95 mb-3"
        >
            <div className="flex items-center gap-4">
                {/* รูปดาวประจำตัวเพื่อน */}
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/40 transition-all"></div>
                    <img src={planet} className="size-12 object-contain relative z-10" alt={`${name}-avatar`} />
                </div>

                {/* ข้อมูลชื่อและตำแหน่ง */}
                <div className="text-left">
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">{name}</h3>
                    <p className="text-[10px] text-blue-300/60 font-mono tracking-widest">{rank}</p>
                </div>
            </div>

            {/* สถานะ Online/Offline */}
            <div className="flex items-center gap-2">
                <span className={`text-[9px] font-bold ${status === 'Online' ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {status}
                </span>
                <div className={`size-1.5 rounded-full ${status === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse' : 'bg-slate-600'}`}></div>
            </div>
        </button>
    );
}