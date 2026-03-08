"use client";
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

export default function AddFriendModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [pilotId, setPilotId] = useState<string>("");

    const handleAddFriend = () => {
        console.log("กำลังส่งคำขอไปที่ ID:", pilotId);
        // เพิ่ม Logic การส่งคำขอที่นี่
    };

    return (
        <>
            {/* ปุ่มกดเปิด Modal (มักจะวางไว้ที่มุมจอหรือแถบเมนู) */}
            <button
                onClick={onOpen}
                className="fixed bottom-8 right-8 size-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center transition-all active:scale-90 z-50 border-2 border-white/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
            </button>

            {/* HeroUI Modal */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: "bg-slate-950/95 border border-white/10 text-white max-w-sm mx-4",
                    header: "border-b border-white/5",
                    closeButton: "hover:bg-white/10 active:bg-white/20",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">ค้นหาลูกเรือใหม่</span>
                                <span className="text-[10px] text-slate-500 font-mono italic font-normal tracking-tight">ระบุรหัสนักบินเพื่อส่งสัญญาณเทียบยาน</span>
                            </ModalHeader>

                            <ModalBody className="py-8">
                                <div className="space-y-6">
                                    {/* ช่องกรอกรหัสเพื่อน (Start Content @) */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] ml-1">รหัสนักบิน (Pilot ID)</label>
                                        <div className="relative group/input">
                                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                                <span className="text-blue-400 font-mono font-bold text-sm">@</span>
                                            </div>
                                            <input
                                                type="text"
                                                value={pilotId}
                                                onChange={(e) => setPilotId(e.target.value)}
                                                placeholder="EXPLORER-X"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl pl-10 pr-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700"
                                            />
                                        </div>
                                    </div>

                                    {/* เส้นประหัวลูกศร (Dashed Arrow Divider) */}
                                    <div className="flex items-center gap-2 px-2">
                                        <div className="size-1 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></div>
                                        <div className="grow border-t border-dashed border-blue-400/20"></div>
                                        <div className="w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-blue-400"></div>
                                    </div>

                                    <p className="text-[9px] text-center text-slate-500 font-mono leading-relaxed">
                                        * โปรดตรวจสอบรหัสนักบินให้ถูกต้อง <br />
                                        ระบบจะทำการส่งสัญญาณคำขอไปยังฐานข้อมูลทันที
                                    </p>
                                </div>
                            </ModalBody>

                            <ModalFooter className="flex gap-3">
                                <Button
                                    variant="light"
                                    onPress={onClose}
                                    className="grow text-slate-400 font-bold text-xs uppercase"
                                >
                                    ยกเลิก
                                </Button>
                                <Button
                                    onPress={() => {
                                        handleAddFriend();
                                        onClose();
                                    }}
                                    className="grow bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase shadow-lg shadow-blue-900/40"
                                >
                                    ส่งสัญญาณคำขอ
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}