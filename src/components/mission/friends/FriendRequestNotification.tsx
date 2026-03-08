"use client";
import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
    Badge
} from "@heroui/react";

interface PendingRequest {
    id: number;
    name: string;
    planet: string;
    time: string;
}

export default function FriendRequestNotification() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // ข้อมูลสมมติของคำขอที่ค้างอยู่
    const [requests, setRequests] = useState<PendingRequest[]>([
        { id: 101, name: "นักบิน อเล็กซ์", planet: "/planets/neptune.png", time: "2 นาทีที่แล้ว" },
        { id: 102, name: "ผู้ช่วย ลิซ่า", planet: "/planets/venus.png", time: "5 ชม. ที่แล้ว" },
    ]);

    return (
        <>
            {/* ปุ่มกระดิ่งแจ้งเตือน พร้อมตัวเลข Badge */}
            <Badge
                content={requests.length}
                shape="circle"
                color="danger"
                isInvisible={requests.length === 0}
                classNames={{ badge: "animate-pulse border-none shadow-[0_0_10px_#ef4444]" }}
            >
                <button
                    onClick={onOpen}
                    className="bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-all active:scale-90"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </button>
            </Badge>

            {/* Modal รายการคำขอ */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: "bg-slate-950/95 border border-white/10 text-white max-w-sm mx-4",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 border-b border-white/5 py-4">
                                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Incoming Signals</span>
                                <span className="text-[10px] text-slate-500 font-mono tracking-tighter italic">สัญญาณเทียบยานที่กำลังรอการอนุมัติ</span>
                            </ModalHeader>
                            <ModalBody className="py-6 px-4">
                                {requests.length > 0 ? (
                                    <div className="space-y-4">
                                        {requests.map((req) => (
                                            <div key={req.id} className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <img src={req.planet} className="size-10 object-contain" alt="avatar" />
                                                    <div className="grow">
                                                        <h4 className="text-xs font-bold text-white uppercase">{req.name}</h4>
                                                        <p className="text-[9px] text-slate-500 font-mono">{req.time}</p>
                                                    </div>
                                                </div>

                                                {/* เส้นประหัวลูกศรเล็กๆ คั่นปุ่ม */}
                                                <div className="flex items-center gap-2 opacity-20">
                                                    <div className="grow border-t border-dashed border-white"></div>
                                                    <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[6px] border-l-white"></div>
                                                </div>

                                                <div className="flex gap-2">
                                                    <button
                                                        className="grow py-2 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-black rounded-xl text-[10px] font-bold transition-all uppercase"
                                                        onClick={() => setRequests(prev => prev.filter(r => r.id !== req.id))}
                                                    >
                                                        ยอมรับ
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 bg-red-500/10 hover:bg-red-500/30 text-red-400 rounded-xl text-[10px] font-bold transition-all uppercase"
                                                        onClick={() => setRequests(prev => prev.filter(r => r.id !== req.id))}
                                                    >
                                                        ปฏิเสธ
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-10 text-center space-y-2">
                                        <p className="text-slate-600 text-xs italic font-mono">ไม่มีสัญญาณใหม่ในขณะนี้...</p>
                                    </div>
                                )}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}