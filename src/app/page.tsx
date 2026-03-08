"use client";
import LoginCard from "@/components/LoginCard";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  }

  return (
    <div className={`w-full flex flex-col items-center h-screen bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 relative transition-all duration-200 ${!openLogin && "pt-10"} overflow-hidden`}>
      <img src="/logo/logo.png" alt="logo" className={`${openLogin ? "w-40" : "w-80"} transition-all duration-200`} />
      <div className={`${openLogin ? "scale-85" : "scale-100"} flex flex-col items-center`}>
        <div className={`flex gap-5 text-4xl transition-all duration-200`}>
          <h1 className="font-bold text-violet-200">SPACE</h1>
          <h1 className="font-bold text-red-500">FIGHT</h1>
        </div>
        <label className="text-gray-200 w-2/3 text-center">
          โปรแกรมที่จะช่วยเป็นสมองในส่วนหน้าที่จะช่วยจำการบ้านที่ครูสั่ง
        </label>
      </div>

      <div className={`w-full flex flex-col items-center justify-center transition-all duration-200 ${openLogin ? "relative mt-5" : "absolute bottom-20 left-0"}`}>
        <div className="flex gap-2">
          <span className={`size-2 rounded-full ${openLogin ? "bg-white/10" : "bg-white"}`}></span>
          <span className={`size-2 rounded-full ${!openLogin ? "bg-white/10" : "bg-white"}`}></span>
        </div>
        <button onClick={handleOpenLogin} className={`p-3 px-10  border-2 border-white/50 text-white rounded-3xl mt-8 shadow-lg cursor-pointer active:scale-90 transition-all duration-200 flex gap-2 items-center z-50 ${openLogin ? "hidden" : "block"}`}>
          เข้าสู่ระบบ <ArrowRight />
        </button>
      </div>

      <LoginCard open={openLogin} handleOpen={handleOpenLogin} />
    </div>
  );
}