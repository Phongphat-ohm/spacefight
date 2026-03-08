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

const planets = [
    { name: 'ดาวพุธ', src: '/planets/mercury.png' },
    { name: 'ดาวศุกร์', src: '/planets/venus.png' },
    { name: 'ดาวอังคาร', src: '/planets/mars.png' },
    { name: 'ดาวพฤหัส', src: '/planets/jupiter.png' },
    { name: 'ดาวเสาร์', src: '/planets/saturn.png' },
    { name: 'ดาวยูเรนัส', src: '/planets/uranus.png' },
    { name: 'ดาวเนปจูน', src: '/planets/neptune.png' },
    { name: 'ดาวพลูโต', src: '/planets/pluto.png' },
];

export default function PlanetSelector() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedPlanet, setSelectedPlanet] = useState("/planets/mars.png");

    return (
        <>
            {/* --- ส่วนที่แสดงบนหน้าจอหลัก --- */}
            <div className="relative mb-10 group cursor-pointer" onClick={onOpen}>
                {/* แสงฟุ้งรอบดาว */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all"></div>

                <div className="relative">
                    <img
                        src={selectedPlanet}
                        className="size-32 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-transform group-hover:scale-110 duration-500"
                        alt="pilot avatar"
                    />
                    {/* ปุ่มไอคอนแก้ไขตัวเล็กๆ มุมล่าง */}
                    <div className="absolute bottom-1 right-1 bg-blue-600 p-2.5 rounded-full border-2 border-slate-900 shadow-xl group-hover:bg-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </div>
                </div>
                <p className="text-[10px] text-center mt-4 text-blue-300/60 font-bold uppercase tracking-[0.2em]">
                    แตะเพื่อเปลี่ยนถิ่นกำเนิด
                </p>
            </div>

            {/* --- ส่วน Modal (จะเด้งขึ้นมาเมื่อคลิกข้างบน) --- */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                scrollBehavior="inside"
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
                            <ModalHeader className="text-blue-400 font-bold tracking-wide">
                                เลือกถิ่นกำเนิดในระบบสุริยะ
                            </ModalHeader>
                            <ModalBody className="py-6">
                                <div className="grid grid-cols-2 gap-3 pb-4">
                                    {planets.map((planet) => (
                                        <button
                                            key={planet.name}
                                            onClick={() => {
                                                setSelectedPlanet(planet.src);
                                                onClose();
                                            }}
                                            className={`flex items-center gap-3 p-3 rounded-2xl transition-all hover:bg-white/5 group border border-transparent ${selectedPlanet === planet.src ? 'bg-blue-500/20 border-blue-500/50' : ''
                                                }`}
                                        >
                                            <img
                                                src={planet.src}
                                                alt={planet.name}
                                                className="size-12 object-contain group-hover:rotate-12 transition-transform duration-300"
                                            />
                                            <span className="text-xs font-medium text-slate-200">{planet.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" onPress={onClose} className="text-slate-400 font-bold">
                                    ปิดหน้าต่าง
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}