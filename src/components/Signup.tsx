"use client";
import { User, IdCard, Lock, ArrowLeft, Rocket, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// รายชื่อดวงดาวเป้าหมาย
const planets = [
    { id: 'mercury', name: 'ดาวพุธ', src: '/planets/mercury.png' },
    { id: 'venus', name: 'ดาวศุกร์', src: '/planets/venus.png' },
    { id: 'mars', name: 'ดาวอังคาร', src: '/planets/mars.png' },
    { id: 'jupiter', name: 'ดาวพฤหัส', src: '/planets/jupiter.png' },
    { id: 'saturn', name: 'ดาวเสาร์', src: '/planets/saturn.png' },
    { id: 'uranus', name: 'ยูเรนัส', src: '/planets/uranus.png' },
    { id: 'neptune', name: 'เนปจูน', src: '/planets/neptune.png' },
    { id: 'pluto', name: 'พลูโต', src: '/planets/pluto.png' },
];

export default function Signup() {
    const [selectedPlanet, setSelectedPlanet] = useState('');

    return (
        <form action={"/welcome"} className="w-full space-y-8">
            <div className="space-y-7">
                {/* --- ส่วนกรอกข้อมูลเดิม --- */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#2e1065] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-widest rounded-2xl p-1">
                        <IdCard size={14} /> ชื่อเรียก
                    </label>
                    <input type="text" placeholder="ระบุชื่อของคุณ..." className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300" />
                </div>

                <div className="relative w-full group">
                    <label className="absolute -top-3 left-4 bg-[#281375] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-widest rounded-2xl p-1">
                        <User size={14} /> ชื่อผู้ใช้
                    </label>

                    {/* ส่วนของเครื่องหมาย @ */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-violet-400 font-bold tracking-widest group-focus-within:text-violet-300 transition-colors">
                            @
                        </span>
                    </div>

                    <input
                        type="text"
                        placeholder="ระบุชื่อผู้ใช้ของคุณ..."
                        className="w-full rounded-xl bg-white/5 p-4 pl-10 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300"
                    />
                </div>

                {/* --- ส่วนเลือกดวงดาวเป้าหมาย (New Section) --- */}
                <div className="space-y-4">
                    <label className="text-[11px] font-bold text-violet-400 flex gap-2 items-center uppercase tracking-[0.2em] ml-2">
                        <Rocket size={14} /> เลือกเป้าหมายการสำรวจ
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                        {planets.map((planet) => (
                            <button
                                key={planet.id}
                                type="button"
                                onClick={() => setSelectedPlanet(planet.id)}
                                className={`relative flex flex-col items-center p-3 rounded-2xl border transition-all duration-500 group ${selectedPlanet === planet.id
                                    ? 'bg-violet-500/20 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <img
                                    src={planet.src}
                                    alt={planet.name}
                                    className={`size-12 object-contain transition-transform duration-500 ${selectedPlanet === planet.id ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                                        }`}
                                />
                                <span className={`text-[9px] mt-2 font-bold tracking-tighter ${selectedPlanet === planet.id ? 'text-violet-300' : 'text-white/40'
                                    }`}>
                                    {planet.name}
                                </span>

                                {selectedPlanet === planet.id && (
                                    <div className="absolute -top-1 -right-1 size-4 bg-violet-400 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="size-1.5 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input: รหัสผ่าน */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#211786] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-widest rounded-2xl p-1">
                        <Lock size={14} /> รหัสผ่าน
                    </label>
                    <input type="password" placeholder="••••••••" className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300" />
                </div>

                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#211786] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-widest rounded-2xl p-1">
                        <LockKeyhole size={14} /> ยืนยันรหัสผ่าน
                    </label>
                    <input type="password" placeholder="••••••••" className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-6">
                <button className="w-full py-4 bg-linear-to-r from-violet-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                    ยืนยันการสมัครและเริ่มภารกิจ
                </button>

                <Link href={"/"} className="group w-full flex items-center justify-center gap-2 text-white/40 hover:text-white transition-all duration-300 text-sm">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    มีบัญชีอยู่แล้ว?
                    <span className="text-violet-400 font-bold border-b border-transparent group-hover:border-violet-400 transition-all">
                        เข้าสู่ระบบ
                    </span>
                </Link>
            </div>
        </form>
    );
}