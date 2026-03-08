"use client";
import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@heroui/react";

export default function PasswordChangeModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            {/* --- ส่วนปุ่มกดที่แสดงในหน้า Setup --- */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest ml-1">
                    ระบบความปลอดภัย
                </label>

                <button
                    className="w-full bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 rounded-2xl px-5 py-4 text-white text-sm transition-all flex items-center justify-between group active:scale-[0.98]"
                    onClick={onOpen}
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-1.5 rounded-lg group-hover:bg-blue-500/40 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                        </div>
                        <span className="font-semibold tracking-wide">เปลี่ยนรหัสผ่านลับ</span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-blue-400/50 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* --- HeroUI Modal: หน้าต่างเปลี่ยนรหัส --- */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: "bg-slate-950/95 border border-white/10 text-white max-w-sm mx-4",
                    header: "border-b border-white/5 py-4",
                    footer: "border-t border-white/5",
                    closeButton: "hover:bg-white/10 active:bg-white/20",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Update Access Code</span>
                                <span className="text-[10px] text-slate-500 font-mono italic font-normal">ยืนยันตัวตนเพื่อเปลี่ยนรหัสรักษาความปลอดภัย</span>
                            </ModalHeader>
                            <ModalBody className="py-6 space-y-4">

                                {/* ช่องกรอกรหัสเดิม */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">รหัสผ่านเดิม</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                                    />
                                </div>

                                {/* เส้นประเล็กๆ คั่นกลาง */}
                                <div className="flex items-center gap-2 opacity-30 py-1">
                                    <div className="flex-grow border-t border-dashed border-white"></div>
                                    <div className="size-1 bg-white rounded-full"></div>
                                    <div className="flex-grow border-t border-dashed border-white"></div>
                                </div>

                                {/* ช่องกรอกรหัสใหม่ */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-blue-300 uppercase tracking-tighter ml-1">รหัสผ่านใหม่</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-black/40 border border-blue-400/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors"
                                    />
                                </div>

                                {/* ยืนยันรหัสใหม่ */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-bold text-blue-300 uppercase tracking-tighter ml-1">ยืนยันรหัสผ่าน</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-black/40 border border-blue-400/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors"
                                    />
                                </div>

                            </ModalBody>
                            <ModalFooter className="flex gap-3">
                                <Button
                                    variant="light"
                                    onPress={onClose}
                                    className="flex-grow text-slate-400 font-bold text-xs uppercase tracking-widest"
                                >
                                    ยกเลิก
                                </Button>
                                <Button
                                    className="flex-grow bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-900/40"
                                    onPress={() => {
                                        onClose();
                                    }}
                                >
                                    บันทึกรหัสใหม่
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}