import BoardingPassCard from "@/components/BoardingPassCard";
import { TicketsPlane } from "lucide-react";

export default function WelcomePage() {
    return (
        <>
            <div className="w-full min-h-screen bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 flex flex-col items-center">
                <div className="mt-10 flex flex-col items-center">
                    <TicketsPlane size={"60px"} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

                    <h1 className="text-2xl font-black mt-4 flex gap-2 items-center tracking-[0.2em]
                                   bg-linear-to-r from-white via-violet-200 to-blue-400 
                                   bg-clip-text text-transparent drop-shadow-sm">
                        BOARDING PASS
                    </h1>

                    <div className="h-1 w-12 bg-violet-500 mt-2 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                </div>
                <div className="mt-10">
                    <BoardingPassCard />
                </div>
            </div>
        </>
    )
}