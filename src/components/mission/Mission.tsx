"use client";
import React, { useState } from 'react';

export default function Mission() {
    const [filter, setFilter] = useState('pending');

    const [missions, setMissions] = useState([
        { id: 'MS-01', title: "สรุปสูตรฟิสิกส์นิวเคลียร์", subject: "Physics", status: "pending", time: "2 ชม." },
        { id: 'MS-02', title: "ท่องศัพท์อังกฤษ 50 คำ", subject: "English", status: "pending", time: "5 ชม." },
        { id: 'MS-03', title: "ส่งโปรเจกต์ React อวกาศ", subject: "Coding", status: "completed", time: "สำเร็จ" },
    ]);

    return (
        <>
            <div className="w-full max-w-sm">
                <div className="flex justify-between items-center mb-4 px-2">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="size-1.5 bg-blue-500 rounded-full"></span>
                        MISSIONS
                    </h2>
                    <div className="flex bg-black/40 p-1 rounded-lg border border-white/10 text-[10px]">
                        <button onClick={() => setFilter('pending')} className={`px-3 py-1 rounded-md transition-all ${filter === 'pending' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}>ค้างอยู่</button>
                        <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded-md transition-all ${filter === 'completed' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}>เสร็จแล้ว</button>
                    </div>
                </div>

                <div className="space-y-3">
                    {missions
                        .filter(m => m.status === filter)
                        .map((task) => (
                            <div key={task.id} className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 overflow-hidden transition-all hover:bg-white/10 hover:border-blue-500/40">
                                {/* ตกแต่งมุมการ์ดสไตล์ HUD */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 rounded-tr-2xl group-hover:border-blue-500/50"></div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">{task.id}</span>
                                        <h3 className="text-md font-semibold text-white leading-tight mt-0.5">{task.title}</h3>
                                        <p className="text-xs text-slate-400 mt-1">วิชา: {task.subject}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] text-slate-500 uppercase">Time Left</p>
                                        <p className={`text-xs font-mono font-bold ${task.status === 'completed' ? 'text-emerald-400' : 'text-orange-400 animate-pulse'}`}>
                                            {task.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-3 flex gap-2">
                                    <button className="flex-grow py-2 bg-blue-500/10 hover:bg-blue-500 hover:text-white text-blue-400 rounded-xl text-[11px] font-bold transition-all border border-blue-500/20">
                                        ตรวจสอบข้อมูล
                                    </button>
                                    <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl text-[11px] font-black transition-all">
                                        COMPLETED
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </>
    )
} 