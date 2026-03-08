"use client"

import BoardingPassCard from "@/components/BoardingPassCard"
import { TicketsPlane } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function WelcomePage() {

    const [print, setPrint] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setPrint(true), 0)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="w-full min-h-screen bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 flex flex-col items-center">

            {/* HEADER */}
            <div className="mt-10 flex flex-col items-center">
                <TicketsPlane
                    size={"60px"}
                    className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                />

                <h1 className="text-2xl font-black mt-4 tracking-[0.2em]
                bg-linear-to-r from-white via-violet-200 to-blue-400 
                bg-clip-text text-transparent">
                    BOARDING PASS
                </h1>

                <div className="h-1 w-12 bg-violet-500 mt-2 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
            </div>


            {/* PRINTER AREA */}
            <div
                className="mt-10 relative flex items-end justify-center overflow-hidden"

                /* 👇 ปรับความสูงพื้นที่เครื่องปริ้นตรงนี้ */
                /* ถ้าการ์ดสูงขึ้นให้เพิ่มค่า */
                style={{ height: 507, width: 340 }}
            >

                {/* PRINTER SLOT */}
                <div className="absolute bottom-0 w-[21rem] rounded-full h-4 bg-black shadow-inner z-20"></div>

                {/* SHADOW INSIDE PRINTER */}
                <div className="absolute bottom-1 w-[320px] h-6 bg-gradient-to-t from-black/70 to-transparent z-10"></div>


                {/* TICKET PRINT ANIMATION */}
                <motion.div
                    initial={{
                        y: 300,  // 👈 จุดเริ่มต้นของการ์ด (ปรับความลึกของเครื่องปริ้น)
                        opacity: 0
                    }}

                    animate={
                        print
                            ? {
                                y: [600, 80, 0], // 👈 keyframe ทำให้ค่อย ๆ โผล่ขึ้น
                                opacity: [1, 1, 1]
                            }
                            : {}
                    }

                    transition={{
                        duration: 3, // 👈 ปรับความช้าของการปริ้น
                        ease: "easeOut"
                    }}

                    className="relative z-0"
                >
                    <BoardingPassCard />
                </motion.div>

            </div>

        </div>
    )
}