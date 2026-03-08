import Signup from "@/components/Signup";

export default function SignupPage() {
    return (
        <div className="min-h-screen w-full bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 flex flex-col items-center justify-start overflow-y-auto pb-20">
            {/* Logo Section */}
            <div className="flex flex-col items-center mt-20 mb-12">
                <img src="/logo/logo-verticle.png" alt="logo" className="w-44 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
                <h1 className="text-3xl font-bold mt-10 text-white tracking-tight text-center">
                    ทำให้เรารู้จักคุณมากกว่านี้
                </h1>
                <p className="text-white/40 mt-2 font-light">กรอกข้อมูลของคุณเพื่อสมัครสมาชิก</p>
            </div>

            {/* Form Section (No Card) */}
            <div className="w-full max-w-md px-6">
                <Signup />
            </div>
        </div>
    )
}