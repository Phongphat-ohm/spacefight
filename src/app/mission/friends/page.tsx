"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import CrewMemberCard from '@/components/mission/friends/CrewMemberCard';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@heroui/react";
import { CrewMember } from '@/types/mission';
import AddFriendModal from '@/components/mission/friends/AddFriendModal';
import FriendRequestNotification from '@/components/mission/friends/FriendRequestNotification';

export default function CrewPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // ระบุ Type ให้กับ State (เป็นได้ทั้ง CrewMember หรือ null)
    const [selectedCrew, setSelectedCrew] = useState<CrewMember | null>(null);

    // ข้อมูลลูกเรือพร้อม Type
    const crewList: CrewMember[] = [
        { id: 1, name: "กัปตัน สมชาย", rank: "COMMANDER", planet: "/planets/mars.png", status: "Online", bio: "เชี่ยวชาญด้านฟิสิกส์และการขับยานวาร์ป" },
        { id: 2, name: "นักบิน สมหญิง", rank: "PILOT", planet: "/planets/venus.png", status: "Online", bio: "ฝ่ายสนับสนุนเสบียงและคำนวณวงโคจร" },
        { id: 3, name: "ช่างเทคนิค จอห์น", rank: "ENGINEER", planet: "/planets/jupiter.png", status: "Offline", bio: "ดูแลระบบเครื่องยนต์และเกราะป้องกันรังสี" },
    ];

    const handleOpenDetail = (crew: CrewMember) => {
        setSelectedCrew(crew);
        onOpen();
    };

    return (
        <div className="bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 w-full min-h-screen pt-8 pb-20 flex flex-col items-center px-6 font-sans text-white">

            {/* --- Header --- */}
            <div className="w-full flex items-center justify-between mb-8">
                <Link href="/mission" className="flex items-center gap-2 text-blue-300">
                    <div className="bg-white/10 p-2 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">กลับสู่ภารกิจ</span>
                </Link>
                <FriendRequestNotification />
                {/* <span className="text-[10px] text-blue-400 font-mono tracking-[0.3em]">ลูกเรือทั้งหมด: {crewList.length}</span> */}
            </div>

            {/* --- ช่องค้นหา (Search) --- */}
            <div className="w-full max-w-sm mb-6">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-blue-400/50 font-mono text-sm group-focus-within:text-blue-400 transition-colors">@</span>
                    </div>
                    <input
                        type="text"
                        placeholder="ค้นหานามเรียกขาน..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                    />
                </div>
            </div>
            <AddFriendModal />

            {/* --- เส้นประหัวลูกศร (Dashed Arrow Divider) --- */}
            <div className="w-full max-w-sm flex items-center gap-2 mb-6">
                <div className="size-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></div>
                <div className="flex-grow border-t border-dashed border-blue-400/20"></div>
                <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[8px] border-l-blue-400"></div>
            </div>

            {/* --- รายการเพื่อน --- */}
            <div className="w-full max-w-sm">
                <h2 className="text-[10px] font-bold text-blue-300/40 tracking-[0.2em] mb-4 uppercase ml-2 italic">Active Crew Members</h2>
                <div className="space-y-1">
                    {crewList.map((crew) => (
                        <CrewMemberCard
                            key={crew.id}
                            name={crew.name}
                            rank={crew.rank}
                            planet={crew.planet}
                            status={crew.status}
                            onClick={() => handleOpenDetail(crew)}
                        />
                    ))}
                </div>
            </div>

            {/* --- Modal แสดงรายละเอียด --- */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: "bg-slate-950/95 border border-white/10 text-white max-w-xs mx-4 rounded-[2.5rem]",
                    header: "border-b border-white/5",
                    closeButton: "top-4 right-4"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col items-center pt-10 pb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
                                    <img src={selectedCrew?.planet} className="size-24 object-contain relative z-10" alt="detail-planet" />
                                </div>
                                <h2 className="text-xl font-bold mt-4 tracking-tight uppercase">{selectedCrew?.name}</h2>
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[9px] text-blue-300 font-mono mt-2 tracking-widest uppercase">
                                    {selectedCrew?.rank}
                                </span>
                            </ModalHeader>
                            <ModalBody className="pb-10 text-center px-8">
                                <div className="space-y-4">
                                    <div className="flex justify-center gap-4 py-2 border-y border-white/5 font-mono text-[10px]">
                                        <div className="text-center">
                                            <p className="text-slate-500">ภารกิจที่ทำ</p>
                                            <p className="text-white">128</p>
                                        </div>
                                        <div className="w-px h-full bg-white/5"></div>
                                        <div className="text-center">
                                            <p className="text-slate-500">คะแนน</p>
                                            <p className="text-yellow-400">4.9k</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed italic">
                                        "{selectedCrew?.bio}"
                                    </p>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <p className="mt-8 text-slate-500 text-[9px] font-mono uppercase tracking-[0.4em]">
                Status: scanning crew signals...
            </p>
        </div>
    );
}