"use client";
import { LoadingProvider } from "@/context/loading-provider";
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeroUIProvider>
                <LoadingProvider>
                    {children}
                </LoadingProvider>
            </HeroUIProvider>
        </>
    );
}