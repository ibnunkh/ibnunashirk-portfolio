// Konfigurasi default untuk berbagai jenis animasi

export const easingPresets = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};

export const slideVariants = {
    // Slide dari kiri
    slideFromLeft: {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },

    // Slide dari kanan
    slideFromRight: {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },

    // Slide dari atas
    slideFromTop: {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },

    // Slide dari bawah
    slideFromBottom: {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },

    // Diagonal slide
    slideFromTopLeft: {
        hidden: { x: -100, y: -100, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    },

    slideFromTopRight: {
        hidden: { x: 100, y: -100, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    },

    slideFromBottomLeft: {
        hidden: { x: -100, y: 100, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    },

    slideFromBottomRight: {
        hidden: { x: 100, y: 100, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    },
};

export const scaleVariants = {
    scaleIn: {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    },

    scaleInBounce: {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
        },
    },

    scaleUp: {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    },

    scaleDown: {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    },
};

export const rotateVariants = {
    rotateIn: {
        hidden: { rotate: -180, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
    },

    rotateInReverse: {
        hidden: { rotate: 180, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
    },

    rotate3D: {
        hidden: { rotateY: 90, opacity: 0 },
        visible: { rotateY: 0, opacity: 1 },
    },
};

export const fadeVariants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },

    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },

    fadeInDown: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    },
};

// Default transition configurations
export const transitionPresets = {
    smooth: { duration: 0.6, ease: easingPresets.easeOut },
    bouncy: { type: "spring", stiffness: 300, damping: 20 },
    slow: { duration: 1.2, ease: easingPresets.easeInOut },
    fast: { duration: 0.3, ease: easingPresets.easeOut },
    elastic: { type: "spring", stiffness: 200, damping: 15 },
};

// Stagger configuration
export const staggerConfig = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },

    fastStagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
            },
        },
    },

    slowStagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    },
};

// Hover animation presets
export const hoverPresets = {
    scale: { scale: 1.05 },
    scaleSmall: { scale: 1.02 },
    scaleLarge: { scale: 1.1 },
    lift: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" },
    rotate: { rotate: 5 },
    skew: { skewX: 2 },
    glow: {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.3 },
    },
};

// Tap animation presets
export const tapPresets = {
    scale: { scale: 0.95 },
    scaleSmall: { scale: 0.98 },
    scaleLarge: { scale: 0.9 },
};

// Advanced animation utilities
export const createSlideAnimation = (direction, distance = 100) => {
    const directions = {
        left: { x: -distance },
        right: { x: distance },
        up: { y: -distance },
        down: { y: distance },
    };

    return {
        hidden: { ...directions[direction], opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    };
};

export const createStaggerContainer = (delay = 0.1, childDelay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: delay,
            delayChildren: childDelay,
        },
    },
});

// Responsive animation helpers
export const getResponsiveAnimation = (mobile, tablet, desktop) => {
    if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 768) return mobile;
        if (width < 1024) return tablet;
        return desktop;
    }
    return desktop; // fallback untuk SSR
};
