"use client"

import Barcode from "react-barcode";
import { useRef } from "react";
import Link from "next/link"

export default function BoardingPass() {

    const ticketRef = useRef<HTMLDivElement>(null)

    const now = new Date()

    const marsArrival = new Date()
    marsArrival.setDate(now.getDate() + 210)

    const formatDate = (date: Date) =>
        date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })

    const formatTime = (date: Date) =>
        date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        })

    const ticketCode = `EARTH-MARS-${Date.now()}`

    return (
        <div className="flex items-center justify-center">

            {/* ใส่ ref ตรงนี้ */}
            <div ref={ticketRef} className="relative w-[320px] rounded-2xl bg-white shadow-xl overflow-hidden">

                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-5xl font-bold text-blue-600">E</h1>
                            <p className="text-xs text-gray-500">EARTH</p>
                            <p className="text-[10px] text-gray-400">{formatDate(now)}</p>
                            <p className="text-[10px] text-gray-400">{formatTime(now)}</p>
                        </div>

                        <div className="text-right">
                            <h1 className="text-5xl font-bold text-blue-600">M</h1>
                            <p className="text-xs text-gray-500">MARS</p>
                            <p className="text-[10px] text-gray-400">{formatDate(marsArrival)}</p>
                            <p className="text-[10px] text-gray-400">{formatTime(marsArrival)}</p>
                        </div>
                    </div>

                    <div className="text-center relative h-16 flex justify-center items-center">
                        <div className="text-blue-500 text-8xl absolute -top-5">✈</div>
                        <div className="border-t-2 border-dashed border-blue-400 mt-1 w-full"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                        <div>
                            <p className="text-gray-400">Passenger</p>
                            <p className="font-semibold">JOHN DOE</p>
                        </div>

                        <div>
                            <p className="text-gray-400">Flight</p>
                            <p className="font-semibold">XM-0137</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mt-3 text-sm">
                        <div>
                            <p className="text-gray-400">Seat</p>
                            <p className="font-semibold">A1</p>
                        </div>

                        <div>
                            <p className="text-gray-400">Gate</p>
                            <p className="font-semibold">1</p>
                        </div>

                        <div>
                            <p className="text-gray-400">Terminal</p>
                            <p className="font-semibold">1EM</p>
                        </div>
                    </div>
                </div>

                <div className="relative border-b-2 border-dashed border-blue-300">
                    <div className="absolute -left-3 -top-2.5 w-6 h-6 bg-blue-900 rounded-full"></div>
                    <div className="absolute -right-3 -top-2.5 w-6 h-6 bg-blue-900 rounded-full"></div>
                </div>

                <div className="p-6 text-center flex flex-col items-center gap-4">

                    <Barcode
                        value={ticketCode}
                        height={50}
                        width={1}
                        displayValue={false}
                    />

                    <Link
                        href="/mission"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        เริ่มต้นภารกิจ!
                    </Link>

                </div>

            </div>
        </div>
    )
}