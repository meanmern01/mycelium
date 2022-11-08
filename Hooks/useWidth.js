import { useEffect, useState } from "react";

export const useWidth = () => {
    if (process.browser) {
        const [width, setWidth] = typeof window !== undefined && useState(window.innerWidth);
        const handleResize = () => setWidth(typeof window !== undefined && window.innerWidth);
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [width]);
        return width;
    }
    return 0;
};