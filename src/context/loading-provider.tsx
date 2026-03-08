"use client";
import Loading from "@/components/Loading";
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";

type LoadingContextType = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading && (
                <Loading />
            )}

            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error("useLoading must be used inside LoadingProvider");
    }

    return context;
}