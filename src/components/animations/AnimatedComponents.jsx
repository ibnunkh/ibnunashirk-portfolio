"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const SlideFromTop = ({ children, delay = 0, duration = 0.8 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration, delay }}
            className=""
        >
            {children}
        </motion.div>
    );
};

export const SlideFromBottom = ({ children, delay = 0, duration = 0.8 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration, delay }}
            className=""
        >
            {children}
        </motion.div>
    );
};

export const SlideFromLeft = ({ children, delay = 0, duration = 1.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration, delay }}
            className=""
        >
            {children}
        </motion.div>
    );
};

export const SlideFromRight = ({ children, delay = 0, duration = 1.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration, delay }}
            className=""
        >
            {children}
        </motion.div>
    );
};

export const ScrollFadeIn = ({ children, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 300, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};