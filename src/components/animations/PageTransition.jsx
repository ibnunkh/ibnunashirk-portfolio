"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TransitionOverlay = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 700); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-[9999]"
                style={{ backgroundColor: "#0081FB" }}
                initial={{ y: "-100%" }}
                animate={{ y: isExiting ? "100%" : "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() => {
                    if (isExiting && onComplete) {
                        onComplete();
                    }
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-[9998]"
                style={{ backgroundColor: "#87CEFA" }}
                initial={{ y: "-100%" }}
                animate={{ y: isExiting ? "100%" : "0%" }}
                exit={{ y: "100%" }}
                transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    delay: 0,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-[9997]"
                style={{ backgroundColor: "#ffffff" }}
                initial={{ y: "-100%" }}
                animate={{ y: isExiting ? "100%" : "0%" }}
                exit={{ y: "100%" }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0, 
                }}
            />
        </>
    );
};

const PageTransition = ({ children }) => {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
    }, [pathname]);

    const handleOverlayComplete = () => {
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    };

    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                {isAnimating && (
                    <TransitionOverlay
                        key={`transition-${pathname}`}
                        onComplete={handleOverlayComplete}
                    />
                )}
            </AnimatePresence>

            {!isAnimating && (
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            )}
        </>
    );
};

export default PageTransition;
